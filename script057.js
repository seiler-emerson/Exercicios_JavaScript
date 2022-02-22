/*
    Faça um programa que leia o sexo de uma pessoa,
    mas só aceite s valores "M" ou "F".
    Casp esteja errado, peça a digitação novamente até ter
    um valor correto

*/

let sexo = "m" 

let valorRecebido = sexo.toLowerCase()

if (valorRecebido === "m") {
    console.log("Sexo M registrado com sucesso!")
} else if (valorRecebido === "f") {
    console.log("Sexo F recebido com sucesso!")
} else {
    console.log("Dados inválidos. Por favor reinsira o dado novamente.")
}