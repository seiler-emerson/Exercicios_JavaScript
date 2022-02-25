/*
    Faça um programa que receba o nome, ano de nascimento e a carteira de trabalho
    e cadastre-os (com idade) em um array de objetos. Se por acaso a CTPS
    for diferente de zero, o array receberá também o ano de contratação e o salário.
    Calcule e acrescente, além da idade, com quantos anos a pessoa vai se aposentar.

*/

let jogadores = [
    {
        jogador: 'Jogador 01'
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
