function vigenere(e,t,l){let n=e,r=t,f=[],g=[];for(let e=0;e<n.length;e++)f[e]=n[e];for(let e=0;e<r.length;e++)g[e]=r[e];let o=[" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],h=[],i=[];for(let e=0;e<n.length;e++)for(let t=0;t<27;t++)f[e]==o[t]&&(h[e]=t);for(let e=0;e<r.length;e++)for(let t=0;t<27;t++)g[e]==o[t]?i[e]=t:" "==g[e]&&(i[e]=0);let u=[];for(let e=0;e<n.length;e++)0==l?u[e]=(h[e]+i[e%i.length])%27:1==l&&(u[e]=(h[e]-i[e%i.length])%27,u[e]<0&&(u[e]=27+u[e]));let c=[];for(let e=0;e<n.length;e++)u[e]<27?c[e]=o[u[e]]:c[e]=f[e];let v="";for(let e=0;e<n.length;e++)v+=c[e];return v}
