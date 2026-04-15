'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/data/projects'
import { ExternalLink } from 'lucide-react'

export function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section
      id="work"
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
          Portfolio
        </div>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#F8FAFC', marginBottom: 16 }}
        >
          Work we've built
        </h2>
        <p style={{ fontSize: 18, color: '#94A3B8' }}>
          Real portfolios. Real freelancers.{' '}
          <span style={{ color: '#F8FAFC', fontWeight: 500 }}>Real results.</span>
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              aspectRatio: '16/10',
              cursor: 'pointer',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            whileHover="hover"
          >
            {/* Gradient background (simulates portfolio thumbnail) */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: project.gradient,
              }}
            />

            {/* Abstract design elements */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 32,
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: project.accent,
                    marginBottom: 10,
                    opacity: 0.8,
                  }}
                >
                  {project.category}
                </div>
                <div
                  className="font-display"
                  style={{ fontSize: 26, fontWeight: 700, color: '#F8FAFC', letterSpacing: '-0.03em', marginBottom: 8 }}
                >
                  {project.title}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(248,250,252,0.55)', maxWidth: 220 }}>
                  {project.description}
                </div>
                {/* Mini UI elements */}
                <div style={{ marginTop: 20, display: 'flex', gap: 8, justifyContent: 'center' }}>
                  {['Work', 'About', 'Contact'].map(item => (
                    <div
                      key={item}
                      style={{
                        fontSize: 11,
                        padding: '4px 12px',
                        borderRadius: 999,
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <motion.div
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(10,15,30,0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <ExternalLink size={28} color="#7C3AED" />
              <span style={{ fontSize: 15, fontWeight: 600, color: '#F8FAFC' }}>View Live →</span>
            </motion.div>

            {/* Bottom label */}
            <motion.div
              variants={{
                rest: { y: 0 },
                hover: { y: 60 },
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(10,15,30,0.95), transparent)',
                padding: '32px 24px 20px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#F8FAFC' }}>{project.title}</div>
              </div>
              <div
                style={{
                  background: 'rgba(124,58,237,0.9)',
                  borderRadius: 999,
                  padding: '4px 12px',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#fff',
                }}
              >
                {project.category}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
