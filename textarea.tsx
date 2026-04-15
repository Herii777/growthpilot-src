'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { testimonials } from '@/data/testimonials'
import { Star } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section
      id="testimonials"
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
          Testimonials
        </div>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#F8FAFC', marginBottom: 16 }}
        >
          Freelancers love it
        </h2>
        <p style={{ fontSize: 18, color: '#94A3B8' }}>Don't take our word for it.</p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            variants={fadeUp}
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              position: 'relative',
              overflow: 'hidden',
            }}
            whileHover={{
              y: -8,
              boxShadow: '0 20px 60px rgba(124,58,237,0.12)',
              borderColor: 'rgba(124,58,237,0.2)',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Large quote mark */}
            <div
              className="font-display"
              style={{
                position: 'absolute',
                top: 16,
                right: 24,
                fontSize: 80,
                fontWeight: 700,
                color: '#7C3AED',
                opacity: 0.1,
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              "
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: 3 }}>
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={15} fill="#F59E0B" stroke="none" />
              ))}
            </div>

            {/* Quote */}
            <p
              style={{
                fontSize: 15,
                color: '#94A3B8',
                lineHeight: 1.75,
                fontStyle: 'italic',
                flex: 1,
              }}
            >
              "{t.quote}"
            </p>

            {/* Author */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                paddingTop: 16,
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: t.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#F8FAFC' }}>{t.name}</div>
                <div style={{ fontSize: 13, color: '#94A3B8' }}>{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
