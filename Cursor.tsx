import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Growth Pilot — Portfolios That Get Freelancers Hired',
  description:
    'High-converting one-page websites designed to turn your skills into clients — in days, not weeks. Custom design, 72-hour delivery.',
  openGraph: {
    title: 'Growth Pilot — Portfolios That Get Freelancers Hired',
    description: 'Custom portfolios for freelancers. Built in 72 hours.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
