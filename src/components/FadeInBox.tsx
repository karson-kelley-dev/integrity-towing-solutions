import { useEffect, useRef, useState } from 'react'
import Box, { type BoxProps } from '@mui/material/Box'

interface FadeInBoxProps extends BoxProps {
  delay?: number
  distance?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

function getInitialTransform(direction: 'up' | 'down' | 'left' | 'right', distance: number) {
  switch (direction) {
    case 'up':    return `translateY(${distance}px)`
    case 'down':  return `translateY(-${distance}px)`
    case 'left':  return `translateX(${distance}px)`
    case 'right': return `translateX(-${distance}px)`
  }
}

export default function FadeInBox({ delay = 0, distance = 24, direction = 'up', children, sx, ...props }: FadeInBoxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : getInitialTransform(direction, distance),
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
