let inputSlider =document.getElementById('inputSlider');
let slidervalue= document.getElementById('sliderValue');
let passBox= document.getElementById('passBox');
let lowercase= document.getElementById('lowercase');
let uppercase= document.getElementById('uppercase');
let numbers= document.getElementById('numbers');
let symbols= document.getElementById('symbols');
let genbtn= document.getElementById('genbtn');
let copyIcon=document.getElementById('copyIcon');

slidervalue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    slidervalue.textContent=inputSlider.value;
})


genbtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
})

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allNumbers="0123456789";
let allSymbols="~!@#$%^&*"; 

//function to genrate pssword
function generatePassword(){
     let genPassword="";
     let allChars="";

    //  allChars += lowercase.checked ? lowerChars : "";
     if(lowercase.checked){
        allChars=allChars+lowerChars;
     }
    //  else{
    //     allChars="";
    //  }
     allChars += uppercase.checked ? upperChars : "";
     allChars += numbers.checked ? allNumbers : "";
     allChars += symbols.checked ? allSymbols : "";

    //  if(allChars == "" || allChars.length == 0){
    //     return genPassword;
    // }


     let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;

    
}







copyIcon.addEventListener('click',()=>{
   
    if(passBox.value.length>=1){
         navigator.clipboard.writeText(passBox.value);
         alert("Password Copied");
         copyIcon.innerText="check"
       
       
         setTimeout(()=>{
            copyIcon.innerText="content_copy";
            copyIcon.title="";
        },3500)
}
})

