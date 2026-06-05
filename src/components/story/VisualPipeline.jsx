import React from 'react';

export default function VisualPipeline() {
  const stages = [
    { stage:'Prospect', count:48, color:'#6B7490', cands:['RS','PM','AK'] },
    { stage:'Tailoring', count:14, color:'#FF4D1C', cands:['VJ','KN'] },
    { stage:'Applied', count:24, color:'#1B3FFF', cands:['SS','RT','MG'] },
    { stage:'Interview', count:12, color:'#F5A800', cands:['PS'] },
    { stage:'Placed', count:9, color:'#0DA882', cands:['AS','BK'] },
  ];
  return (
    <div style={{ background:'rgba(245,246,250,0.02)', border:'1px solid rgba(245,246,250,0.07)', borderRadius:18, padding:24, overflowX:'auto' }}>
      <div style={{ fontSize:11, color:'#6B7490', fontWeight:600, letterSpacing:1, marginBottom:16 }}>KANBAN PIPELINE · LIVE</div>
      <div style={{ display:'flex', gap:10, minWidth:480 }}>
        {stages.map(({ stage, count, color, cands })=>(
          <div key={stage} style={{ flex:1, minWidth:80 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
              <span style={{ fontSize:11, color:color, fontWeight:700 }}>{stage}</span>
              <span className="sy" style={{ fontSize:13, fontWeight:800, color }}>{count}</span>
            </div>
            {cands.map(c=>(
              <div key={c} style={{
                background:`${color}10`, border:`1px solid ${color}20`,
                borderRadius:8, padding:'8px 10px', marginBottom:6,
                display:'flex', alignItems:'center', gap:7,
              }}>
                <div style={{ width:22, height:22, borderRadius:6, background:`${color}25`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:9, fontWeight:700, color, flexShrink:0 }}>{c}</div>
                <div style={{ width:'100%', height:3, borderRadius:2, background:`${color}20` }}>
                  <div style={{ height:'100%', width:`${60+Math.random()*30}%`, background:color, borderRadius:2 }}/>
                </div>
              </div>
            ))}
            <div style={{ width:'100%', height:3, borderRadius:2, background:'rgba(245,246,250,0.04)', marginTop:8 }}>
              <div style={{ height:'100%', width:`${(count/48)*100}%`, background:color, borderRadius:2, opacity:0.4 }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
