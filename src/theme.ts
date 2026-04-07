import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D2B45',
      light: '#2d4060',
      dark: '#141e30',
    },
    secondary: {
      main: '#3EAACC',
      dark: '#0057A5',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1D2B45',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: "'Saira', sans-serif",
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "'Saira', sans-serif",
          fontWeight: 600,
          borderRadius: 4,
          letterSpacing: '0.01em',
        },
        sizeLarge: {
          padding: '13px 32px',
          fontSize: '1.0625rem',
        },
        sizeMedium: {
          padding: '10px 24px',
          fontSize: '0.9375rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            fontFamily: "'Saira', sans-serif",
          },
          '& .MuiInputLabel-root': {
            fontFamily: "'Saira', sans-serif",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: '0 2px 16px rgba(0,0,0,0.18)' },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { fontFamily: "'Saira', sans-serif" },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: { fontFamily: "'Saira', sans-serif" },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        body: { fontFamily: "'Saira', sans-serif" },
        'a': { color: '#0057A5', textDecoration: 'none' },
        'a:hover': { textDecoration: 'underline' },
      },
    },
  },
})

export default theme
