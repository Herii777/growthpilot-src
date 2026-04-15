'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const starter = {
  name: 'Starter',
  price: '€497',
  delivery: '5 business days',
  features: [
    'Custom one-page design',
    'Mobile responsive',
    '1 revision round',
    'Basic SEO setup',
    '30-day support',
  ],
}

const pro = {
  name: 'Pro',
  price: '€897',
  delivery: '72 hours',
  badge: 'Most Popular',
  features: [
    'Everything in Starter',
    'Priority design queue',
    '72-hour delivery',
    '3 revision rounds',
    'Custom domain setup',
    'Analytics integration',
    '60-day support',
  ],
}

export function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="pricing"
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
          Pricing
        </div>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#F8FAFC', marginBottom: 16 }}
        >
          Simple, transparent pricing
        </h2>
        <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 440, margin: '0 auto' }}>
          One-time payment. No subscriptions. No surprises.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          maxWidth: 800,
          margin: '0 auto',
        }}
      >
        {/* Starter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20,
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
          whileHover={{
            y: -4,
            borderColor: 'rgba(255,255,255,0.14)',
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#94A3B8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {starter.name}
            </div>
            <div
              className="font-display"
              style={{ fontSize: 48, fontWeight: 700, color: '#F8FAFC', letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              {starter.price}
            </div>
            <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 6 }}>Delivery in {starter.delivery}</div>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {starter.features.map((f, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'rgba(16,185,129,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Check size={12} color="#10B981" />
                </div>
                <span style={{ fontSize: 14, color: '#94A3B8' }}>{f}</span>
              </li>
            ))}
          </ul>

          <motion.button
            onClick={() => scrollTo('faq')}
            style={{
              background: 'transparent',
              color: '#F8FAFC',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 999,
              padding: '14px',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: 'auto',
            }}
            whileHover={{ borderColor: 'rgba(255,255,255,0.4)', backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Pro — featured with animated border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          {/* Animated gradient border */}
          <div
            className="animated-border"
            style={{
              position: 'absolute',
              inset: -2,
              borderRadius: 22,
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              background: '#0d1424',
              borderRadius: 20,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              boxShadow: '0 0 60px rgba(124,58,237,0.2)',
            }}
          >
            <div>
              {/* Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(124,58,237,0.2)',
                  border: '1px solid rgba(124,58,237,0.4)',
                  borderRadius: 999,
                  padding: '4px 12px',
                  marginBottom: 12,
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 600, color: '#A855F7' }}>{pro.badge}</span>
              </div>

              <div style={{ fontSize: 13, fontWeight: 500, color: '#94A3B8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {pro.name}
              </div>
              <div
                className="font-display"
                style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {pro.price}
                </span>
              </div>
              <div style={{ fontSize: 13, color: '#10B981', marginTop: 6, fontWeight: 500 }}>
                ⚡ Delivery in {pro.delivery}
              </div>
            </div>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {pro.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'rgba(16,185,129,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={12} color="#10B981" />
                  </div>
                  <span style={{ fontSize: 14, color: i === 0 ? '#F8FAFC' : '#94A3B8', fontWeight: i === 0 ? 500 : 400 }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <motion.button
              onClick={() => scrollTo('faq')}
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                color: '#fff',
                border: 'none',
                borderRadius: 999,
                padding: '16px',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                marginTop: 'auto',
                letterSpacing: '0.01em',
              }}
              whileHover={{
                y: -2,
                boxShadow: '0 0 32px rgba(124,58,237,0.5)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
