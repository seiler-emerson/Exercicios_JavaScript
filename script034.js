/*
    Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento.
    Para salários superiores a R$1250, calcule um aumento de 10%.
    Para os inferiores ou iguais o aumento será de 15%
*/

let salario = 1800


if (salario <= 1250) {
    salario = salario * 1.15
    console.log(`Parabén você recebeu um aumento de 15% seu salário passa a ser de R$${salario.toFixed(2)}.`)
} else {
    salario = salario * 1.10
    console.log(`Parabén você recebeu um aumento de 10% seu salário passa a ser de R$${salario.toFixed(2)}.`)
}