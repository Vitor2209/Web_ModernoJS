// Inicializa a variável contador com valor 1
let contador = 1;

// Estrutura WHILE: repete enquanto a condição for verdadeira
while (contador <= 10) {
    console.log(`Contador = ${contador}`); // Exibe o valor atual do contador
    contador++; // Incrementa o contador para evitar loop infinito
}

// Estrutura FOR: mais compacta, ideal para contagens
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`); // Exibe o valor de i a cada repetição
}

// Array contendo notas numéricas
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// FOR tradicional percorrendo o array com índice
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`); // Acessa cada elemento pelo índice
}

console.log('Fim!'); // Apenas indica o final do programa
