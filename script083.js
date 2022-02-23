/*
    Crie um programa onde o usuário digite uma expressão
    qualquer que use parenteses. Seu programa deverá analisar
    se a expressão passada está com os parênteses abertos e fechados
    na ordem correta

*/

let expressao = '((a+b)+((c+b))'
let arrayExpressao = expressao.split('')
let parentesesAbertos = []
let parentesesFechados = []
for (let i = 0; i < expressao.length; i++) {
    if(arrayExpressao[i] === '(') {
        parentesesAbertos.push('(')
    } else if (arrayExpressao[i] === ')') {
        parentesesFechados.push(')')
    }
}

if (parentesesAbertos.length === parentesesFechados.length) {
    console.log("Sua expressão está válida!")
} else {
    console.log("Sua expressão está errada!")
}

console.log(parentesesAbertos)
console.log(parentesesFechados)