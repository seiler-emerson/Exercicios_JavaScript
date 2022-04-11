/*
    Faça um programa onde 4 jogadores joguem um dado e tenham resultados aleatórios.
    Guarde os resultados em um array, e exiba em ordem do maior para o menor.

*/

let jogadores = [
    {
        jogador: 'Jogador 001'
    },
    {
        jogador: 'Jogador 02'
    },
    {
        jogador: 'Jogador 03'
    },
    {
        jogador: 'Jogador 04'
    },
]

console.log("==   VALORES SORTEADOS   ==")

for(let i = 0; i < jogadores.length; i++) {
    let valor = (Math.floor(Math.random() * (6 - 0) + 1))
    Object.defineProperty(jogadores[i], 'valor', {value: valor})
    console.log(`${jogadores[i].jogador} tirou ${jogadores[i].valor} no dado.`)


}

console.log("---------------------------")
console.log("== RANKING DOS JOGADORES ==")

jogadores.sort(function(a,b) {                                  //Função comparação
    return a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : 0;  //Se a for menor que b coloca atras de b | se a for maior que b coloca a frente
});

for(let i = 0; i < jogadores.length; i++) {
    console.log(`${[i+1]}° lugar: ${jogadores[i].jogador} com ${jogadores[i].valor}`)

}
