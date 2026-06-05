import React from 'react';
import FloatCard from './FloatCard';

export default function HeroBG() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>

      <div style={{
        position: 'absolute', top: '10%', right: '15%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(27,63,255,0.12) 0%, transparent 70%)',
        animation: 'orb 12s ease-in-out infinite',
        borderRadius: '50%',
      }}/>
      <div style={{
        position: 'absolute', bottom: '5%', left: '5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(255,77,28,0.08) 0%, transparent 70%)',
        animation: 'orb 16s ease-in-out infinite reverse',
        borderRadius: '50%',
      }}/>
      <div style={{
        position: 'absolute', top: '40%', right: '5%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(13,168,130,0.06) 0%, transparent 70%)',
        animation: 'orb 9s ease-in-out infinite 3s',
        borderRadius: '50%',
      }}/>

      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "linear-gradient(rgba(245,246,250,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(245,246,250,0.028) 1px,transparent 1px)",
        backgroundSize: '64px 64px',
      }}/>

      <FloatCard style={{ top: '18%', right: '6%', animation: 'floatA_slow 14s ease-in-out infinite', width: 220, opacity:0.96, boxShadow:'0 10px 22px rgba(0,0,0,0.45)' }}>
        <div style={{ fontSize: 10, color: '#6B7490', fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>AI MATCH SCORE</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'Syne', fontSize: 36, fontWeight: 800, color: '#FF4D1C', lineHeight: 1 }}>91%</div>
            <div style={{ fontSize: 11, color: '#6B7490', marginTop: 2 }}>Rahul Sharma · Sr. React</div>
          </div>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'conic-gradient(#FF4D1C 0% 91%, rgba(245,246,250,0.08) 91% 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: '#0A0F1E',
              position: 'absolute',
            }}/>
          </div>
        </div>
        <div style={{ marginTop: 10, height: 3, borderRadius: 2, background: 'rgba(245,246,250,0.06)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '91%', background: 'linear-gradient(90deg,#FF4D1C,#FF8060)', borderRadius: 2 }}/>
        </div>
      </FloatCard>

      <FloatCard style={{ top: '40%', right: '4%', animation: 'floatB_slow 16s ease-in-out infinite 1s', width: 230, opacity:0.96, boxShadow:'0 10px 22px rgba(0,0,0,0.44)' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'rgba(13,168,130,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, flexShrink: 0,
          }}>🏆</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0DA882' }}>Placement Confirmed</div>
            <div style={{ fontSize: 11, color: '#6B7490', marginTop: 2 }}>Priya Mehta → FinTech Corp</div>
            <div style={{ fontSize: 10, color: '#6B7490', marginTop: 1 }}>$185K · Remote · Start Mon</div>
          </div>
        </div>
      </FloatCard>

      <FloatCard style={{ bottom: '28%', right: '8%', animation: 'floatC_slow 18s ease-in-out infinite 0.5s', width: 200, opacity:0.95, boxShadow:'0 10px 20px rgba(0,0,0,0.42)' }}>
        <div style={{ fontSize: 10, color: '#6B7490', fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>JOBS SCANNED · LIVE</div>
        {[['Sr. Full Stack', '91%','#FF4D1C'],['DevOps Lead','87%','#1B3FFF'],['Cloud Arch.','83%','#0DA882']].map(([r,s,c])=> (
          <div key={r} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6 }}>
            <span style={{ fontSize:11, color:'#F5F6FA' }}>{r}</span>
            <span style={{ fontSize:11, fontWeight:700, fontFamily:'Syne', color:c }}>{s}</span>
          </div>
        ))}
        <div style={{ display:'flex', alignItems:'center', gap:4, marginTop:8, paddingTop:8, borderTop:'1px solid rgba(245,246,250,0.06)' }}>
          <div style={{ width:6, height:6, borderRadius:'50%', background:'#0DA882', animation:'pulse 2s infinite' }}/>
          <span style={{ fontSize:10, color:'#6B7490' }}>2,847 scanned today</span>
        </div>
      </FloatCard>

      <FloatCard style={{ top: '62%', right: '5%', animation: 'floatA_slow 20s ease-in-out infinite 2s', width: 210, opacity:0.95, boxShadow:'0 10px 20px rgba(0,0,0,0.42)' }}>
        <div style={{ fontSize: 10, color: '#6B7490', fontWeight: 600, letterSpacing: 1, marginBottom: 10 }}>PIPELINE OVERVIEW</div>
        {[['Prospect',48,'#6B7490'],['Applied',24,'#1B3FFF'],['Interview',12,'#F5A800'],['Placed',9,'#0DA882']].map(([s,n,c])=> (
          <div key={s} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
            <div style={{ fontSize:11, color:c, width:64 }}>{s}</div>
            <div style={{ flex:1, height:4, borderRadius:2, background:'rgba(245,246,250,0.06)', overflow:'hidden' }}>
              <div style={{ height:'100%', width:`${n*2}%`, background:c, borderRadius:2, maxWidth:'100%', transformOrigin:'left', animation:'barGrow 1.5s ease forwards' }}/>
            </div>
            <span style={{ fontSize:11, fontFamily:'Syne', fontWeight:700, color:'#F5F6FA', minWidth:20 }}>{n}</span>
          </div>
        ))}
      </FloatCard>

      <div style={{
        position: 'absolute', left: 0, right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,77,28,0.10), transparent)',
        animation: 'scan 18s linear infinite',
        top: '20%',
        opacity:0.7,
      }}/>
    </div>
  );
}
