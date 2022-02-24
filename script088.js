/*
    Faça um programa que ajude um jogador da MEGA SENA a criar
    palpites. O programa vai receber quantos jogos devem ser gerados
    e vai sortear 6 números entre 1 e 60 para cada jogo, cadastrando
    tudo em uma lista composta.

*/

let qtdJogos = 8


let geradorJogos = (n) => {
    for(let i = 0; i < n; i++) {
        let valores = new Array()
        let jogo = []
        
        while (jogo.length < 6) {
    
            let num = (Math.floor(Math.random() * (60 - 0) + 1))
            valores.push(num)
            jogo = valores.filter(function(este, i) {   //Filtrar números repetidos e exibir uma vez apenas
                return valores.indexOf(este) === i;
            });
            
        }
        console.log(`Jogo ${i+1}: ${jogo}`)
    }
}

console.log("=================================")
console.log("        JOGA NA MEGA SENA        ")
console.log("=================================")
console.log(`-=-=-= SORTEANDO ${qtdJogos} JOGOS =-=-=-`)
geradorJogos(qtdJogos)
console.log(`=-=-=-=-=-= BOA SORTE =-=-=-=-=-=`)


