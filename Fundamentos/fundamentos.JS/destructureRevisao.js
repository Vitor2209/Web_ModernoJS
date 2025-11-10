// 🔹 Destructuring em JavaScript — Revisão Completa
// Parte 1 — Objetos

// Sintaxe: { nomePropriedade } = objeto

// Permite extrair propriedades de objetos diretamente em variáveis.

// Pode renomear variáveis: { nome: n } = objeto

// Valores padrão: { bemHumorado = true } = objeto

// Objetos aninhados: { endereco: { logradouro, numero } } = objeto

// Exemplo:

// const pessoa = { nome: 'Ana', idade: 5 };
// const { nome, idade } = pessoa; // nome='Ana', idade=5

// Parte 2 — Arrays

// Sintaxe: [valor1, valor2] = array

// Extrai elementos pela posição (índice), não pelo nome.

// Pular elementos com vírgulas: [n1, , n3]

// Valores padrão: [n1, n2 = 0]

// Arrays aninhados: const [, [, nota]] = [[,8,8], [9,6,8]]

// Exemplo:

// const numeros = [10, 7, 9];
// const [a, , c] = numeros; // a=10, c=9

// Parte 3 — Parâmetros de função (objetos)

// Permite extrair propriedades de objetos diretamente nos parâmetros da função.

// Pode definir valores padrão.

// Exemplo:

function rand({ min = 0, max = 1000 }) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(rand({ min: 955 })); // valor entre 955 e 1000


// Importante: se a função for chamada sem argumento, é preciso definir valor padrão {} para evitar erro.

// Parte 4 — Parâmetros de função (arrays)

// Extrai elementos de arrays passados como argumentos.

// Pode definir valores padrão e até trocar posições com destructuring.

// Exemplo:

function rand([min = 0, max = 1000] = []) {
    if (min > max) [min, max] = [max, min];
    return Math.floor(Math.random() * (max - min) + min);
}
 console.log(rand([50, 40])); // entre 40 e 50


// Também precisa de valor padrão ([]) se a função puder ser chamada sem array.

// ✅ Resumo final

// Objetos → desestruturação por nome da propriedade

// Arrays → desestruturação por posição (índice)

// Funções → destructuring permite receber objetos ou arrays como argumento de forma clara

// Valores padrão → evita erros quando dados não são fornecidos

// Aninhamento → permite acessar objetos/arrays dentro de objetos/arrays