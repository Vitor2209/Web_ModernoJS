// Função que retorna um número inteiro aleatório entre min e max
function getInteirorAleatorioEntre(min, max) {
    // Gera um número aleatório dentro do intervalo
    const valor = Math.random() * (max - min) + min;
    
    // Retorna o valor arredondado para baixo (inteiro)
    return Math.floor(valor);
}

// Variável para armazenar a opção sorteada
let opcao = 0;

// Estrutura DO...WHILE: executa pelo menos uma vez antes de testar a condição
do {
    // Chama a função e sorteia um número entre -1 e 10
    opcao = getInteirorAleatorioEntre(-1, 10);

    // Mostra a opção sorteada no console
    console.log(`Opção escolhida foi ${opcao}.`);

} while (opcao != -1);  // Repete enquanto o número sorteado for diferente de -1

// Quando sair do loop, exibe a mensagem final
console.log('Até a próxima!');
