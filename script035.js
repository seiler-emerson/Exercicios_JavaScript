/*
    Escreva um programa que leia o comprimento de três retas e diga ao usuário
    se elas podem ou não formar um triângulo.

    | b - c | < a < b + c
    | a - c | < b < a + c
    | a - b | < c < a + b
*/

let segmentoA = 2
let segmentoB = 4
let segmentoC = 9

if( Math.abs(segmentoB - segmentoC) < segmentoA && (segmentoB + segmentoC) > segmentoA &&
    Math.abs(segmentoA - segmentoC) < segmentoB && (segmentoA + segmentoC) > segmentoB &&
    Math.abs(segmentoA - segmentoB) < segmentoC && (segmentoA + segmentoC) > segmentoB){
        console.log("Os segmentos acima PODEM FORMAR UM triângulo!")
} else {
        console.log("Os segmentos acima NÃO PODEM FORMAR UM triângulo!")
}