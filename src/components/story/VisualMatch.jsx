import React from 'react';

export default function VisualMatch() {
  const skills = [
    { name:'React / Next.js', c:95, r:90 },
    { name:'Node.js', c:88, r:85 },
    { name:'TypeScript', c:90, r:95 },
    { name:'AWS / Cloud', c:75, r:80 },
    { name:'System Design', c:80, r:75 },
  ];
  return (
    <div style={{ background:'rgba(245,246,250,0.02)', border:'1px solid rgba(245,246,250,0.07)', borderRadius:18, padding:28, position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:-40, right:-40, width:160, height:160, background:'radial-gradient(circle,rgba(255,77,28,0.12) 0%,transparent 70%)', borderRadius:'50%' }}/>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
        <div>
          <div style={{ fontSize:11, color:'#6B7490', fontWeight:600, letterSpacing:1, marginBottom:6 }}>SKILL ALIGNMENT</div>
          <div className="sy" style={{ fontSize:16, fontWeight:700 }}>Rahul Sharma vs. Job #4821</div>
        </div>
        <div style={{ textAlign:'center' }}>
          <div className="sy" style={{ fontSize:42, fontWeight:800, color:'#FF4D1C', lineHeight:1 }}>91%</div>
          <div style={{ fontSize:9, color:'#FF4D1C', fontWeight:700, letterSpacing:1 }}>MATCH</div>
        </div>
      </div>

      {skills.map((s,i)=>(
        <div key={i} style={{ marginBottom:14 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
            <span style={{ fontSize:12, color:'#F5F6FA', fontWeight:500 }}>{s.name}</span>
            <span style={{ fontSize:11, color:'#6B7490' }}>{s.c}% / {s.r}%</span>
          </div>
          <div style={{ height:5, borderRadius:3, background:'rgba(245,246,250,0.05)', position:'relative' }}>
            <div style={{ position:'absolute', left:0, height:'100%', width:`${s.r}%`, borderRadius:3, background:'rgba(27,63,255,0.3)' }}/>
            <div style={{ position:'absolute', left:0, height:'100%', width:`${s.c}%`, borderRadius:3, background:s.c>=s.r? '#0DA882' : '#FF4D1C', animation:'barGrow 1.5s ease forwards' }}/>
          </div>
        </div>
      ))}

      <div style={{ display:'flex', gap:16, marginTop:8 }}>
        <span style={{ fontSize:10, color:'#0DA882', fontWeight:600 }}>● Candidate</span>
        <span style={{ fontSize:10, color:'#1B3FFF', fontWeight:600 }}>● Required</span>
      </div>
    </div>
  );
}
