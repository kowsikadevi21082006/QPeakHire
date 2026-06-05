import React from 'react';

export default function Button({ children, variant='primary', style: s, ...props }){
  return (
    <button className={variant==='primary'? 'btn-p' : 'btn-g'} style={s} {...props}>{children}</button>
  );
}
