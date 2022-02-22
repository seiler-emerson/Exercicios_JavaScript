/*
    Crie um programa que leia o ano de nascimento
    de sete pessoas. No final mostre quantas pessoas
    ainda não atingiram a maioridade e quantas já são maiores.

*/

let anosNascimento = [2010, 1960, 2011, 1970, 2000, 1940, 2000]
let contMenor = 0
let contMaior = 0

for(let i = 0; i < anosNascimento.length; i++) {
    if (2022 - anosNascimento[i] < 18) {
        contMenor = contMenor +1
    } else {
        contMaior = contMaior + 1
    }
}

if(contMaior > 0) {
    console.log(`Ao todo tivemos ${contMaior} pessoas maiores de idade.`)

} else {
    console.log("Não tivemos pessoas maiores de idade")
}

if(contMenor > 0) {
    console.log(`E também tivemos ${contMenor} pessoas menores de idade.`)

} else {
    console.log("Não tivemos pessoas maiores de idade")
}
