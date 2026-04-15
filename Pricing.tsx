'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { MessageSquare, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description:
      'Tell us about your work, your style, and your goals. A quick form and one short call is all we need.',
    detail: 'We handle the rest.',
  },
  {
    num: '02',
    icon: Palette,
    title: 'Design',
    description:
      'Our designers craft a custom one-page site tailored to your niche, personality, and target clients.',
    detail: 'No templates. No shortcuts.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Launch',
    description:
      'Your portfolio goes live — optimized, fast, and designed to convert visitors into paying clients.',
    detail: 'Ready in 72 hours.',
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-20%' })

  return (
    <section
      id="how-it-works"
      ref={ref}
      style={{
        padding: '120px 80px',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 80 }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#7C3AED',
            marginBottom: 16,
          }}
        >
          Process
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#F8FAFC',
            marginBottom: 16,
          }}
        >
          How it works
        </h2>
        <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 480, margin: '0 auto' }}>
          From first message to live portfolio —{' '}
          <span style={{ color: '#F8FAFC', fontWeight: 500 }}>in 72 hours.</span>
        </p>
      </motion.div>

      {/* Steps */}
      <div style={{ position: 'relative' }}>
        {/* Connecting SVG line */}
        <div
          ref={lineRef}
          style={{
            position: 'absolute',
            top: 60,
            left: '16.5%',
            right: '16.5%',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          <svg width="100%" height="2" overflow="visible">
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#7C3AED"
              strokeWidth="1"
              strokeDasharray="6 4"
              strokeOpacity="0.4"
              style={{
                strokeDashoffset: lineInView ? 0 : 600,
                transition: 'stroke-dashoffset 1.5s cubic-bezier(0.16,1,0.3,1)',
              }}
            />
          </svg>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  background: 'rgba(17,24,39,0.6)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: 32,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.25,0.1,0.25,1)',
                  cursor: 'default',
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 60px rgba(124,58,237,0.15)',
                  borderColor: 'rgba(124,58,237,0.3)',
                }}
              >
                {/* Large bg number */}
                <div
                  className="font-display"
                  style={{
                    position: 'absolute',
                    top: -8,
                    right: 16,
                    fontSize: 120,
                    fontWeight: 700,
                    color: '#fff',
                    opacity: 0.04,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <Icon size={24} color="#7C3AED" />
                </div>

                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#7C3AED',
                    marginBottom: 8,
                  }}
                >
                  Step {step.num}
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#F8FAFC',
                    letterSpacing: '-0.02em',
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginBottom: 12 }}>
                  {step.description}
                </p>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#10B981',
                  }}
                >
                  {step.detail}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
