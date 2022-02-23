/*
    Faça um programa que leia a idade e o sexo de varias pessoas.
    No final mostre:
    * Quantas pessoas tem mais de 18 anos.
    * Quantos homens foram cadastrados.
    * Quantas mulheres tem menos de 20 anos.

*/


let pessoas = [
    {
    idade: 22,
    Sexo: "M"
    },
    {
    idade: 85,
    Sexo: "F"
    },
    {
    idade: 12,
    Sexo: "F"
    },
    
]


// * Quantas pessoas tem mais de 18 anos.

let qtdPessoasMais18 = 0

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 18) {
        qtdPessoasMais18 = qtdPessoasMais18 +1
    }
}

console.log(`Ao todo são ${qtdPessoasMais18} pessoas com mais de 18 anos.`)

// * Quantos homens foram cadastrados.

let qtdHomens = 0

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].Sexo === "M") {
        qtdHomens = qtdHomens +1
    }
}

console.log(`Ao todo são ${qtdHomens} homens cadastrados.`)

// * Quantas mulheres tem menos de 20 anos.

let qtdMulheresMenos20 = 0

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].Sexo === "F" && pessoas[i].idade < 20) {
        qtdMulheresMenos20 = qtdMulheresMenos20 +1
    }
}

console.log(`Ao todo são ${qtdMulheresMenos20} mulheres com menos de 20 anos cadastradas.`)