let input = document.getElementsByTagName("input")[0];
let gen = document.getElementsByTagName("gen")[0];

let length = 8;
let uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase ="abcdefghijklmnopqrstuvwxyz";
let numbers ="0123456789"
let symbols ="!@#$%^&*()_+-={}|\:<>/?"
function generatePassword(){
    let password=""
    while(password.length<length){
       
        password+=uppercase[Math.floor(Math.random()*uppercase.length)]
        password+=lowercase[Math.floor(Math.random()*lowercase.length)]
        password+=numbers[Math.floor(Math.random()*numbers.length)]
        password+=symbols[Math.floor(Math.random()*symbols.length)]
        
    }
    input.value = password;
}