/*
    Faça um programa que leia um número qualquer e mostre o seu fatorial.

*/

let numero = 4
let fatorial = numero

for(i = numero; i > 1; i--) {
    fatorial = (fatorial) * (i-1)
}
console.log(`Calculando ${numero}!`)
console.log(`O numero ${numero} fatorial é ${fatorial}`)



//6*5*4*3*2*1