import React from 'react';

export default function DashboardSection() {
  const candidates = [
    { name:'Rahul Sharma',   role:'Sr. Full Stack',     score:91, status:'Interview', sc:'#F5A800' },
    { name:'Priya Mehta',    role:'DevOps Engineer',    score:87, status:'Applied',   sc:'#1B3FFF' },
    { name:'Arjun Singh',    role:'Data Scientist',     score:94, status:'Placed',    sc:'#0DA882' },
    { name:'Kavya Nair',     role:'React Developer',    score:83, status:'Tailoring', sc:'#FF4D1C' },
    { name:'Vikram Joshi',   role:'Cloud Architect',    score:89, status:'Applied',   sc:'#1B3FFF' },
    { name:'Sneha Patel',    role:'ML Engineer',        score:92, status:'Interview', sc:'#F5A800' },
  ];

  return (
    <section style={{ padding:'80px 40px', borderTop:'1px solid rgba(245,246,250,0.05)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div className="lbl" style={{ justifyContent:'center', marginBottom:16 }}>Dashboard</div>
          <h2 className="sy" style={{ fontSize:'clamp(28px,3.5vw,48px)', fontWeight:800, letterSpacing:'-1.8px', lineHeight:1.1 }}>
            Your entire bench, one screen.
          </h2>
          <p style={{ fontSize:16, color:'#6B7490', marginTop:16, maxWidth:480, margin:'16px auto 0' }}>
            Every candidate, every stage, every submission — tracked and surfaced in real time.
          </p>
        </div>

        <div style={{
          background:'rgba(245,246,250,0.018)',
          border:'1px solid rgba(245,246,250,0.08)',
          borderRadius:20,
          overflow:'hidden',
          boxShadow:'0 40px 120px rgba(0,0,0,0.5)',
        }}>
          <div style={{ background:'rgba(245,246,250,0.03)', borderBottom:'1px solid rgba(245,246,250,0.06)', padding:'12px 20px', display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#FF5F57' }}/>
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#FEBC2E' }}/>
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#28C840' }}/>
            <div style={{ margin:'0 auto', background:'rgba(245,246,250,0.05)', borderRadius:6, padding:'5px 24px', fontSize:11, color:'#6B7490' }}>app.qpeakhire.com/dashboard</div>
            <div style={{ width:8, height:8, borderRadius:'50%', background:'#0DA882', animation:'pulse 2s infinite' }}/>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'200px 1fr' }}>
            <div style={{ borderRight:'1px solid rgba(245,246,250,0.05)', padding:'20px 14px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:7, marginBottom:24 }}>
                <div style={{ width:24, height:24, borderRadius:6, background:'#FF4D1C', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span className="sy" style={{ fontSize:12, fontWeight:800, color:'#fff' }}>Q</span>
                </div>
                <span className="sy" style={{ fontSize:13, fontWeight:700 }}>QPeakHire</span>
              </div>
              {[
                ['⊞','Dashboard',true],['👥','Candidates',false],['🔍','Discover',false],['📊','Pipeline',false],['📨','Submissions',false],['📈','Analytics',false],['⚙️','Settings',false],
              ].map(([icon,label,active])=>(
                <div key={label} style={{ display:'flex', alignItems:'center', gap:9, padding:'9px 10px', borderRadius:8, marginBottom:2, background:active? 'rgba(255,77,28,0.1)':'transparent', cursor:'pointer' }}>
                  <span style={{ fontSize:13 }}>{icon}</span>
                  <span style={{ fontSize:12, fontWeight:active?600:400, color:active? '#FF4D1C':'#6B7490' }}>{label}</span>
                </div>
              ))}
            </div>

            <div style={{ padding:'20px 24px' }}>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:20 }}>
                {[['Active','124','👥','#1B3FFF'],['Submitted','47','📨','#F5A800'],['Interviews','12','🗓','#FF4D1C'],['Placed','9','🏆','#0DA882']].map(([l,v,icon,c])=>(
                  <div key={l} style={{ background:'rgba(245,246,250,0.03)', border:`1px solid ${c}20`, borderRadius:10, padding:'14px 16px' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
                      <span style={{ fontSize:10, color:'#6B7490', fontWeight:600, letterSpacing:0.5 }}>{l.toUpperCase()}</span>
                      <span style={{ fontSize:13 }}>{icon}</span>
                    </div>
                    <div className="sy" style={{ fontSize:28, fontWeight:800, color:'#F5F6FA' }}>{v}</div>
                    <div style={{ height:2, borderRadius:1, background:'rgba(245,246,250,0.05)', marginTop:8 }}>
                      <div style={{ height:'100%', width:`${parseInt(v)/1.5}%`, background:c, borderRadius:1, maxWidth:'100%' }}/>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom:20 }}>
                <div style={{ fontSize:10, color:'#6B7490', fontWeight:600, letterSpacing:1, marginBottom:10 }}>PIPELINE STAGES</div>
                <div style={{ display:'flex', gap:6 }}>
                  {[['Prospect',48,'#6B7490'],['Tailoring',14,'#FF4D1C'],['Applied',24,'#1B3FFF'],['Interview',12,'#F5A800'],['Placed',9,'#0DA882']].map(([s,n,c])=>(
                    <div key={s} style={{ flex:n, background:`${c}14`, border:`1px solid ${c}25`, borderRadius:8, padding:'8px 10px', textAlign:'center' }}>
                      <div className="sy" style={{ fontSize:16, fontWeight:800, color:c }}>{n}</div>
                      <div style={{ fontSize:9, color:'#6B7490', marginTop:2 }}>{s}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ fontSize:10, color:'#6B7490', fontWeight:600, letterSpacing:1, marginBottom:10 }}>CANDIDATES</div>
              {candidates.map((c,i)=>(
                <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'9px 0', borderBottom:i<candidates.length-1? '1px solid rgba(245,246,250,0.04)' : 'none' }}>
                  <div style={{ width:30, height:30, borderRadius:8, background:'rgba(27,63,255,0.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, color:'#7B9FFF', flexShrink:0 }}>
                    {c.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:12, fontWeight:600, color:'#F5F6FA' }}>{c.name}</div>
                    <div style={{ fontSize:10, color:'#6B7490' }}>{c.role}</div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <div style={{ width:52, height:3, borderRadius:2, background:'rgba(245,246,250,0.06)' }}>
                      <div style={{ height:'100%', width:`${c.score}%`, background:c.score>88? '#0DA882' : '#1B3FFF', borderRadius:2 }}/>
                    </div>
                    <span className="sy" style={{ fontSize:12, fontWeight:800, color:'#F5F6FA', minWidth:30 }}>{c.score}%</span>
                  </div>
                  <div style={{ background:`${c.sc}12`, border:`1px solid ${c.sc}25`, color:c.sc, padding:'3px 9px', borderRadius:6, fontSize:10, fontWeight:700, minWidth:64, textAlign:'center' }}>{c.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
