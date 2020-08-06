function vigenere(input,key,eOrD){let text=input;let password=key;let sepInput=[];let sepPassword=[];for(let i=0;i<text.length;i++){sepInput[i]=text[i]}
for(let i=0;i<password.length;i++){sepPassword[i]=password[i]}
let letters=[" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];let upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbers=["0","1","2","3","4","5","6","7","8","9"]
let otherChars=["!","@","#","$","%","^","&","*","(",")","-","_","=","+",";",":"]
let type=[]
let inputNum=[];let passwordNum=[];for(let i=0;i<text.length;i++){for(let j=0;j<27;j++){if(sepInput[i]==letters[j]){inputNum[i]=j;type[i]="letters"
break}}
if(inputNum[i]<27){}else{for(let j=0;j<26;j++){if(sepInput[i]==upperCase[j]){inputNum[i]=j;type[i]="uppercase"
break}}}
if(inputNum[i]<27){}else{for(let j=0;j<10;j++){if(sepInput[i]==numbers[j]){inputNum[i]=j;type[i]="numbers"
break}}}
if(inputNum[i]<27){}else{for(let j=0;j<16;j++){if(sepInput[i]==otherChars[j]){inputNum[i]=j;type[i]="otherChars"
break}}}}
for(let i=0;i<password.length;i++){for(let j=0;j<27;j++){if(sepPassword[i]==letters[j]){passwordNum[i]=j;break}}}
let adjInputNum=[];for(let i=0;i<text.length;i++){if(eOrD==0){if(type[i]=="letters"){adjInputNum[i]=(inputNum[i]+passwordNum[i%passwordNum.length])%27}else if(type[i]=="uppercase"){adjInputNum[i]=(inputNum[i]+passwordNum[i%passwordNum.length])%26}else if(type[i]=="numbers"){adjInputNum[i]=(inputNum[i]+passwordNum[i%passwordNum.length])%10}else if(type[i]=="otherChars"){adjInputNum[i]=(inputNum[i]+passwordNum[i%passwordNum.length])%16}}else if(eOrD==1){if(type[i]=="letters"){adjInputNum[i]=(inputNum[i]-passwordNum[i%passwordNum.length])%27;if(adjInputNum[i]<0){adjInputNum[i]=27+adjInputNum[i]}}else if(type[i]=="uppercase"){adjInputNum[i]=(inputNum[i]-passwordNum[i%passwordNum.length])%26;if(adjInputNum[i]<0){adjInputNum[i]=26+adjInputNum[i]}}else if(type[i]=="numbers"){adjInputNum[i]=(inputNum[i]-passwordNum[i%passwordNum.length])%10;if(adjInputNum[i]<0){adjInputNum[i]=10+adjInputNum[i]}}else if(type[i]=="otherChars"){adjInputNum[i]=(inputNum[i]-passwordNum[i%passwordNum.length])%16;if(adjInputNum[i]<0){adjInputNum[i]=16+adjInputNum[i]}}}}
let charsInputAgain=[];for(let i=0;i<text.length;i++){if(adjInputNum[i]<27){if(type[i]=="letters"){charsInputAgain[i]=letters[adjInputNum[i]]}else if(type[i]=="uppercase"){charsInputAgain[i]=upperCase[adjInputNum[i]]}else if(type[i]=="numbers"){charsInputAgain[i]=numbers[adjInputNum[i]]}else if(type[i]=="otherChars"){charsInputAgain[i]=otherChars[adjInputNum[i]]}}else{charsInputAgain[i]=sepInput[i]}}
let output="";for(let i=0;i<text.length;i++){output+=charsInputAgain[i]}
return output}
