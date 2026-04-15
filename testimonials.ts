import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  variant?: 'violet-mint' | 'violet-purple'
}

export function GradientText({ children, className = '', variant = 'violet-mint' }: GradientTextProps) {
  const gradients = {
    'violet-mint': 'linear-gradient(135deg, #7C3AED, #10B981)',
    'violet-purple': 'linear-gradient(135deg, #7C3AED, #A855F7)',
  }

  return (
    <span
      style={{
        background: gradients[variant],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      className={className}
    >
      {children}
    </span>
  )
}
