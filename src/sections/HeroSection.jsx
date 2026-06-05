import React from 'react';

export default function HeroSection() {
  return (
    <>
      {/* NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 40px', borderBottom: '1px solid var(--bd)',
        background: '#fff', position: 'sticky', top: 0, zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, background: 'var(--peak)', borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
              <path d="M10 2L18 7v6l-8 5-8-5V7z"/>
            </svg>
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 17 }}>
            QPeak<span style={{ color: 'var(--cobalt)' }}>Hire</span>
          </span>
          <span style={{ fontSize: 11, color: 'var(--ink-soft)', marginLeft: 6 }}>by QuantiPeak</span>
        </div>

        <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
          {['Product', 'Solutions', 'Pricing', 'Docs'].map(item => (
            <li key={item}>
              <a href="#" style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-mid)', textDecoration: 'none' }}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-mid)', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 16px' }}>
            Sign in
          </button>
          <button style={{
            fontSize: 14, fontWeight: 600, color: '#fff', background: 'var(--peak)',
            border: 'none', borderRadius: 10, padding: '10px 20px', cursor: 'pointer'
          }}>
            Book Demo →
          </button>
        </div>
      </nav>

      {/* BADGE */}
      <div style={{ padding: '28px 40px 0', maxWidth: 1280, margin: '0 auto' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--cobalt-pale)', border: '1px solid rgba(27,63,255,0.18)',
          borderRadius: 100, padding: '6px 14px', fontSize: 11,
          fontWeight: 600, color: 'var(--cobalt)', letterSpacing: '1.5px', textTransform: 'uppercase'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cobalt)', display: 'inline-block' }}/>
          AI-Powered Bench Sales Platform · Go-Live 2026
        </span>
      </div>

      {/* HERO GRID */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '56px 40px 0',
        display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'start'
      }}>
        {/* LEFT */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 20 }}>
            Recruiting Intelligence
          </p>
          <h1 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 52,
            lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--ink)', marginBottom: 8
          }}>
            Reach the peak<br/>
            of <span style={{ color: 'var(--peak)' }}>every</span>{' '}
            <span style={{ color: 'var(--cobalt)' }}>hire.</span>
          </h1>
          <p style={{ fontSize: 17, color: 'var(--ink-mid)', lineHeight: 1.65, margin: '20px 0 32px', maxWidth: 480 }}>
            QPeakHire automates the full bench sales workflow — job matching, resume tailoring,
            one-click submission, and pipeline tracking — so your candidates move faster.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48 }}>
            <button style={{
              fontSize: 15, fontWeight: 600, color: '#fff', background: 'var(--peak)',
              border: 'none', borderRadius: 10, padding: '14px 28px', cursor: 'pointer'
            }}>
              Book a Demo →
            </button>
            <button style={{
              fontSize: 15, fontWeight: 500, color: 'var(--ink-mid)', background: 'none',
              border: '1px solid var(--bd)', borderRadius: 10, padding: '14px 24px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8
            }}>
              ▶ Watch 3-min Tour
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            {[
              { val: '500+', lbl: 'Candidates Placed' },
              { val: '91%', lbl: 'AI Match Accuracy' },
              { val: '4.2×', lbl: 'Faster Placements' },
            ].map((s, i) => (
              <React.Fragment key={s.lbl}>
                {i > 0 && <div style={{ width: 1, height: 48, background: 'var(--bd)' }}/>}
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, letterSpacing: '-1px', color: 'var(--peak)' }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 2 }}>{s.lbl}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT — CARDS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 8 }}>
          {/* Match Score */}
          <div style={{ background: '#fff', border: '1px solid var(--bd)', borderRadius: 16, padding: '18px 20px' }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>AI Match Score</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 38, fontWeight: 800, color: 'var(--peak)', letterSpacing: '-1px' }}>91%</span>
              <svg width="52" height="52" viewBox="0 0 52 52" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="26" cy="26" r="20" fill="none" stroke="var(--surface)" strokeWidth="4"/>
                <circle cx="26" cy="26" r="20" fill="none" stroke="var(--peak)" strokeWidth="4"
                  strokeDasharray="115 150" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--cobalt-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, color: 'var(--cobalt)' }}>RS</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Rahul Sharma</div>
                <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>Sr. React · Austin, TX</div>
              </div>
            </div>
            <div style={{ height: 4, background: 'var(--surface)', borderRadius: 100, marginTop: 12, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '91%', background: 'var(--peak)', borderRadius: 100 }}/>
            </div>
          </div>

          {/* Placement */}
          <div style={{ background: 'var(--green-pale)', border: '1px solid rgba(13,168,130,0.2)', borderRadius: 16, padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16 }}>🏆</div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--green)', marginBottom: 4 }}>Placement Confirmed</p>
              <p style={{ fontSize: 13, fontWeight: 600 }}>Priya Mehta → FinTech Corp</p>
              <p style={{ fontSize: 11, color: 'var(--ink-mid)', marginTop: 2 }}>$185K · Remote · Start Mon</p>
            </div>
          </div>

          {/* Pipeline */}
          <div style={{ background: '#fff', border: '1px solid var(--bd)', borderRadius: 16, padding: '18px 20px' }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>Pipeline Overview</p>
            {[
              { label: 'Prospect', count: 48, pct: '75%', color: 'var(--ink-soft)' },
              { label: 'Applied', count: 24, pct: '50%', color: 'var(--cobalt)' },
              { label: 'Interview', count: 12, pct: '30%', color: 'var(--gold)' },
              { label: 'Placed', count: 9, pct: '22%', color: 'var(--green)' },
            ].map(row => (
              <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: 'var(--ink-mid)', width: 68, flexShrink: 0 }}>{row.label}</span>
                <div style={{ flex: 1, height: 6, background: 'var(--surface)', borderRadius: 100, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: row.pct, background: row.color, borderRadius: 100 }}/>
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, width: 24, textAlign: 'right' }}>{row.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: 'var(--ink)', padding: '36px 40px', marginTop: 56 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {[
            { val: '500+', lbl: 'Candidates Placed' },
            { val: '91%', lbl: 'AI Match Accuracy' },
            { val: '4.2×', lbl: 'Faster Placements' },
            { val: '1-click', lbl: 'Resume Submission' },
            { val: 'AI-tailored.', lbl: 'Human-approved.' },
          ].map((item, i) => (
            <React.Fragment key={item.lbl}>
              {i > 0 && <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.12)' }}/>}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>{item.val}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{item.lbl}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}