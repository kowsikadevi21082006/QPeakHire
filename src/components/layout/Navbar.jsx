import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      height: 68,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
      background: scrolled ? 'rgba(10,15,30,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,246,250,0.06)' : 'none',
      transition: 'all 0.35s ease',
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 'var(--radius-sm)',
          background: 'var(--peak)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 20, color: '#fff' }}>Q</span>
        </div>
        <span className="sy" style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.6px' }}>
          QPeak<span style={{ color: 'var(--cobalt)' }}>Hire</span>
        </span>
        <span style={{ fontSize: 11, color: 'var(--ink-mid)', fontWeight: 600, marginLeft: 4 }}>by QuantiPeak</span>
      </div>

      <div style={{ display: 'flex', gap: 40 }}>
        {['Product', 'Solutions', 'Pricing', 'Docs'].map(l => (
          <a key={l} className="nav-a">{l}</a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <a className="nav-a">Sign in</a>
        <button className="btn-p" style={{ padding: '9px 20px', fontSize: 13 }}>Book Demo →</button>
      </div>
    </nav>
  );
}
