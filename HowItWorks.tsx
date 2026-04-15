'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    q: 'How does the 72-hour delivery work?',
    a: "Once we receive your content and approve the brief, our team starts immediately. We work across time zones to ensure your portfolio is live within 3 business days — guaranteed for Pro customers.",
  },
  {
    q: 'Do I need to provide content?',
    a: "Yes — we send a simple content form after purchase. You fill in your bio, skills, services, and project samples. We handle all the design, copywriting polish, and technical work.",
  },
  {
    q: 'Can I request changes after launch?',
    a: "Starter includes 1 full revision round. Pro includes 3. Each round covers unlimited changes to layout, copy, and design within the scope of the original brief. Additional revisions are €97 each.",
  },
  {
    q: 'What platform is the site built on?',
    a: "We build on Next.js for maximum performance and flexibility. Your site will score 95+ on Lighthouse, load in under 2 seconds, and be fully manageable without a developer.",
  },
  {
    q: 'Will my site show up on Google?',
    a: "Yes. Every site includes on-page SEO optimization, meta tags, structured data, and semantic HTML. Most clients appear in search results within 2–4 weeks of going live.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "We go through revisions until you're satisfied. If after your included revision rounds we genuinely can't make you happy, we offer a full refund — no questions asked. This has never happened.",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
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
          FAQ
        </div>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#F8FAFC', marginBottom: 16 }}
        >
          Frequently asked questions
        </h2>
      </motion.div>

      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              borderLeft: open === i ? '2px solid #7C3AED' : '2px solid transparent',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              marginBottom: 2,
              transition: 'border-color 0.2s',
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: open === i ? '#F8FAFC' : '#94A3B8',
                  transition: 'color 0.2s',
                  lineHeight: 1.4,
                }}
              >
                {faq.q}
              </span>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: `1px solid ${open === i ? '#7C3AED' : 'rgba(255,255,255,0.14)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'border-color 0.2s',
                  color: open === i ? '#7C3AED' : '#94A3B8',
                }}
              >
                {open === i ? <X size={14} /> : <Plus size={14} />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      color: '#94A3B8',
                      lineHeight: 1.75,
                      padding: '0 24px 24px 24px',
                    }}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
