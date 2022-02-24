/*
    Crie um programa que crie uma matriz de dimensão 3x3 e preencha com valores definidos.
    No final mostre a matriz na tela com a formatação correta.

*/

let numeros = [12,15,9,2,55,720,12,56,123]    //Recebe os valores

let matriz = [[],[],[]]

for (let i = 0; i < numeros.length; i++) {
    if(matriz[0].length < 3) {
        matriz[0].push(numeros[i])
    } else if(matriz[1].length < 3) {
        matriz[1].push(numeros[i])
    } else if(matriz[2].length < 3) {
        matriz[2].push(numeros[i])
    }
}
console.log('=================')
console.log(`[${" ".repeat(3-(matriz[0][0].toString().length))}${matriz[0][0]}],[${" ".repeat(3-(matriz[0][1].toString().length))}${matriz[0][1]}],[${" ".repeat(3-(matriz[0][2].toString().length))}${matriz[0][2]}]`)
console.log(`[${" ".repeat(3-(matriz[1][0].toString().length))}${matriz[1][0]}],[${" ".repeat(3-(matriz[1][1].toString().length))}${matriz[1][1]}],[${" ".repeat(3-(matriz[1][2].toString().length))}${matriz[1][2]}]`)
console.log(`[${" ".repeat(3-(matriz[2][0].toString().length))}${matriz[2][0]}],[${" ".repeat(3-(matriz[2][1].toString().length))}${matriz[2][1]}],[${" ".repeat(3-(matriz[2][2].toString().length))}${matriz[2][2]}]`)
console.log('=================')