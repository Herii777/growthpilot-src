'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { staggerContainerFast, wordReveal } from '@/lib/animations'
import { Star } from 'lucide-react'

const headlineWords = ['We', 'build', 'portfolios', 'that', 'get', 'freelancers']

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse tilt for mockup card
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: 72,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '72px 80px 0',
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'rgba(124,58,237,0.15)',
          filter: 'blur(120px)',
          animation: 'orb-drift 25s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'rgba(16,185,129,0.1)',
          filter: 'blur(120px)',
          animation: 'orb-drift 30s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }}
      />

      {/* Dot grid */}
      <div
        className="dot-grid"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          gap: 80,
          alignItems: 'center',
          paddingBottom: 80,
          paddingTop: 40,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Left column */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(124,58,237,0.15)',
              border: '1px solid rgba(124,58,237,0.4)',
              borderRadius: 999,
              padding: '8px 16px',
              marginBottom: 32,
            }}
          >
            <span style={{ color: '#7C3AED', fontSize: 14 }}>✦</span>
            <span style={{ color: '#A855F7', fontSize: 13, fontWeight: 500 }}>
              Now accepting new clients
            </span>
          </motion.div>

          {/* Headline */}
          <div
            className="font-display"
            style={{
              fontSize: 'clamp(48px, 5.5vw, 80px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#F8FAFC',
              marginBottom: 24,
            }}
          >
            <motion.div
              variants={staggerContainerFast}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0 14px' }}
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordReveal} style={{ display: 'inline-block' }}>
                  {word}
                </motion.span>
              ))}
              <motion.span
                variants={wordReveal}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #7C3AED, #10B981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                hired.
              </motion.span>
            </motion.div>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontSize: 18,
              lineHeight: 1.75,
              color: '#94A3B8',
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            High-converting one-page websites designed to turn your skills into
            clients — in days, not weeks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: 32 }}
          >
            <motion.button
              onClick={() => scrollTo('pricing')}
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                color: '#fff',
                border: 'none',
                borderRadius: 999,
                padding: '16px 32px',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.01em',
              }}
              whileHover={{
                y: -2,
                scale: 1.03,
                boxShadow: '0 0 32px rgba(124,58,237,0.5)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Get Started →
            </motion.button>
            <motion.button
              onClick={() => scrollTo('work')}
              style={{
                background: 'transparent',
                color: '#F8FAFC',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 999,
                padding: '16px 32px',
                fontSize: 15,
                fontWeight: 500,
                cursor: 'pointer',
              }}
              whileHover={{
                borderColor: 'rgba(255,255,255,0.4)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Social proof micro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#F59E0B" stroke="none" />
              ))}
            </div>
            <span style={{ fontSize: 14, color: '#94A3B8' }}>
              Loved by{' '}
              <span style={{ color: '#F8FAFC', fontWeight: 500 }}>200+ freelancers</span>{' '}
              worldwide
            </span>
          </motion.div>
        </div>

        {/* Right column — Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          {/* Glow behind card */}
          <div
            style={{
              position: 'absolute',
              inset: -40,
              background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.25) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              perspective: 1000,
              transformStyle: 'preserve-3d',
              position: 'relative',
            }}
          >
            {/* Browser mockup */}
            <div
              style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                overflow: 'hidden',
                width: 420,
                boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  background: '#0a0f1e',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#FF5F57', '#FEBC2E', '#28C840'].map((c, i) => (
                    <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: 6,
                    padding: '4px 10px',
                    fontSize: 12,
                    color: '#94A3B8',
                    textAlign: 'center',
                  }}
                >
                  alexchen.design
                </div>
              </div>

              {/* Portfolio preview */}
              <div
                style={{
                  height: 300,
                  background: 'linear-gradient(135deg, #0a0533 0%, #1a0a3e 40%, #0a1628 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 32,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Abstract glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: -60,
                    left: '30%',
                    width: 200,
                    height: 200,
                    background: 'rgba(124,58,237,0.3)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                  }}
                />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#7C3AED',
                      marginBottom: 12,
                    }}
                  >
                    UX Designer
                  </div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: '#F8FAFC',
                      letterSpacing: '-0.03em',
                      marginBottom: 12,
                      lineHeight: 1.1,
                    }}
                  >
                    I design products
                    <br />
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #7C3AED, #10B981)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      people love.
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: 'rgba(124,58,237,0.2)',
                      border: '1px solid rgba(124,58,237,0.4)',
                      borderRadius: 999,
                      padding: '6px 14px',
                    }}
                  >
                    <span style={{ fontSize: 12, color: '#A855F7', fontWeight: 500 }}>View Portfolio →</span>
                  </div>
                </div>
              </div>

              {/* Nav preview */}
              <div
                style={{
                  padding: '12px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {['Work', 'About', 'Process', 'Contact'].map(item => (
                  <span key={item} style={{ fontSize: 11, color: '#94A3B8' }}>{item}</span>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              style={{
                position: 'absolute',
                top: 40,
                right: -48,
                background: 'rgba(17,24,39,0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ fontSize: 18 }}>⭐</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#F8FAFC' }}>5★ Rating</div>
                <div style={{ fontSize: 11, color: '#94A3B8' }}>200+ clients</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: 80,
                left: -56,
                background: 'rgba(17,24,39,0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B981, #0D9488)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                }}
              >
                ⚡
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#F8FAFC' }}>72h Delivery</div>
                <div style={{ fontSize: 11, color: '#94A3B8' }}>Guaranteed</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: -24,
                right: 24,
                background: 'rgba(124,58,237,0.15)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: 12,
                padding: '10px 16px',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(124,58,237,0.2)',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: '#A855F7' }}>Live in 3 days</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, #7C3AED, transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}
