/*
    Escreva um programa que leia um número n inteiro qualquer e 
    mostre na tela os n primeiros elementos de uma SequÊnmci de Fibonacfi.

*/
let qtd = 10

// 1 = 0+1
// 1 = 1+0
// 2 = 1+1
// 3 = 2+1
// 5 = 3+2
// 8 = 5+3
// 13 = 8+5
// 21 = 13+8
// 34 = 21+13
let numero = 1
let t1 = 0
console.log(t1)
let t2 = 1
console.log(t2)

let cont = 3
while (cont <= qtd) {
    let t3 = t1 + t2
    console.log(t3)
    t1 = t2
    t2 = t3
    cont +=1
}

console.log("FIM")
