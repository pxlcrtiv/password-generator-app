
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}],|:;<>.?/"; 
let passUno=document.getElementById("pass1")
let passDuos=document.getElementById("pass2")

function generatePass(){
    let password1=""
    let password2=""
    for (let i=0; i<16; i++){   
        let randomUno=Math.floor(Math.random() * characters.length)
        password1 += characters[randomUno]

        let randomDuos=Math.floor(Math.random() * characters.length)    
        password2 += characters[randomDuos]
}
    passUno.textContent=password1
    passDuos.textContent=password2

}
    console.log(generatePass())
    generatePass()