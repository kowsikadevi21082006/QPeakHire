import React from 'react';
import FloatCard from './FloatCard';

export default function HeroBG() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>

      {/* PRIMARY VISUAL: Premium AI recruitment illustration (behind cards) */}
      <div style={{ position: 'absolute', right: '4%', top: '8%', width: '48%', height: '84%', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
        <svg width="100%" height="100%" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="artLayer" style={{ transformOrigin: 'center', opacity: 0.12 }}>
          <defs>
            <linearGradient id="gA" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#1B3FFF" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="#6A5BFF" stopOpacity="0.75"/>
              <stop offset="100%" stopColor="#FF8060" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="gB" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#0DA882" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#1B3FFF" stopOpacity="0.6"/>
            </linearGradient>
            <filter id="blurLarge" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="18" result="b" />
              <feColorMatrix in="b" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.55 0" />
            </filter>
            <radialGradient id="glowA" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF8060" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FF8060" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FF8060" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glowB" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6A5BFF" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#6A5BFF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#6A5BFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Abstract layered brain shape */}
          <g filter="url(#blurLarge)" className="artGlow" style={{ mixBlendMode: 'screen' }}>
            <path d="M400,80 C540,80 720,160 720,320 C720,480 600,640 440,700 C280,760 120,640 100,480 C80,320 260,80 400,80 Z" fill="url(#gA)" opacity="0.18" />
            <path d="M420,200 C520,220 640,260 660,360 C680,460 600,560 480,620 C360,680 260,620 220,520 C180,420 300,260 420,200 Z" fill="url(#gB)" opacity="0.14" />
          </g>

          {/* Minimal accents: very low opacity connection highlights */}
          <g fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.12 }}>
            <path d="M320,380 C360,360 420,360 460,380" stroke="#6A5BFF" />
            <path d="M300,460 C350,430 500,430 560,470" stroke="#0DA882" />
            <path d="M380,300 C420,280 500,300 540,340" stroke="#FF8060" />
          </g>

          {/* Resume / card-like faint silhouette behind cards to tie concept */}
          <g fill="rgba(255,255,255,0.02)" style={{ mixBlendMode: 'overlay' }}>
            <rect x="480" y="420" rx="12" ry="12" width="180" height="110" />
            <rect x="520" y="540" rx="10" ry="10" width="140" height="86" />
          </g>

          {/* Soft connection glows placed behind card cluster (low opacity) */}
          <g>
            <circle cx="520" cy="420" r="40" fill="url(#glowA)" opacity="0.14" />
            <circle cx="420" cy="320" r="32" fill="url(#glowB)" opacity="0.12" />
            <circle cx="560" cy="480" r="28" fill="url(#glowB)" opacity="0.10" />
          </g>

        </svg>
      </div>
      

      {/* Low-opacity grid for subtle structure */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "linear-gradient(rgba(245,246,250,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(245,246,250,0.018) 1px,transparent 1px)",
        backgroundSize: '96px 96px', opacity: 0.6,
      }}/>

      {/* primary visual is the connected-nodes SVG above; removed large orb */}

      {/* Right-side cluster: 5 subtle glassmorphism cards (clustered, non-intrusive) */}
      <div style={{ position: 'absolute', right: '6%', top: 'calc(12% + 80px)', width: 432, height: 500, pointerEvents: 'none', zIndex: 1 }}>

        {/* AI Match Score (primary small) */}
        <FloatCard style={{ top: 8, right: 0, animation: 'floatA_slow 12s ease-in-out infinite', width: 264, opacity:0.98, boxShadow:'0 18px 48px rgba(0,0,0,0.6)' }}>
          <div style={{ fontSize: 10, color: '#6B7490', fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>AI MATCH SCORE</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Syne', fontSize: 36, fontWeight: 800, color: '#FF4D1C', lineHeight: 1 }}>91%</div>
              <div style={{ fontSize: 11, color: '#6B7490', marginTop: 2 }}>Rahul Sharma · Sr. React</div>
            </div>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'conic-gradient(#FF4D1C 0% 91%, rgba(245,246,250,0.08) 91% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 6px 20px rgba(255,77,28,0.06)' }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#0A0F1E', position: 'absolute' }}/>
            </div>
          </div>
        </FloatCard>

        {/* Resume Analysis */}
        <FloatCard style={{ top: 100, right: 34, animation: 'floatB_slow 14s ease-in-out infinite', width: 240, opacity:0.95, boxShadow:'0 12px 36px rgba(0,0,0,0.5)' }}>
          <div style={{ fontSize: 11, color: '#6B7490', marginBottom:6 }}>Resume Analysis</div>
          <div style={{ fontSize:13, color:'#F5F6FA', fontWeight:700, marginBottom:6 }}>Analyzing Resume...</div>
          <div style={{ display:'flex', gap:8, alignItems:'center' }}>
            <div style={{ width:8, height:8, borderRadius:8, background:'#6A5BFF', animation:'nodePulse 2s infinite' }} />
            <div style={{ fontSize:12, color:'#6B7490' }}>Matching skills · Tailoring</div>
          </div>
        </FloatCard>

        {/* Placement Success */}
        <FloatCard style={{ top: 42, right: 240, animation: 'floatC_slow 16s ease-in-out infinite', width: 192, opacity:0.92, boxShadow:'0 12px 30px rgba(0,0,0,0.5)' }}>
          <div style={{ display:'flex', gap:10, alignItems:'center' }}>
            <div style={{ width:28, height:28, borderRadius:8, background:'rgba(13,168,130,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, flexShrink:0 }}>🏆</div>
            <div>
              <div style={{ fontSize:12, fontWeight:700, color:'#0DA882' }}>Placement Confirmed</div>
              <div style={{ fontSize:11, color:'#6B7490', marginTop:2 }}>Priya Mehta</div>
            </div>
          </div>
        </FloatCard>

        {/* Pipeline Overview */}
        <FloatCard style={{ top: 192, right: 67, animation: 'floatB_slow 15s ease-in-out infinite', width: 264, opacity:0.94, boxShadow:'0 14px 34px rgba(0,0,0,0.5)' }}>
          <div style={{ fontSize:10, color:'#6B7490', fontWeight:600, marginBottom:8 }}>PIPELINE OVERVIEW</div>
          {[['Applied',24,'#1B3FFF'],['Interview',12,'#F5A800'],['Placed',9,'#0DA882']].map(([label,n,color])=> (
            <div key={label} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
              <div style={{ fontSize:11, color:color, width:64 }}>{label}</div>
              <div style={{ flex:1, height:6, borderRadius:6, background:'rgba(245,246,250,0.03)', overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${Math.min(100,n*3)}%`, background:color, borderRadius:6, animation:'barGrow 1.5s ease forwards' }} />
              </div>
              <div style={{ fontSize:11, fontWeight:700, color:'#F5F6FA', minWidth:20 }}>{n}</div>
            </div>
          ))}
        </FloatCard>

        {/* Candidate Profile */}
        <FloatCard style={{ top: 260, right: 216, animation: 'floatA_slow 13s ease-in-out infinite', width: 216, opacity:0.95, boxShadow:'0 12px 30px rgba(0,0,0,0.48)' }}>
          <div style={{ display:'flex', gap:10, alignItems:'center' }}>
            <div style={{ width:40, height:40, borderRadius:8, background:'rgba(27,63,255,0.12)', display:'flex', alignItems:'center', justifyContent:'center', color:'#7B9FFF', fontWeight:800 }}>RS</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13, fontWeight:700, color:'#F5F6FA' }}>Rahul Sharma</div>
              <div style={{ fontSize:11, color:'#6B7490', marginTop:2 }}>Match · <span style={{ color:'#FF4D1C', fontWeight:700 }}>91%</span></div>
            </div>
          </div>
        </FloatCard>

      </div>

    </div>
  );
}
