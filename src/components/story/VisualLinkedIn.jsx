import React from 'react';

export default function VisualLinkedIn() {
  return (
    <div style={{ position:'relative', borderRadius:18, overflow:'hidden', border:'1px solid rgba(245,246,250,0.07)', background:'rgba(245,246,250,0.02)' }}>
      <div style={{ padding:24 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
          <div style={{ width:48, height:48, borderRadius:12, background:'#0A66C2', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, color:'#fff', fontWeight:800 }}>in</div>
          <div>
            <div className="sy" style={{ fontSize:15, fontWeight:700 }}>LinkedIn Import</div>
            <div style={{ fontSize:12, color:'#6B7490' }}>One-click profile sync</div>
          </div>
          <div style={{ marginLeft:'auto', background:'rgba(13,168,130,0.1)', border:'1px solid rgba(13,168,130,0.25)', color:'#0DA882', fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:6 }}>LIVE</div>
        </div>

        {[
          { label:'Name', val:'Rahul Sharma', icon:'👤' },
          { label:'Title', val:'Senior Full Stack Engineer', icon:'💼' },
          { label:'Experience', val:'6 years', icon:'📅' },
          { label:'Location', val:'Austin, TX · Open to Remote', icon:'📍' },
        ].map(({label,val,icon})=>(
          <div key={label} style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
            <span style={{ fontSize:14 }}>{icon}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:10, color:'#6B7490', fontWeight:600, letterSpacing:0.5 }}>{label.toUpperCase()}</div>
              <div style={{ fontSize:13, color:'#F5F6FA', fontWeight:500, marginTop:1 }}>{val}</div>
            </div>
          </div>
        ))}

        <div style={{ marginTop:16, paddingTop:16, borderTop:'1px solid rgba(245,246,250,0.06)' }}>
          <div style={{ fontSize:10, color:'#6B7490', fontWeight:600, letterSpacing:0.5, marginBottom:8 }}>SKILLS DETECTED</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
            {['React','Node.js','TypeScript','AWS','Docker','PostgreSQL','GraphQL'].map(s=>(
              <span key={s} style={{ background:'rgba(27,63,255,0.1)', border:'1px solid rgba(27,63,255,0.2)', color:'#7B9FFF', padding:'4px 10px', borderRadius:6, fontSize:11, fontWeight:600 }}>{s}</span>
            ))}
          </div>
        </div>

        <button className="btn-p" style={{ width:'100%', justifyContent:'center', marginTop:20 }}>Add to Pipeline →</button>
      </div>
    </div>
  );
}
