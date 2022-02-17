/*
    Desenvolva um programa que pergunte a distância de uma viagem em km.
    Calcule o preço da passagem, cobrando R$0,50 por km para viagens de 
    até 200km e R$0,45 para viagens mais longas.
*/

let distancia = 210


if (distancia <= 200) {
    let precoViagem = distancia * 0.50
    console.log(`Você está preste a começar uma viagem de ${distancia}Km.`)
    console.log(`E o preço da sua passagem será de R$${precoViagem.toFixed(2)}.`)
} else {
    let precoViagem = distancia * 0.45
    console.log(`Você está preste a começar uma viagem de ${distancia}Km.`)
    console.log(`E o preço da sua passagem será de R$${precoViagem.toFixed(2)}.`)
}
