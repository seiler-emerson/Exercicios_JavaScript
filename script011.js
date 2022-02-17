/*
    Escreva um programa que leia a largura e a altura de uma parede em
    metros, calcule sua área e a quantidade de litros de tinta necessária
    para pintá-la, sabendo que cada litro de tinta, pinta uma área de 2m².
*/

let larguraParede = 2.5
let alturaParede = 1.75

let areaParede = larguraParede * alturaParede

let volumeTinta = areaParede / 2

console.log(`Sua parede tem a dimensão de ${larguraParede}x${alturaParede}m e sua área é de ${areaParede}m².`)
console.log(`Para pintar essa parede, você precisará de ${volumeTinta}l de tinta.`)