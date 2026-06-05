import React from 'react';

export default function Comparison() {
  const rows = [
    ['Manual job board browsing','AI scans 50+ boards continuously — 2,847 jobs/day'],
    ['Copy-paste resume edits','GPT-4 tailoring per JD in under 5 seconds'],
    ['Spreadsheet tracking','Live Kanban with auto-stage updates'],
    ['No match visibility','91% precision AI scoring on 40+ signals'],
    ['Scattered email threads','Unified inbox with open/reply tracking'],
    ['Days to first submission','One-click submission, same hour'],
  ];

  return (
    <section style={{ padding:'100px 40px', borderTop:'1px solid rgba(245,246,250,0.05)', position:'relative', overflow:'hidden' }}>
      <div style={{
        position: 'absolute', bottom:'10%', left:'50%', transform:'translateX(-50%)',
        width:800, height:400,
        background:'radial-gradient(ellipse, rgba(255,77,28,0.04) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      <div style={{ maxWidth:900, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div className="lbl" style={{ justifyContent:'center', marginBottom:16 }}>Why Switch</div>
          <h2 className="sy" style={{ fontSize:'clamp(28px,3.5vw,48px)', fontWeight:800, letterSpacing:'-1.8px', lineHeight:1.1 }}>
            The old way vs.<br/><span style={{ color:'#FF4D1C' }}>QPeakHire.</span>
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:10 }}>
          <div style={{ padding:'12px 20px', background:'rgba(245,246,250,0.02)', borderRadius:10, textAlign:'center' }}>
            <span className="sy" style={{ fontSize:13, fontWeight:700, color:'#6B7490' }}>Traditional Approach</span>
          </div>
          <div style={{ padding:'12px 20px', background:'rgba(255,77,28,0.07)', border:'1px solid rgba(255,77,28,0.18)', borderRadius:10, textAlign:'center' }}>
            <span className="sy" style={{ fontSize:13, fontWeight:700, color:'#FF4D1C' }}>QPeakHire</span>
          </div>
        </div>

        {rows.map(([old,neo],i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:8 }}>
            <div style={{ padding:'14px 18px', borderRadius:10, background:'rgba(245,246,250,0.015)', border:'1px solid rgba(245,246,250,0.05)', display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ color:'#2E3650', fontSize:14, flexShrink:0 }}>✗</span>
              <span style={{ fontSize:13, color:'#6B7490' }}>{old}</span>
            </div>
            <div style={{ padding:'14px 18px', borderRadius:10, background:'rgba(13,168,130,0.05)', border:'1px solid rgba(13,168,130,0.13)', display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ color:'#0DA882', fontSize:14, flexShrink:0 }}>✓</span>
              <span style={{ fontSize:13, color:'#F5F6FA', fontWeight:500 }}>{neo}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
