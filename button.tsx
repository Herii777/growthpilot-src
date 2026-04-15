'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layers, Zap, Clock } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const services = [
  {
    icon: Layers,
    title: 'Custom One-Page Design',
    description: 'Tailored from scratch to match your personal brand, niche, and target clients. No templates. No shortcuts. Every pixel intentional.',
    tag: 'Design',
  },
  {
    icon: Zap,
    title: 'Mobile-First & Lightning Fast',
    description: 'Built for speed and mobile. Loads in under 2 seconds on any device. Perfect Lighthouse scores. SEO-ready from day one.',
    tag: 'Performance',
  },
  {
    icon: Clock,
    title: 'Delivered in 72 Hours',
    description: 'From kickoff call to live portfolio in 3 days. Because your next client is searching for you right now.',
    tag: 'Speed',
  },
]

export function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: '120px 80px',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 64 }}
      >
        <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7C3AED', marginBottom: 16 }}>
          What you get
        </div>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#F8FAFC', marginBottom: 16 }}
        >
          Everything included.
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #10B981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Nothing hidden.
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        {services.map((svc, i) => {
          const Icon = svc.icon
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.25,0.1,0.25,1)',
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 20px 60px rgba(124,58,237,0.15)',
                borderColor: 'rgba(124,58,237,0.3)',
              }}
            >
              {/* Tag */}
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#94A3B8',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '4px 10px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {svc.tag}
              </div>

              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={26} color="#7C3AED" />
              </div>

              <div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    color: '#F8FAFC',
                    marginBottom: 10,
                  }}
                >
                  {svc.title}
                </h3>
                <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7 }}>
                  {svc.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
