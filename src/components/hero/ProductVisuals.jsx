import React, { useEffect, useState } from 'react';

export default function ProductVisuals(){
  const [match, setMatch] = useState(0);
  useEffect(()=>{
    // animate match score to 91
    let raf; let v = 0;
    const step = () => {
      v += 1;
      if (v <= 91) { setMatch(v); raf = requestAnimationFrame(step); }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  },[]);

  // place visuals lower to avoid overlapping headline while keeping balance
  return (
    <div style={{ position:'absolute', right:40, top:'42%', zIndex:1, pointerEvents:'none', display:'grid', gap:14 }}>

      {/* Small LinkedIn import card */}
      <div style={{ width:200, background:'rgba(10,15,30,0.85)', border:'1px solid rgba(245,246,250,0.06)', borderRadius:'var(--radius-md)', padding:10, boxShadow:'0 14px 34px rgba(0,0,0,0.45)', animation:'floatA 7s ease-in-out infinite' }}>
        <div style={{ fontSize:11, color:'#6B7490', marginBottom:6 }}>LinkedIn Import</div>
        <div style={{ fontSize:13, color:'#F5F6FA', fontWeight:700 }}>Profile Imported</div>
        <div style={{ fontSize:12, color:'#6B7490', marginTop:6 }}>Candidate Created · Profile Synced</div>
      </div>

      {/* Candidate profile card (Rahul) - positioned so it never overlaps headline */}
      <div style={{ width:260, marginTop:8, background:'rgba(10,15,30,0.85)', border:'1px solid rgba(245,246,250,0.06)', borderRadius:'var(--radius-md)', padding:12, boxShadow:'0 20px 50px rgba(0,0,0,0.6)', animation:'floatB 8s ease-in-out infinite' }}>
        <div style={{ display:'flex', gap:10, alignItems:'center' }}>
          <div style={{ width:44, height:44, borderRadius:'var(--radius-sm)', background:'rgba(27,63,255,0.12)', display:'flex', alignItems:'center', justifyContent:'center', color:'#7B9FFF', fontWeight:800 }}>RS</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#F5F6FA' }}>Rahul Sharma</div>
            <div style={{ fontSize:11, color:'#6B7490', marginTop:2 }}>Senior Full Stack · Austin</div>
          </div>
          <div style={{ fontSize:12, color:'#0DA882', fontWeight:700 }}>{match}%</div>
        </div>
        <div style={{ height:8, background:'rgba(245,246,250,0.03)', borderRadius:6, marginTop:12, overflow:'hidden' }}>
          <div style={{ width:`${match}%`, height:'100%', background:'linear-gradient(90deg,#FF4D1C,#FF8060)', animation:'barGrow 1.2s ease forwards', transformOrigin:'left' }} />
        </div>
      </div>

      {/* Resume Parsing Card */}
      <div style={{ width:220, background:'rgba(10,15,30,0.85)', border:'1px solid rgba(245,246,250,0.06)', borderRadius:'var(--radius-md)', padding:12, boxShadow:'0 16px 36px rgba(0,0,0,0.5)', animation:'floatC 9s ease-in-out infinite 0.4s' }}>
        <div style={{ fontSize:11, color:'#6B7490', marginBottom:6 }}>Resume Parsing</div>
        <div style={{ fontSize:13, color:'#F5F6FA', fontWeight:700 }}>Resume Uploaded</div>
        <div style={{ fontSize:12, color:'#6B7490', marginTop:6, lineHeight:1.5 }}>
          Skills Extracted · Experience Parsed · Education Parsed
        </div>
      </div>

      {/* AI Match Analysis Card */}
      <div style={{ width:240, background:'rgba(10,15,30,0.88)', border:'1px solid rgba(245,246,250,0.06)', borderRadius:'var(--radius-lg)', padding:12, boxShadow:'0 18px 44px rgba(0,0,0,0.55)', animation:'floatB 8.5s ease-in-out infinite 0.2s' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
          <div style={{ fontSize:11, color:'#6B7490' }}>AI Match Score</div>
          <div style={{ fontSize:18, fontWeight:800, color:'#FF4D1C' }}>{match}%</div>
        </div>
        <div style={{ fontSize:12, color:'#6B7490', marginBottom:8 }}>Skills {Math.max(0,Math.min(100,Math.round(match*0.99)))}% · Experience {Math.round(match*0.96)}%</div>
        <div style={{ height:8, background:'rgba(245,246,250,0.03)', borderRadius:6, overflow:'hidden' }}>
          <div style={{ width:`${match}%`, height:'100%', background:'linear-gradient(90deg,#1B3FFF,#0DA882)', animation:'barGrow 1.2s ease forwards' }} />
        </div>
      </div>

      {/* Email Integration Card */}
      <div style={{ width:200, background:'rgba(10,15,30,0.85)', border:'1px solid rgba(245,246,250,0.06)', borderRadius:'var(--radius-md)', padding:10, boxShadow:'0 14px 28px rgba(0,0,0,0.45)', animation:'floatA 7.5s ease-in-out infinite 0.8s' }}>
        <div style={{ fontSize:11, color:'#6B7490', marginBottom:6 }}>Email Integration</div>
        <div style={{ fontSize:13, color:'#F5F6FA', fontWeight:700 }}>New Job Requirement</div>
        <div style={{ fontSize:12, color:'#6B7490', marginTop:6 }}>AWS Data Engineer · Matching Candidates Found</div>
      </div>

      {/* Submission Tracker Card */}
      <div style={{ width:220, background:'rgba(10,15,30,0.85)', border:'1px solid rgba(245,246,250,0.06)', borderRadius:'var(--radius-md)', padding:10, boxShadow:'0 16px 30px rgba(0,0,0,0.48)', animation:'floatC 9s ease-in-out infinite 0.2s' }}>
        <div style={{ fontSize:11, color:'#6B7490', marginBottom:6 }}>Submission Tracker</div>
        <div style={{ fontSize:13, color:'#F5F6FA', fontWeight:700 }}>Submitted · Interview Scheduled</div>
        <div style={{ fontSize:12, color:'#6B7490', marginTop:6 }}>Client Review · Placement</div>
      </div>

    </div>
  );
}
