let entrada = 5

//TIPO DE DADO
let tipo = typeof(entrada)

//Só tem espaços vazios

//É um número
let numero = verifNumber()

function verifNumber() {
    if (isNaN(entrada) === true) {
        return false
    }   else {
        return true
    }
}

//É alfabético



console.log(`O tipo primitivo desse valor é ${tipo}`);
console.log(`É um número? ${numero}`)