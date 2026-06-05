import React from 'react';

export default function SocialProof() {
  const quotes = [
    { name:'Aisha Patel', role:'Bench Sales Lead · TechStaff Pro', q:'QPeakHire cut our submission time from hours to minutes. The AI tailoring is genuinely impressive — our response rates jumped overnight.' },
    { name:'Marcus Chen', role:'Recruiting Manager · CloudTalent', q:'The match engine is unlike anything I\'ve used. 91% accuracy isn\'t marketing. We tested it against our own pipeline. It\'s real.' },
    { name:'Priya Nair', role:'Director · QuantumHire Solutions', q:'We went from placing 4 candidates a week to 11. The pipeline visibility alone was worth it. QPeakHire is our unfair advantage now.' },
  ];

  return (
    <section style={{ padding:'100px 40px', borderTop:'1px solid rgba(245,246,250,0.05)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, marginBottom:80, borderRadius:16, overflow:'hidden', border:'1px solid rgba(245,246,250,0.06)' }}>
          {[['500+','Candidates Placed','and counting'],['91%','AI Match Accuracy','across all roles'],['4.2×','Faster Placements','vs manual process'],['98.4%','Parse Accuracy','200+ resume formats']].map(([v,l,s],i)=>(
            <div key={l} style={{ padding:'40px 32px', background:i===0? 'rgba(255,77,28,0.06)' : 'rgba(245,246,250,0.015)', textAlign:'center', borderRight:i<3? '1px solid rgba(245,246,250,0.05)' : 'none' }}>
              <div className="sy" style={{ fontSize:52, fontWeight:800, color:i===0? '#FF4D1C' : '#F5F6FA', lineHeight:1 }}>{v}</div>
              <div style={{ fontSize:14, fontWeight:600, color:'#F5F6FA', marginTop:10 }}>{l}</div>
              <div style={{ fontSize:11, color:'#6B7490', marginTop:4 }}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
          {quotes.map(({name,role,q})=>(
            <div key={name} style={{ background:'rgba(245,246,250,0.02)', border:'1px solid rgba(245,246,250,0.07)', borderRadius:16, padding:28 }}>
              <div style={{ fontSize:28, color:'#FF4D1C', opacity:0.4, lineHeight:1, marginBottom:14, fontFamily:'Georgia, serif' }}>'"</div>
              <p style={{ fontSize:14, color:'#6B7490', lineHeight:1.8, marginBottom:22 }}>{q}</p>
              <div style={{ borderTop:'1px solid rgba(245,246,250,0.06)', paddingTop:16 }}>
                <div style={{ fontSize:13, fontWeight:600, color:'#F5F6FA' }}>{name}</div>
                <div style={{ fontSize:11, color:'#6B7490', marginTop:3 }}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
