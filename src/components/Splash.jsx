import { useEffect, useState } from 'react'
export default function Splash({ onDone }) {
  const [out, setOut] = useState(false)
  useEffect(() => { const a = setTimeout(() => setOut(true), 2500), b = setTimeout(onDone, 3100); return () => { clearTimeout(a); clearTimeout(b) } }, [onDone])
  return (
    <div aria-hidden="true" className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory transition-opacity duration-700 ${out ? 'opacity-0' : 'opacity-100'}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="#1B3A2D" strokeWidth="1.5">
        <circle className="splash-ring" cx="60" cy="60" r="51" transform="rotate(-90 60 60)" />
        <line className="splash-hand" x1="60" y1="60" x2="60" y2="24" strokeLinecap="round" />
        <line x1="60" y1="60" x2="80" y2="72" strokeLinecap="round" />
      </svg>
      <p className="splash-logo mt-8 font-serif text-4xl text-green opacity-0">VANTIER</p>
      <div className="mt-4 h-px w-24 bg-green/40" />
    </div>)
}
