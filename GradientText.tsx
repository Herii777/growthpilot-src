'use client'

const platforms = [
  'Dribbble', 'Behance', 'Upwork', 'Toptal', 'Fiverr',
  '99designs', 'LinkedIn', 'Contra', 'Malt', 'PeoplePerHour',
]

export function SocialProof() {
  // duplicate for seamless loop
  const items = [...platforms, ...platforms]

  return (
    <div
      style={{
        background: '#111827',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '28px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Fade masks */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 160,
          background: 'linear-gradient(to right, #111827, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 160,
          background: 'linear-gradient(to left, #111827, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Scrolling track */}
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee-scroll 1s linear infinite',
        }}
      >
        {items.map((p, i) => (
          <span
            key={i}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#94A3B8',
              opacity: 0.5,
              cursor: 'default',
              letterSpacing: '0.02em',
              padding: '0 40px',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}
