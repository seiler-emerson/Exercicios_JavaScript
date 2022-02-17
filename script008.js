/*
    Escreva um programa que leia um valor em metros e o exiba
    convertido em km, hm, dam, m, dm, cm e mm.
*/

let metros = 3

let km = metros / 1000
let hm = metros / 100
let dam = metros / 10
let dm = metros * 10
let cm = metros * 100
let mm = metros * 1000


console.log(`A medida de ${metros} metros corresponde a:`)
console.log(`${km}km`)
console.log(`${hm}hm`)
console.log(`${dam}dam`)
console.log(`${dm}dm`)
console.log(`${cm}cm`)
console.log(`${mm}mm`)