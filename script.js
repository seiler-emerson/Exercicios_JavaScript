/*
    Refaça o DESAFIO 035 dos triângulos, acresentando o recurso de
    mostrar que tipo de triângulo será formado:
    * EQUILÁTERO: Todos os lados iguais.
    * ISÓSCELES: Dois lados iguais.
    * ESCALENO: Todos os lados diferentes

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
