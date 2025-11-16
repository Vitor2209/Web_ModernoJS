//Diferenças na estrutura While e Do/While


//Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim: 

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
 
let opcao //somente iniciada a variável, sem valor inicial! 
 
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)
 
console.log('Até a próxima!')

// Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.
// No While, como a variável opcao já começa com valor undefined, a condição do While já é falsa, e o bloco de código não é executado nenhuma vez.
// Então, a diferença principal entre While e Do/While é que o Do/While sempre executa o bloco de código pelo menos uma vez, enquanto o While pode não executar nenhuma vez se a condição inicial for falsa.
// É isso aí! Até a próxima aula!

