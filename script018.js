/*
    Faça um programa que leia um ângulo qualquer e
    mostre na tela o valor do seno, cosseno e
    tangente desse ângulo.
*/

let anguloDeg = 30
let anguloRad = anguloDeg * ( Math.PI / 180)

let cosseno = Math.cos(anguloRad)
let seno = Math.sin(anguloRad)
let tangente = Math.tan(anguloRad)


console.log(`O Ângulo de ${anguloDeg} tem o SENO de ${seno}`)   // 0.5
console.log(`O Ângulo de ${anguloDeg} tem o COSSENO de ${cosseno}`)  // 0.87
console.log(`O Ângulo de ${anguloDeg} tem o TANGENTE de ${tangente}`)  // 0.58