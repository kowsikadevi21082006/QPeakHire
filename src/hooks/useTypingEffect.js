import { useState, useEffect } from 'react';

export default function useTypingEffect(words=[], speed=120, deleteSpeed=60){
  const [typed, setTyped] = useState('');
  const [wi, setWi] = useState(0);
  useEffect(()=>{
    let i=0; let deleting=false; let current='';
    const interval = setInterval(()=>{
      const word = words[wi % words.length] || '';
      if(!deleting){ current = word.slice(0, i+1); i++; if(i===word.length){ deleting=true; setTimeout(()=>{},1200); }}
      else { current = word.slice(0, i-1); i--; if(i===0){ deleting=false; setWi(w=>w+1); }}
      setTyped(current);
    }, deleting? deleteSpeed : speed);
    return ()=> clearInterval(interval);
  },[wi, words, speed, deleteSpeed]);
  return typed;
}
