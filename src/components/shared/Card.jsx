import React from 'react';

export default function Card({ children, style }){
  return <div style={{ background:'rgba(245,246,250,0.02)', border:'1px solid rgba(245,246,250,0.07)', borderRadius:18, padding:16, boxShadow:'0 20px 60px rgba(0,0,0,0.6)', ...style }}>{children}</div>;
}
