/*
    Crie um programa que armazene 7 valores numéricos em um array e cadastre-os em uma lista única que mantenha
    separados os valores pares e impares. No final mostre os valores pares e ímpares em ordem crescente.

*/

let numeros = [9,1,5,6,8,3,2]    //Recebe os valores

let lista = [
    [],
    []
]

for (let i = 0; i < numeros.length; i++) {              //Varre o array
    validador = numeros[i] % 2                          //Executa a validação | Par = 0 / Impar = 1

    switch (validador) {                                //Se validador
        case 0 :                                        //For 0 coloca o numero no array da posição 0
            lista[0].push(numeros[i])
            break
        case 1 :                                        //For 1 coloca o numero no array da posição 1
            lista[1].push(numeros[i])
            break
    }

}

console.log(`Os valores pares digitados foram ${lista[0].sort()}`)
console.log(`Os valores impares digitados foram ${lista[1].sort()}`)