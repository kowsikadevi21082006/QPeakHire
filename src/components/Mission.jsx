import React from 'react';

export default function Mission() {
  return (
    <section style={{ padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(27,63,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="lbl" style={{ marginBottom: 20 }}>Our Mission</div>
            <h2 className="sy" style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800, letterSpacing: '-2px',
              lineHeight: 1.08, marginBottom: 28,
            }}>
              We built the platform<br/>
              <span style={{ color: '#6B7490' }}>recruiters deserved</span><br/>
              but never had.
            </h2>
            <p style={{ fontSize: 17, color: '#6B7490', lineHeight: 1.8, marginBottom: 24 }}>
              Bench sales is brutal. Hundreds of candidates, thousands of jobs, and every submission typed by hand. The good recruiters kept spreadsheets. The great ones burned out.
            </p>
            <p style={{ fontSize: 17, color: '#6B7490', lineHeight: 1.8 }}>
              QPeakHire exists to flip that equation. AI handles the volume. You handle the relationships. Every placement, faster.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'rgba(245,246,250,0.02)',
              border: '1px solid rgba(245,246,250,0.07)',
              borderRadius: 20, padding: 32,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -1, left: -1, right: -1,
                height: 3,
                background: 'linear-gradient(90deg, #FF4D1C, #1B3FFF, #0DA882)',
                borderRadius: '20px 20px 0 0',
              }}/>

              {[
                { icon:'👤', label:'Candidate Added', color:'#1B3FFF', time:'0s' },
                { icon:'📄', label:'Resume Parsed', color:'#1B3FFF', time:'0.5s' },
                { icon:'🔍', label:'Jobs Discovered', color:'#F5A800', time:'1s' },
                { icon:'⚡', label:'91% Match Found', color:'#FF4D1C', time:'1.5s', highlight:true },
                { icon:'✍️', label:'Resume Tailored', color:'#FF4D1C', time:'2s' },
                { icon:'📨', label:'Submitted', color:'#0DA882', time:'2.5s' },
                { icon:'🏆', label:'Placed ✓', color:'#0DA882', time:'3s', placed:true },
              ].map((s,i,arr)=>(
                <div key={i} style={{ position:'relative' }}>
                  <div style={{
                    display:'flex', alignItems:'center', gap:14,
                    padding:'10px 0',
                    animation:`fadeIn 0.5s ${s.time} ease both`,
                  }}>
                    <div style={{
                      width:36, height:36, borderRadius:10, flexShrink:0,
                      background:`${s.color}18`,
                      border:`1px solid ${s.color}30`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:16,
                      boxShadow: s.highlight ? `0 0 16px ${s.color}40` : 'none',
                    }}>{s.icon}</div>
                    <span className="sy" style={{
                      fontSize:14, fontWeight: s.highlight||s.placed ? 700 : 500,
                      color: s.highlight ? '#FF4D1C' : s.placed ? '#0DA882' : '#F5F6FA',
                    }}>{s.label}</span>
                    {s.highlight && (
                      <span style={{ marginLeft:'auto', fontSize:10, fontWeight:700, color:'#FF4D1C', background:'rgba(255,77,28,0.1)', padding:'3px 8px', borderRadius:6 }}>AI</span>
                    )}
                    {s.placed && (
                      <span style={{ marginLeft:'auto', fontSize:10, fontWeight:700, color:'#0DA882', background:'rgba(13,168,130,0.1)', padding:'3px 8px', borderRadius:6 }}>DONE</span>
                    )}
                  </div>
                  {i < arr.length-1 && (
                    <div style={{ width:1, height:12, background:`${s.color}30`, marginLeft:17, marginBottom:0 }}/>
                  )}
                </div>
              ))}

              <div style={{
                marginTop:16, padding:'14px 16px',
                background:'rgba(13,168,130,0.07)',
                border:'1px solid rgba(13,168,130,0.18)',
                borderRadius:12,
                display:'flex', justifyContent:'space-between', alignItems:'center',
              }}>
                <div>
                  <div style={{ fontSize:10, color:'#6B7490', fontWeight:600, letterSpacing:1 }}>AVG. TIME TO PLACEMENT</div>
                  <div className="sy" style={{ fontSize:26, fontWeight:800, color:'#0DA882', marginTop:2 }}>4.2 days</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:10, color:'#6B7490', fontWeight:600, letterSpacing:1 }}>INDUSTRY AVG</div>
                  <div className="sy" style={{ fontSize:26, fontWeight:800, color:'#2E3650', marginTop:2 }}>18 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
