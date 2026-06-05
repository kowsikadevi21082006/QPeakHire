import React from 'react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(245,246,250,0.06)', padding: '48px 40px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: 'var(--radius-sm)', background: 'var(--peak)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="sy" style={{ fontSize: 14, fontWeight: 800, color: '#fff' }}>Q</span>
              </div>
              <span className="sy" style={{ fontSize: 15, fontWeight: 700 }}>QPeak<span style={{ color: 'var(--cobalt)' }}>Hire</span></span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 280 }}>
              The AI-powered bench sales platform built by QuantiPeak. Getting candidates hired faster since 2026.
            </p>
            <div style={{ marginTop: 16, fontSize: 12, color: 'var(--ink-mid)' }}>qpeakhire.com</div>
          </div>
          {[
            ['Product', ['Features', 'Dashboard', 'AI Match Engine', 'Pricing', 'Changelog']],
            ['Company', ['About', 'Blog', 'Careers', 'Press', 'Contact']],
            ['Legal', ['Privacy', 'Terms', 'Security', 'Cookie Policy']],
          ].map(([title, links]) => (
            <div key={title}>
              <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>{title}</div>
              {links.map(l => (
                <div key={l} style={{ fontSize: 13, color: '#2E3650', marginBottom: 10, cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#F5F6FA'}
                  onMouseLeave={e => e.target.style.color = '#2E3650'}
                >{l}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(245,246,250,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: '#2E3650' }}>QPeakHire by QuantiPeak · © 2026 · All rights reserved</span>
          <span style={{ fontSize: 12, color: '#2E3650', fontStyle: 'italic', fontFamily: 'Syne, sans-serif' }}>Reach the peak of every hire.</span>
        </div>
      </div>
    </footer>
  );
}
