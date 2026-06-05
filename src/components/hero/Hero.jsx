import React, { useState, useEffect } from 'react';
import HeroBG from './HeroBG';
import ProductVisuals from './ProductVisuals';
import CenterFlow from './CenterFlow';

export default function Hero() {
  const [typed, setTyped] = useState("");
  const words = ["placements.", "submissions.", "matches.", "pipelines."];
  const [wi, setWi] = useState(0);
  useEffect(() => {
    let i = 0; let deleting = false; let current = "";
    const interval = setInterval(() => {
      const word = words[wi % words.length];
      if (!deleting) {
        current = word.slice(0, i + 1);
        i++;
        if (i === word.length) { deleting = true; setTimeout(()=>{},1200); }
      } else {
        current = word.slice(0, i - 1);
        i--;
        if (i === 0) { deleting = false; setWi(w => w + 1); }
      }
      setTyped(current);
    }, deleting ? 60 : 120);
    return () => clearInterval(interval);
  }, [wi]);

  return (
    <section style={{
      minHeight: '100vh', position: 'relative',
      display: 'flex', alignItems: 'center',
      padding: '80px 40px 60px',
      overflow: 'hidden',
    }}>
      <HeroBG />

      <div style={{ maxWidth: 780, position: 'relative', zIndex: 2 }}>
        <div className="fu" style={{ marginBottom: 20 }}>
          <span className="chip">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0DA882', animation: 'pulse 2s infinite', display: 'inline-block' }}/>
            AI-Powered Bench Sales Platform · Go-Live 2026
          </span>
        </div>

        <h1 className="sy fu1" style={{
          fontSize: 'clamp(40px, 5.5vw, 56px)',
          fontWeight: 800, lineHeight: 1.04,
          letterSpacing: '-2px',
          marginBottom: 8,
        }}>
          Reach the peak<br/>
          <span className="grad-text">of every hire.</span>
        </h1>

        <h2 className="sy fu2" style={{
          fontSize: 'clamp(28px, 3.2vw, 36px)',
          fontWeight: 700, lineHeight: 1.12,
          letterSpacing: '-1px',
          color: 'var(--ink-mid)',
          marginBottom: 32,
          minHeight: 60,
        }}>
          AI that drives faster{' '}
          <span style={{ color: '#F5F6FA', borderBottom: '2px solid #FF4D1C', paddingBottom: 2 }}>
            {typed}<span style={{ animation: 'blink 1s infinite', opacity: 1 }}>|</span>
          </span>
        </h2>

        {/* Product visuals (non-intrusive, decorative UI snippets) */}
        <ProductVisuals />

        {/* Center flow visuals to connect product modules and fill middle area */}
        <CenterFlow />

        <p className="fu3" style={{
          fontSize: 18, lineHeight: 1.75,
          color: '#6B7490', maxWidth: 520,
          marginBottom: 40,
        }}>
          QPeakHire automates every step — LinkedIn import, AI job matching, resume tailoring, one-click submissions, and pipeline tracking — so your bench moves at the speed of AI.
        </p>

        <div className="fu3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
          <button className="btn-p" style={{ fontSize: 15, padding: '15px 34px', animation: 'glow 3s ease-in-out infinite' }}>
            Book a Demo →
          </button>
          <button className="btn-g" style={{ fontSize: 15, padding: '15px 34px' }}>
            ▶ Watch 3-min Tour
          </button>
        </div>

        <div className="fu3" style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {[['500+','Candidates Placed'],['91%','AI Match Accuracy'],['4.2×','Faster Placements']].map(([v,l])=> (
            <div key={l}>
              <div className="sy" style={{ fontSize: 32, fontWeight: 800, color: '#FF4D1C' }}>{v}</div>
              <div style={{ fontSize: 12, color: '#6B7490', fontWeight: 500, marginTop: 2, letterSpacing: 0.3 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to bottom, transparent, #0A0F1E)',
        pointerEvents: 'none',
      }}/>
    </section>
  );
}
