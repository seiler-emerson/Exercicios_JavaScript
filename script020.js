/*
    Um professor quer sortear a ordem de apresentação de trabalhos dos alunos.
    Faça um programa que leia o nome  dos quatro alunos e mostre a ordem sorteada.
*/

let alunos = ['Paulo', 'Ana', 'Pedro', 'Maria']
let escolhido = []
let numero1 = (Math.floor(Math.random() * (4 - 0) + 0))
escolhido.push(alunos[numero1])
alunos.splice(numero1,1)

let numero2 = (Math.floor(Math.random() * (3 - 0) + 0))
escolhido.push(alunos[numero2])
alunos.splice(numero2,1)

let numero3 = (Math.floor(Math.random() * (2 - 0) + 0))
escolhido.push(alunos[numero3])
alunos.splice(numero3,1)

escolhido.push(alunos[0])

console.log(`A ordem de apresentação será ${escolhido[0]}, ${escolhido[1]}, ${escolhido[2]} e ${escolhido[3]}.`)