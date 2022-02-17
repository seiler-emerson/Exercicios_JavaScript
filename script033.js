/*
    Faça um programa que leia 3 números e mostre qual é o maior e qual é o menor


*/

let numero1 = 2
let numero2 = 3
let numero3 = 1

let menor = numero1

if (numero2 < numero1 && numero2 < numero3) {
    menor = numero2
    console.log(`O menor valor digtado foi ${menor}`)
} else if (numero3 < numero1 && numero3 < numero2){
    menor = numero3
    console.log(`O menor valor digtado foi ${menor}`)
} else {
    console.log(`O menor valor digtado foi ${menor}`)
}

let maior = numero1

if (numero2 > numero1 && numero2 > numero3) {
    maior = numero2
    console.log(`O maior valor digtado foi ${maior}`)
} else if (numero3 > numero1 && numero3 > numero2){
    maior = numero3
    console.log(`O maior valor digtado foi ${maior}`)
} else {
    console.log(`O maior valor digtado foi ${maior}`)
}