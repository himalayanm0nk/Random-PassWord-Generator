const passBox =document.getElementById('inputBox')

const length =12;

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const lowerCase= "abcdefghijklmnopqrstuvwxyz"

const numbers = "0123456789"

const symbols = "~@#$%^&*()_+=-{}][/><"

const allChar = upperCase+ lowerCase+numbers+symbols

function Generate(){
    let password =""
    password+= upperCase[Math.floor(Math.random()* upperCase.length)];

     password+= lowerCase[Math.floor(Math.random()* lowerCase.length)] 

     password+= numbers[Math.floor(Math.random()*numbers.length)]

     password+=symbols[Math.floor(Math.random()* symbols.length)]

     while(length>password.length){
    password+=allChar[Math.floor(Math.random()*allChar.length)]
     }
     passBox.value =password

     
}

function copypassword(){
        passBox.select()
        document.execCommand("copy")
}