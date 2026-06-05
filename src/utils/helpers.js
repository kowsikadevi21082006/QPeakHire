export function initials(name){ return name.split(' ').map(n=>n[0]).join(''); }

export function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
