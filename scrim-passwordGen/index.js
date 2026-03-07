const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate(){

let recEl=document.getElementById("rectangle")
    let password1=""
    for(let i=0;i<15;i++){
    password1+= characters[(Math.floor(Math.random() * characters.length))]
    
    }
    recEl.textContent=password1
    console.log(password1) 


    let rec2El=document.getElementById("rectangle2")
    let password2=""
    for(let i=0;i<15;i++){
    password2+= characters[(Math.floor(Math.random() * characters.length))]
    
    }
    rec2El.textContent=password2
    console.log(password2)
    }