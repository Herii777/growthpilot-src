'use client'

import { motion } from 'framer-motion'
import { Globe, Link2, AtSign, Pen, ArrowRight } from 'lucide-react'

const links = ['How it Works', 'Work', 'Services', 'Pricing', 'FAQ']
const social = [
  { icon: Globe, label: 'Twitter/X', href: '#' },
  { icon: Link2, label: 'LinkedIn', href: '#' },
  { icon: AtSign, label: 'Instagram', href: '#' },
  { icon: Pen, label: 'Dribbble', href: '#' },
]

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, '-'))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        background: '#0A0F1E',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '64px 80px 40px',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* 3-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: 64,
            marginBottom: 48,
          }}
        >
          {/* Left */}
          <div>
            <div
              className="font-display"
              style={{
                fontSize: 22,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 12,
              }}
            >
              Growth Pilot
            </div>
            <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              High-converting portfolios for modern freelancers.
              Turn your skills into clients — in days, not weeks.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(148,163,184,0.5)' }}>
              © 2026 Growth Pilot. All rights reserved.
            </p>
          </div>

          {/* Center */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 20 }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 14,
                      color: '#94A3B8',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#F8FAFC')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 20 }}>
              Connect
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
              {social.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    textDecoration: 'none',
                  }}
                  whileHover={{ backgroundColor: 'rgba(124,58,237,0.15)', borderColor: 'rgba(124,58,237,0.3)', color: '#A855F7' }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <motion.button
              onClick={() => scrollTo('pricing')}
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                color: '#fff',
                border: 'none',
                borderRadius: 999,
                padding: '12px 20px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              Start your project <ArrowRight size={14} />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 24,
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 13, color: 'rgba(148,163,184,0.5)' }}>
            Built with ❤️ for freelancers worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
