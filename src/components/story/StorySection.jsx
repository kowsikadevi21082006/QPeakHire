import React from 'react';

export default function StorySection({ num, title, body, color, side, visual }) {
  return (
    <section style={{
      padding: '100px 40px',
      borderTop: '1px solid rgba(245,246,250,0.05)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: side === 'left' ? '1fr 1fr' : '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          direction: side === 'right' ? 'rtl' : 'ltr',
        }}>
          <div style={{ direction: 'ltr' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
              <span className="sy" style={{ fontSize:11, color:color, fontWeight:700, letterSpacing:2 }}>0{num}</span>
              <div style={{ width:32, height:1, background:color }}/>
              <span style={{ fontSize:11, color:'#6B7490', fontWeight:600, letterSpacing:1, textTransform:'uppercase' }}>
                {['Profile Import','AI Job Matching','Resume Tailoring','Pipeline Tracking'][num-1]}
              </span>
            </div>
            <h2 className="sy" style={{
              fontSize:'clamp(28px, 3.5vw, 46px)',
              fontWeight:800, letterSpacing:'-1.8px',
              lineHeight:1.1, marginBottom:24,
            }}>{title}</h2>
            <p style={{ fontSize:17, color:'#6B7490', lineHeight:1.8 }}>{body}</p>
          </div>
          <div style={{ direction:'ltr' }}>{visual}</div>
        </div>
      </div>
    </section>
  );
}
