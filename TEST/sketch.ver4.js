let vig,status=0;function setup(){noCanvas();let t=select("#button");t.mousePressed(function(){0==status?(status=1,t.html("d")):1==status&&(status=0,t.html("e"));n()});let e=select("#input"),s=select("#pw");e.input(n),s.input(n);let l=select("#para");function n(){vig=vigenere(e.value(),s.value(),status),vig=vig.replace(/(?:\r\n|\r|\n)/g,"<br>");let t="";for(let e=0;e<vig.length;e++)" "==vig[e]?t+="&nbsp":t+=vig[e];l.html(t)}}
