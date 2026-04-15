@import "tailwindcss";
@import "tw-animate-css";

:root {
  --bg-primary: #0A0F1E;
  --bg-surface: #111827;
  --bg-glass: rgba(17, 24, 39, 0.6);
  --accent-violet: #7C3AED;
  --accent-purple: #A855F7;
  --accent-mint: #10B981;
  --text-primary: #F8FAFC;
  --text-muted: #94A3B8;
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-medium: rgba(255, 255, 255, 0.14);
  --glow-violet: rgba(124, 58, 237, 0.3);
  --glow-mint: rgba(16, 185, 129, 0.2);
  --font-display: 'Clash Display', sans-serif;
  --font-body: 'Inter', sans-serif;
  --background: var(--bg-primary);
  --foreground: var(--text-primary);
}

*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-body);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: var(--accent-violet); border-radius: 2px; }
::selection { background: rgba(124, 58, 237, 0.3); color: var(--text-primary); }

.gradient-text {
  background: linear-gradient(135deg, #7C3AED, #10B981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.font-display { font-family: var(--font-display); }

.glass {
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.dot-grid {
  background-image: radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 32px 32px;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-animate { animation: marquee-scroll 60s linear infinite; }
.marquee-animate:hover { animation-play-state: paused; }

@keyframes float-y {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
.float-anim { animation: float-y 7s ease-in-out infinite; }

@keyframes border-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animated-border {
  background: linear-gradient(135deg, #7C3AED, #A855F7, #10B981, #7C3AED);
  background-size: 300% 300%;
  animation: border-rotate 4s ease infinite;
}

@keyframes orb-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 10px) scale(0.95); }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
