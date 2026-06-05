import React from 'react';

export default function CandidateTable({ candidates }){
  return (
    <div>
      {candidates.map((c,i)=> (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'9px 0' }}>
          <div style={{ width:30, height:30, borderRadius:8, background:'rgba(27,63,255,0.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, color:'#7B9FFF' }}>{c.name.split(' ').map(n=>n[0]).join('')}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:12, fontWeight:600, color:'#F5F6FA' }}>{c.name}</div>
            <div style={{ fontSize:10, color:'#6B7490' }}>{c.role}</div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:6 }}>
            <div style={{ width:52, height:3, borderRadius:2, background:'rgba(245,246,250,0.06)' }}>
              <div style={{ height:'100%', width:`${c.score}%`, background:c.score>88? '#0DA882' : '#1B3FFF', borderRadius:2 }}/>
            </div>
            <span className="sy" style={{ fontSize:12, fontWeight:800, color:'#F5F6FA' }}>{c.score}%</span>
          </div>
          <div style={{ background:`${c.sc}12`, border:`1px solid ${c.sc}25`, color:c.sc, padding:'3px 9px', borderRadius:6, fontSize:10, fontWeight:700 }}>{c.status}</div>
        </div>
      ))}
    </div>
  );
}
