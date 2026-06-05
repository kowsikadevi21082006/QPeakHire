import React from 'react';

export default function FloatCard({ style, children }) {
  return (
    <div style={{
      position: 'absolute',
      background: 'rgba(10,15,30,0.75)',
      border: '1px solid rgba(245,246,250,0.08)',
      borderRadius: 14,
      backdropFilter: 'blur(16px)',
      padding: '14px 18px',
      pointerEvents: 'none',
      ...style,
    }}>
      {children}
    </div>
  );
}
