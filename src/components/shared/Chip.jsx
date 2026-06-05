import React from 'react';

export default function Chip({ children, style }){
  return <span className="chip" style={style}>{children}</span>;
}
