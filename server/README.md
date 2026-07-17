# Contact-form email service (server-side)

Runs `contact-server.mjs` as a small Node service on the origin server, behind
nginx at `/api/contact`. Sends contact-form submissions via Resend. No Cloudflare
account needed — only server access. Same approach as the True North site.

## Architecture
```
browser → Cloudflare (passthrough) → nginx (origin) ──/api/contact──> Node service (localhost:8788) → Resend
```

## One-time setup (SSH in with sudo)

### 0. See what's on the box
```bash
cat /etc/os-release ; nginx -v ; node -v ; which node ; ls /etc/nginx/sites-enabled/
```
*(Steps below assume Ubuntu/Debian + nginx. Need Node 18+ for global fetch.)*

### 1. Install Node if missing
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs
```

### 2. Put the service on the box
```bash
sudo mkdir -p /opt/itg-contact
sudo cp contact-server.mjs /opt/itg-contact/
```

### 3. Store the Resend key (root-only, out of the unit file)
```bash
echo 'RESEND_API_KEY=re_your_INTEGRITY_key_here' | sudo tee /etc/itg-contact.env
sudo chmod 600 /etc/itg-contact.env
```
> ⚠️ Use the API key from the **Integrity Towing** Resend account, not True North's.

### 4. systemd service
Create `/etc/systemd/system/itg-contact.service`:
```ini
[Unit]
Description=Integrity Towing contact-form email service
After=network.target

[Service]
WorkingDirectory=/opt/itg-contact
ExecStart=/usr/bin/node /opt/itg-contact/contact-server.mjs
EnvironmentFile=/etc/itg-contact.env
Environment=PORT=8788
Restart=always
RestartSec=3
User=www-data
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
```
(Adjust `ExecStart` to your `which node` path.) Then:
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now itg-contact
sudo systemctl status itg-contact          # active (running)
```

Smoke-test directly (before nginx):
```bash
curl -X POST http://127.0.0.1:8788/api/contact \
  -H 'content-type: application/json' \
  -d '{"name":"Test","email":"you@example.com","phone":"555","address":"1 Main St","subject":"General Inquiry","message":"hello"}'
# → {"ok":true}  and an email lands in impound@integritytow.com
```

### 5. nginx — proxy /api/contact to the service
In the site's server block (`/etc/nginx/sites-enabled/…`), add:
```nginx
location = /api/contact {
    proxy_pass http://127.0.0.1:8788;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```
```bash
sudo nginx -t && sudo systemctl reload nginx
```

### 6. Deploy the site
The forms already post to the relative `/api/contact` (`CONTACT_ENDPOINT` in
`src/services/emailService.ts`). Build and deploy `dist/` as usual.

### 7. Test end-to-end
Submit each form (Quote, Service, Contact) → lands in `impound@integritytow.com`,
Reply goes to the submitter.

## Notes
- Binds to **127.0.0.1 only** — nginx is the only way in.
- Recipient is `impound@integritytow.com` (`TO` in `contact-server.mjs`). To split
  by subject (e.g. Employment Application → a jobs inbox), swap `TO` for a
  per-subject map like the True North site does, then restart the service.
- Logs: `sudo journalctl -u itg-contact -f`.
