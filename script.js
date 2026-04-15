const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1El=document.getElementById("pass1")
let pass2El=document.getElementById("pass2")
let passLength=15

function genPass(){
let password1=""
let password2=""
for(let i=0;i<passLength;i++){
password1+=randomPass()
password2+=randomPass()
}    
pass1El.textContent=password1
pass2El.textContent=password2

}
function randomPass(){
    let randomPass=Math.floor(Math.random()*characters.length)
    return characters[randomPass]
}
