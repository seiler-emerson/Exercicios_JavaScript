/*
    Crie um array preenchida com os 20 primeiros colocados da Tabela do Campeonato Brasileiro de Futebol,
    na ordem de colocação. Depois mostre:
    * Os 5 primeiros
    * Os 4 últimos colocados
    * Times em ordem alfabética
    * Em que posição está o time da Chapecoense.

*/

let times = [
    'Corinthians','Palmeiras','Santos','Grêmio','Cruzeiro','Flamengo','Vasco','Chapecoense','Atlético','Botafogo','Atlético-PR','Bahia','São Paulo','Fluminense','Sport Recife','EC Vitória','Coritiba','Avaí','Ponte Preta','Atlético-GO'
]


// Lista todos os times
console.log("TIMES EM ORDEM COLOCAÇÃO")
for(let i = 0; i < times.length; i++) {
    console.log(`${i+1} - ${times[i]}`)
}

console.log('')

// Os 5 primeiros
console.log("CINCO PRIMEIROS COLOCADOS")
for(let i = 0; i < 5; i++) {
    console.log(`${i+1} - ${times[i]}`)
}
console.log('')


// * Os 4 últimos colocados
console.log("QUATRO ULTIMOS COLOCADOS")
for(let i = (times.length -1 ); i > 15; i--) {
    console.log(`${i+1} - ${times[i]}`)
}
console.log('')

// * Times em ordem alfabética
console.log("TIMES EM ORDEM ALFABÉTICA")
let timesOrdemAlfabetica = times.sort()
for(let i = 0; i < timesOrdemAlfabetica.length; i++) {
    console.log(`${timesOrdemAlfabetica[i]}`)
}
console.log('')

// * Em que posição está o time da Chapecoense.

console.log("POSIÇÃO CHAPECOENSE")
let posicaoChapecoense = times.findIndex(a => a === "Chapecoense")
console.log(`O Chapecoense está na ${posicaoChapecoense +1}ª posição.`)