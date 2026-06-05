import React from 'react';

export default function Ticker() {
  const items = ["LinkedIn Integration","AI Resume Tailoring","91% Match Rate","Email Tracking","Pipeline Kanban","Auto Job Discovery","Resume Parsing","Bench Sales Automation","Real-Time Analytics","One-Click Submissions","Candidate Scoring"];
  const d = [...items, ...items];
  return (
    <div style={{ borderTop:'1px solid rgba(245,246,250,0.06)', borderBottom:'1px solid rgba(245,246,250,0.06)', padding:'14px 0', overflow:'hidden', background:'rgba(245,246,250,0.012)' }}>
      <div style={{ display:'flex', gap:48, animation:'ticker 28s linear infinite', width:'max-content' }}>
        {d.map((t,i)=>(
          <div key={i} style={{ display:'flex', alignItems:'center', gap:12, whiteSpace:'nowrap' }}>
            <span style={{ width:4, height:4, borderRadius:'50%', background:'#FF4D1C', flexShrink:0 }}/>
            <span style={{ fontSize:12, color:'#6B7490', fontWeight:500 }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
