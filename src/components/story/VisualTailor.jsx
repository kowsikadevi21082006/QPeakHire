import React from 'react';

export default function VisualTailor() {
  return (
    <div style={{ background:'rgba(245,246,250,0.02)', border:'1px solid rgba(245,246,250,0.07)', borderRadius:18, overflow:'hidden' }}>
      <div style={{ background:'rgba(245,246,250,0.03)', borderBottom:'1px solid rgba(245,246,250,0.06)', padding:'12px 20px', display:'flex', alignItems:'center', gap:8 }}>
        <div style={{ width:8, height:8, borderRadius:'50%', background:'#FF5F57' }}/>
        <div style={{ width:8, height:8, borderRadius:'50%', background:'#FEBC2E' }}/>
        <div style={{ width:8, height:8, borderRadius:'50%', background:'#28C840' }}/>
        <span style={{ fontSize:11, color:'#6B7490', marginLeft:8 }}>AI Resume Tailor · Job #4821</span>
      </div>
      <div style={{ padding:24 }}>
        <div style={{ fontFamily:'monospace', fontSize:12, lineHeight:1.9, color:'#6B7490' }}>
          <div><span style={{ color:'#FF4D1C' }}>→</span> Analyzing job description...</div>
          <div><span style={{ color:'#1B3FFF' }}>→</span> Extracting 23 key requirements</div>
          <div><span style={{ color:'#F5A800' }}>→</span> Matching candidate experience</div>
          <div style={{ color:'#0DA882' }}><span>✓</span> Keywords matched: <strong style={{ color:'#0DA882' }}>19/23</strong></div>
          <div style={{ color:'#0DA882' }}><span>✓</span> ATS score: <strong style={{ color:'#0DA882' }}>94/100</strong></div>
          <div style={{ color:'#0DA882' }}><span>✓</span> Resume tailored in <strong style={{ color:'#0DA882' }}>4.1s</strong></div>
          <div style={{ marginTop:8, color:'#F5F6FA' }}><span style={{ color:'#FF4D1C' }}>◆</span> Awaiting human approval...</div>
        </div>

        <div style={{ marginTop:20, padding:'14px 16px', background:'rgba(255,77,28,0.07)', border:'1px solid rgba(255,77,28,0.2)', borderRadius:12 }}>
          <div style={{ fontSize:11, color:'#FF4D1C', fontWeight:700, marginBottom:8 }}>AI CHANGES SUMMARY</div>
          <div style={{ fontSize:12, color:'#6B7490', lineHeight:1.7 }}>
            Emphasized React 18 migration experience · Added AWS Lambda quantifier · Reordered skills to match JD priority · Adjusted summary for FinTech context
          </div>
        </div>

        <div style={{ display:'flex', gap:10, marginTop:16 }}>
          <button className="btn-p" style={{ flex:1, justifyContent:'center', fontSize:13, padding:'10px 16px' }}>Approve & Submit</button>
          <button className="btn-g" style={{ flex:1, justifyContent:'center', fontSize:13, padding:'10px 16px' }}>Edit</button>
        </div>
      </div>
    </div>
  );
}
