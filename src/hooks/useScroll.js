import { useEffect, useState } from 'react';

export default function useScroll(threshold=50){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const fn = ()=> setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', fn);
    fn();
    return ()=> window.removeEventListener('scroll', fn);
  },[threshold]);
  return scrolled;
}
