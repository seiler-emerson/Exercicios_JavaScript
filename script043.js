/*
    Desenvolva um alógica que leia o peso e a altura de uma pessoa,
    calcule seu IMC e mostre seu status, de acordo om  a tabela abaixo:
    * Abaixo de 18.5: Abaixo do peso
    * Entre 18.5 e 25: Peso ideal
    * 25 até 30: Sobrepeso
    * 30 até 40: Obesidade
    * acima de 40: Obesidade mórbida

*/

let pesoKg = 65.3
let alturaM = 1.71

let imc = pesoKg / (alturaM * alturaM)



if( imc < 18.5){
    console.log("Você está abaixo do peso ideal!")      
} else if (imc >= 18.5 && imc < 25){
    console.log("PARABÉNS, você está na faixa de PESO NORMAL!")
} else if (imc >= 25 && imc < 30) {
    console.log("Você está em SOBREPESO!")
} else if (imc >= 30 && imc < 40) {
    console.log("Você esta em OBESIDADE!")
} else {
    console.log("Você está em OBESIDADE MÓRBITA!")
}
