/*
    Aprimore o desafio anterior, mostrando no final:
    * A soma de todos os valores pares digitados.
    * A soma dos valores da terceira coluna
    * O maior valor da segunda coluna

*/

let numeros = [3,2,6,5,1,9,7,4,2]    //Recebe os valores

let matriz = [[],[],[]]
let totalPares = 0

for (let i = 0; i < numeros.length; i++) {
    if(matriz[0].length < 3) {
        matriz[0].push(numeros[i])
        if(numeros[i] % 2 === 0) {
            totalPares = totalPares + numeros[i]
        }
    } else if(matriz[1].length < 3) {
        matriz[1].push(numeros[i])
        if(numeros[i] % 2 === 0) {
            totalPares = totalPares + numeros[i]
        }
    } else if(matriz[2].length < 3) {
        matriz[2].push(numeros[i])
        if(numeros[i] % 2 === 0) {
            totalPares = totalPares + numeros[i]
        }
    }
}

let totalTerceiraColuna = matriz[0][2] + matriz[1][2] + matriz[2][2]

let maiorValorLinha2 = 0
for (let i = 0; i < matriz[1].length ; i++) {
    if(maiorValorLinha2 < matriz[1][i]){
        maiorValorLinha2 = matriz[1][i]
    }
}

console.log('=================')
console.log(`[${" ".repeat(3-(matriz[0][0].toString().length))}${matriz[0][0]}],[${" ".repeat(3-(matriz[0][1].toString().length))}${matriz[0][1]}],[${" ".repeat(3-(matriz[0][2].toString().length))}${matriz[0][2]}]`)
console.log(`[${" ".repeat(3-(matriz[1][0].toString().length))}${matriz[1][0]}],[${" ".repeat(3-(matriz[1][1].toString().length))}${matriz[1][1]}],[${" ".repeat(3-(matriz[1][2].toString().length))}${matriz[1][2]}]`)
console.log(`[${" ".repeat(3-(matriz[2][0].toString().length))}${matriz[2][0]}],[${" ".repeat(3-(matriz[2][1].toString().length))}${matriz[2][1]}],[${" ".repeat(3-(matriz[2][2].toString().length))}${matriz[2][2]}]`)
console.log('=================')

console.log(``)
console.log(`A soma dos valores pares é ${totalPares}`)
console.log(`A soma dos valores da terceira coluna é ${totalTerceiraColuna}`)
console.log(`O maior valor da segunda linha é ${maiorValorLinha2}`)