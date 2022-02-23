/*
    Crie um programa que tenha um array com as palavras abaixo.
    aprender, programar, linguagem, python, curso, gratis, estudar,
    praticar, trabalhar, mercado, programador, futuro, javascript.
    Depois disso, você deve mostrar, para cada palavra,
    quais são suas vogais.

*/

let palavras = ['aprender', 'programar', 'linguagem', 'python', 'curso', 'gratis', 'estudar', 'praticar', 'trabalhar', 'mercado', 'programador', 'futuro', 'javascript']

for(let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i].split("")
    
    let remover = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','y','w','z']
    
    let vogaisPalavra = palavra.filter(elemento => !remover.includes(elemento))  //Remover itens do array que estão contidos em outro array.
    
    console.log(`Na palavra ${palavras[i].toUpperCase()} temos ${vogaisPalavra}`)
}