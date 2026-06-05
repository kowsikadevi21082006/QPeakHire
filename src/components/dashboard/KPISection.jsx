import React from 'react';

export default function KPISection(){
  const kpis = [['Active','124','👥','#1B3FFF'],['Submitted','47','📨','#F5A800'],['Interviews','12','🗓','#FF4D1C'],['Placed','9','🏆','#0DA882']];
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
      {kpis.map(([l,v,icon,c])=> (
        <div key={l} style={{ background:'rgba(245,246,250,0.03)', border:`1px solid ${c}20`, borderRadius:10, padding:'14px 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
            <span style={{ fontSize:10, color:'#6B7490', fontWeight:600, letterSpacing:0.5 }}>{l.toUpperCase()}</span>
            <span style={{ fontSize:13 }}>{icon}</span>
          </div>
          <div className="sy" style={{ fontSize:28, fontWeight:800, color:'#F5F6FA' }}>{v}</div>
        </div>
      ))}
    </div>
  );
}
