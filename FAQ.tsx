'use client'

import { useLenis } from '@/lib/lenis'
import { Cursor } from '@/components/Cursor'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { HowItWorks } from '@/components/HowItWorks'
import { Portfolio } from '@/components/Portfolio'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  useLenis()

  return (
    <>
      <Cursor />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <SocialProof />
        <HowItWorks />
        {/* Breathing zone */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.04)', margin: '0 80px' }} />
        <Portfolio />
        <Services />
        {/* Breathing zone */}
        <div
          style={{
            textAlign: 'center',
            padding: '64px 80px',
            background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.04), transparent)',
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#F8FAFC',
              opacity: 0.6,
            }}
          >
            "Your portfolio is your first impression.
            <br />
            Make it{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 1,
              }}
            >
              unforgettable.
            </span>
            "
          </p>
        </div>
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
