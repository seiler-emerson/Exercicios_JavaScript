/*
    Escreva um programa que leia a velocidade de um carro.
    Sele ele ultrapassar 80km/h, mostre uma mensagem dizendo
    que ele foi multado.
    A multa vai custar R$7.00 por cada km acima do limite.
*/

let velocidadeCarro = 120

let multa = (velocidadeCarro - 80) * 7

if (velocidadeCarro <= 80) {
    console.log(`Tenha um bom dia! Dirija com segurança!`)
} else {
    console.log(`MULTADO! Você excedeu o limite permitido que é de 80Km/h`)
    console.log(`Você deve pagar uma multa de R$${multa}!`)
    console.log(`Tenha um bom dia! Dirija com segurança!`)
}