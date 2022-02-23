/*
    Crie um programa que vai gerar cinco números aleatórios e colocar em um array.
    Depois disso, mostre a listagem de números gerados e indique o menor e o maior valor
    que estão no array.

*/

let array = []

// Gerar cinco números aleatórios e colocar em um array

for(let i = 0; i < 5; i++) {
    numero = (Math.floor(Math.random() * (10) + 1))
    array.push(numero)
}

// Mostre a listagem de números gerados
console.log(`Os valores sorteados foram: ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}`)


//Menor Valor
let menor = 100
for(let i = 0; i < array.length; i++) {
    if(array[i] < menor) {
        menor = array[i]
    }
}
console.log(`O menor valor sorteado foi ${menor}`)

//Maior Valor
let maior = 0
for(let i = 0; i < array.length; i++) {
    if(array[i] > maior) {
        maior = array[i]
    }
}
console.log(`O menor valor sorteado foi ${maior}`)