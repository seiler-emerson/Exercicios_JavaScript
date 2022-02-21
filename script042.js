/*
    Refaça o DESAFIO 035 dos triângulos, acresentando o recurso de
    mostrar que tipo de triângulo será formado:
    * EQUILÁTERO: Todos os lados iguais.
    * ISÓSCELES: Dois lados iguais.
    * ESCALENO: Todos os lados diferentes

*/

let segmentoA = 1
let segmentoB = 9
let segmentoC = 8

if( Math.abs(segmentoB - segmentoC) < segmentoA && (segmentoB + segmentoC) > segmentoA &&
    Math.abs(segmentoA - segmentoC) < segmentoB && (segmentoA + segmentoC) > segmentoB &&
    Math.abs(segmentoA - segmentoB) < segmentoC && (segmentoA + segmentoC) > segmentoB){
        if(segmentoA === segmentoB && segmentoA === segmentoC) {
            console.log("Os segmentos acima PODEM FORMAR UM triângulo EQUILÁTERO!")
        } else if (segmentoA === segmentoB || segmentoA === segmentoC || segmentoB === segmentoC) {
            console.log("Os segmentos acima PODEM FORMAR UM triângulo ISÓSCELES!")
        } else {
            console.log("Os segmentos acima PODEM FORMAR UM triângulo ESCALENO!")
        }
} else {
        console.log("Os segmentos acima NÃO PODEM FORMAR UM triângulo!")
}
