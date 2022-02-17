/*
    Escreva um programa que leia algo pelo teclado e mostre na tela o seu
    tipo, e toas as informações possiveis sobre ela.
*/

let entrada = "Emerson123"

//TIPO DE DADO
let tipo = typeof(entrada)

//Só tem espaços vazios
function  verificaEspacos(entrada) {
    entrada = entrada.replace(/\s/g, "") //pega todos os espaços e substitui por nada
    if (entrada.length > 0) {
        console.log("Só tem espaços? False")
    } else {
        console.log("Só tem espaços? True")
    }
}


//É um número
let numero = verifNumber()

function verifNumber() {
    if (isNaN(entrada) === true) {
        return false
    }   else {
        return true
    }
}

//É alfabético
let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','w','z']
let numeros = [0,1,2,3,4,5,6,7,8,9]


for(let i = 0; i < alfabeto.length; i++) {
    if (entrada.includes(alfabeto[i])) {
        console.log(entrada.includes(alfabeto[i]))
        // console.log(entrada.includes(numeros[i]))
        // console.log(entrada)
    } else {
        console.log('outra coisa')
    }

 }
 




// console.log(`O elemento digitado foi: ${entrada}`)
// console.log(`O tipo primitivo desse valor é ${tipo}`);
// verificaEspacos(entrada)
// console.log(`É um número? ${numero}`)


