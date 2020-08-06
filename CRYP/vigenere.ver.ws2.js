function vigenere(input,key,eOrD){let text=input;let password=key;let sepInput=[];let sepPassword=[];for(let i=0;i<text.length;i++){sepInput[i]=text[i]}
for(let i=0;i<password.length;i++){sepPassword[i]=password[i]}
let letters=[" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];let inputNum=[];let passwordNum=[];for(let i=0;i<text.length;i++){for(let j=0;j<27;j++){if(sepInput[i]==letters[j]){inputNum[i]=j;break}}}
for(let i=0;i<password.length;i++){for(let j=0;j<27;j++){if(sepPassword[i]==letters[j]){passwordNum[i]=j;break}}}
let adjInputNum=[];for(let i=0;i<text.length;i++){if(eOrD==0){adjInputNum[i]=(inputNum[i]+passwordNum[i%passwordNum.length])%27}else if(eOrD==1){adjInputNum[i]=(inputNum[i]-passwordNum[i%passwordNum.length])%27;if(adjInputNum[i]<0){adjInputNum[i]=27+adjInputNum[i]}}}
let charsInputAgain=[];for(let i=0;i<text.length;i++){if(adjInputNum[i]<27){charsInputAgain[i]=letters[adjInputNum[i]]}else{charsInputAgain[i]=sepInput[i]}}
let output="";for(let i=0;i<text.length;i++){output+=charsInputAgain[i]}
return output}
