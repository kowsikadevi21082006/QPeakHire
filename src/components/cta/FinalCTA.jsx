import React from 'react';
import FloatCard from '../hero/FloatCard';

export default function FinalCTA() {
  return (
    <section style={{ padding:'140px 40px', position:'relative', overflow:'hidden', borderTop:'1px solid rgba(245,246,250,0.05)' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(255,77,28,0.07) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', inset:0, backgroundImage:"linear-gradient(rgba(245,246,250,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(245,246,250,0.025) 1px,transparent 1px)", backgroundSize:'64px 64px', pointerEvents:'none' }}/>

      <FloatCard style={{ top:'15%', left:'5%', animation:'floatB 7s ease-in-out infinite', width:180, opacity:0.6 }}>
        <div style={{ fontSize:10, color:'#6B7490', marginBottom:4 }}>NEW PLACEMENT</div>
        <div style={{ fontSize:13, fontWeight:600, color:'#0DA882' }}>Arjun → TechCorp ✓</div>
        <div style={{ fontSize:10, color:'#6B7490', marginTop:2 }}>$180K · Remote</div>
      </FloatCard>
      <FloatCard style={{ bottom:'20%', left:'3%', animation:'floatA 9s ease-in-out infinite 1s', width:160, opacity:0.5 }}>
        <div className="sy" style={{ fontSize:28, fontWeight:800, color:'#FF4D1C', lineHeight:1 }}>91%</div>
        <div style={{ fontSize:10, color:'#6B7490', marginTop:2 }}>AI Match Score</div>
      </FloatCard>
      <FloatCard style={{ top:'20%', right:'4%', animation:'floatC 8s ease-in-out infinite 2s', width:170, opacity:0.5 }}>
        <div style={{ fontSize:10, color:'#6B7490', marginBottom:6 }}>JOBS SCANNED</div>
        <div className="sy" style={{ fontSize:28, fontWeight:800, color:'#1B3FFF' }}>2,847</div>
        <div style={{ fontSize:10, color:'#6B7490', marginTop:2 }}>in the last 24 hrs</div>
      </FloatCard>

      <div style={{ maxWidth:680, margin:'0 auto', textAlign:'center', position:'relative', zIndex:2 }}>
        <div className="lbl" style={{ justifyContent:'center', marginBottom:24 }}>Get Started</div>
        <h2 className="sy shimmer" style={{ fontSize:'clamp(40px,6vw,72px)', fontWeight:800, letterSpacing:'-2.5px', lineHeight:1.02, marginBottom:24 }}>
          Reach the Peak<br/>of Every Hire
        </h2>
        <p style={{ fontSize:18, color:'#6B7490', lineHeight:1.75, marginBottom:44, maxWidth:460, margin:'0 auto 44px' }}>
          Join bench sales teams placing more candidates with less effort. Book a live demo and see QPeakHire in action today.
        </p>
        <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:24 }}>
          <button className="btn-p" style={{ fontSize:16, padding:'16px 40px', animation:'glow 3s ease-in-out infinite' }}>Book a Demo →</button>
          <button className="btn-g" style={{ fontSize:16, padding:'16px 40px' }}>Explore the Docs</button>
        </div>
        <p style={{ fontSize:12, color:'#2E3650' }}>No credit card · Setup in 10 min · Cancel anytime</p>
      </div>
    </section>
  );
}
