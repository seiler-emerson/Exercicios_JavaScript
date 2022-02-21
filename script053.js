/*
    Crie um programa que leia uma frase qualquer
    e diga se ela é um palindromo, desconsiderando
    os epaços.

*/

let frase = "asarada"

let fraseArray = frase.toLowerCase().replace(/\s/g, "").split("")   //Convertendo frase para array de letras minusculas, removendo espaços
// console.log(fraseArray)

let fraseInvertida = fraseArray.reverse()  //Invertendo array par verificar o palindromo
// console.log(fraseInvertida)

let fraseCaracteresJuntos = fraseArray.reverse().toString().replaceAll("," , "")
console.log(fraseCaracteresJuntos)

let fraseInvertidaCaracJuntos = fraseInvertida.reverse().toString().replaceAll("," , "")
console.log(fraseInvertidaCaracJuntos)

console.log(`O inverso de ${fraseCaracteresJuntos.toUpperCase()} é ${fraseInvertidaCaracJuntos.toUpperCase()}`)

if (fraseCaracteresJuntos === fraseInvertidaCaracJuntos) {
    console.log('Temos um palíndromo!')
} else {
    console.log('A frase digitada não é um palíndromo!')
}

