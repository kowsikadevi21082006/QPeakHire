import React from 'react';

export default function CenterFlow(){
  return (
    <div style={{ position:'absolute', left:360, top:'34%', zIndex:1, pointerEvents:'none', width:520, display:'flex', gap:20, alignItems:'center' }}>

      {/* Left mini-skill card */}
      <div style={{ width:160, background:'rgba(10,15,30,0.78)', border:'1px solid rgba(245,246,250,0.04)', borderRadius:12, padding:10, boxShadow:'0 12px 24px rgba(0,0,0,0.45)' }}>
        <div style={{ fontSize:11, color:'#6B7490', marginBottom:6 }}>Skill Match</div>
        <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
          {['Python','AWS','React','Node.js'].map(s=> (
            <div key={s} style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div style={{ fontSize:13, color:'#F5F6FA' }}>{s}</div>
              <div style={{ fontSize:12, color:'#0DA882', fontWeight:700 }}>&#10003;</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:8, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ fontSize:11, color:'#6B7490' }}>Match Score</div>
          <div style={{ fontSize:18, fontWeight:800, color:'#FF4D1C' }}>91%</div>
        </div>
      </div>

      {/* connector + data stream */}
      <div style={{ flex:1, height:80, position:'relative', display:'flex', alignItems:'center' }}>
        {/* glass connector line */}
        <svg width="100%" height="80" viewBox="0 0 520 80" style={{ position:'absolute', left:0, top:0, overflow:'visible' }}>
          <defs>
            <linearGradient id="g1" x1="0%" x2="100%">
              <stop offset="0%" stopColor="rgba(27,63,255,0.18)" />
              <stop offset="50%" stopColor="rgba(255,77,28,0.14)" />
              <stop offset="100%" stopColor="rgba(13,168,130,0.12)" />
            </linearGradient>
          </defs>
          <path d="M12 40 C140 10, 320 10, 508 40" stroke="url(#g1)" strokeWidth="1.6" fill="none" style={{ filter:'blur(0.6px)', opacity:0.9 }} />
        </svg>

        {/* moving data particles */}
        <div style={{ position:'absolute', left:8, top:28, display:'flex', gap:12, transform:'translateX(0)', width:200, overflow:'visible' }}>
          {[0,1,2].map(i=> (
            <div key={i} style={{ width:8, height:8, borderRadius:8, background:'linear-gradient(90deg,#FF4D1C,#FF8060)', boxShadow:'0 6px 14px rgba(255,77,28,0.08)', opacity:0.95, animation:`streamMove ${5 + i*0.8}s linear infinite`, animationDelay:`${i*0.4}s`}} />
          ))}
        </div>

        {/* center node (AI engine) */}
        <div style={{ position:'absolute', left:'50%', transform:'translateX(-50%)', top:16, display:'flex', flexDirection:'column', alignItems:'center' }}>
          <div style={{ width:62, height:62, borderRadius:12, background:'rgba(10,15,30,0.9)', border:'1px solid rgba(245,246,250,0.06)', boxShadow:'0 18px 40px rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
            <div style={{ fontSize:11, color:'#6B7490', marginBottom:2 }}>AI</div>
            <div style={{ fontSize:13, fontWeight:800, color:'#FF4D1C' }}>Engine</div>
          </div>
          <div style={{ height:8, width:120, marginTop:8, borderRadius:6, background:'rgba(245,246,250,0.03)', overflow:'hidden' }}>
            <div style={{ width:'92%', height:'100%', background:'linear-gradient(90deg,#1B3FFF,#0DA882)', animation:'barGrow 1.2s ease forwards' }} />
          </div>
        </div>

      </div>

      {/* right vertical cards cluster */}
      <div style={{ width:160, display:'flex', flexDirection:'column', gap:10 }}>
        {/* AI Processing module */}
        <div style={{ width:'100%', background:'rgba(10,15,30,0.82)', border:'1px solid rgba(245,246,250,0.04)', borderRadius:10, padding:10, boxShadow:'0 12px 26px rgba(0,0,0,0.45)' }}>
          <div style={{ fontSize:11, color:'#6B7490', marginBottom:6 }}>AI Processing</div>
          <div style={{ fontSize:12, color:'#F5F6FA', fontWeight:700 }}>Analyzing Resume...</div>
          <div style={{ fontSize:12, color:'#6B7490', marginTop:6 }}>
            <span style={{ display:'inline-block', width:8, height:8, borderRadius:8, background:'#FF4D1C', marginRight:8, animation:'nodePulse 2s infinite' }} /> Matching Skills...
          </div>
          <div style={{ fontSize:12, color:'#6B7490', marginTop:6 }}>
            <span style={{ display:'inline-block', width:8, height:8, borderRadius:8, background:'#1B3FFF', marginRight:8, animation:'nodePulse 2.4s infinite' }} /> Generating Tailored Resume...
          </div>
        </div>

        {/* Candidate journey compact timeline */}
        <div style={{ width:'100%', background:'rgba(10,15,30,0.82)', border:'1px solid rgba(245,246,250,0.04)', borderRadius:10, padding:10, boxShadow:'0 12px 26px rgba(0,0,0,0.45)' }}>
          <div style={{ fontSize:11, color:'#6B7490', marginBottom:6 }}>Journey</div>
          <div style={{ display:'flex', alignItems:'center', gap:8, justifyContent:'space-between' }}>
            {['Profile','Match','Tailor','Submit','Interview','Placed'].map((s,i)=> (
              <div key={s} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                <div style={{ width:10, height:10, borderRadius:10, background:i===2? '#FF4D1C':'rgba(245,246,250,0.06)', boxShadow: i===2? '0 8px 18px rgba(255,77,28,0.08)':'none' }} />
                <div style={{ fontSize:10, color:'#6B7490' }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
