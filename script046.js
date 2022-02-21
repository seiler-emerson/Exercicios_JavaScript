/*
    Faça na tela um programa que mostre na tela uma
    contagem regressiva para o estouro de fogos de artificio,
    indo de 10 até 0, com pausa de 1 segundo entre elas.

*/
let time = 10

setInterval(function (){
    if(time >= 0) {
        console.log(time)
    } else if (time === -1 ){
        console.log("BUM! BUM! POOOW!")
    }
    time--
}, 1000);
    
