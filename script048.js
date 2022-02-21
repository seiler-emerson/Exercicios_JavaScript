/*
    Faça um programa que calculo a soma
    entre todos os números ímpares que são
    múltiplos de três e que se encontram no
    intervalo de 1 até 500

*/
let soma = 0
let contador = 0
for (let i = 1;i <=500; i++) {
    let num = i
    if (num % 2 !== 0 ) {
        if ((num) % 3 == 0 ) {
            soma = soma + num
            contador = contador + 1
        }
    }    
}
console.log(`A soma de todos os ${contador} valores solicitados é ${soma}.`)