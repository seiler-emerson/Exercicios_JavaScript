/*
    Faça um algoritmo que leia o salário de um funcionário e mostre seu novo salário com 15% de aumento.
*/


let salario = 4319.43

let aumento = 15

let novoSalario = salario + (salario * (aumento/100))

console.log(`Um funcionário que ganhava R$${salario}, com ${aumento}% de aumento, passou a receber R$${novoSalario.toFixed(2)}`)
