// Função que retorna um número inteiro aleatório entre min e max
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // arredonda para baixo
}

let opcao = 0 // começa com qualquer número diferente de -1

// Enquanto a opção NÃO for -1, continua executando
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')
