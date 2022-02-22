/*
    Melhore o jogo do DESAFIO 28 onde o computador vai
    "pensar" em um número de 0 e 10. Só que agora o computador
    vai tentar dizer se o número é para cima ou para baixo em caso de erro.

*/

let numeroUsuário = 5

let numeroComputador = (Math.floor(Math.random() * (10) + 1))

if (numeroComputador === numeroUsuário) {
    console.log(`Parabéns, você acertou o número que o computador escolheu! Número: ${numeroComputador}`)
} else if (numeroComputador > numeroUsuário){
    console.log(`Mais... Tente mais um vez.`)
} else {
    console.log(`Menos... Tente mais um vez.`)
}