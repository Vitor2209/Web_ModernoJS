// 🔹 Armazenando uma função em uma variável
// Em JavaScript, funções são "cidadãs de primeira classe" (first-class citizens).
// Isso significa que podemos armazenar uma função dentro de uma variável, passar como parâmetro, etc.

const imprimirSoma = function (a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);
// 👉 saída: 5
// Aqui, a função foi atribuída à variável 'imprimirSoma' e depois chamada normalmente.

// -------------------------------------------------------------

// 🔹 Armazenando uma função arrow em uma variável
// Arrow functions (=>) são uma forma mais curta e moderna de escrever funções.
// Elas sempre são anônimas, então precisam ser armazenadas em uma variável ou constante.

const soma = (a, b) => {
    return a + b;
};

console.log(soma(2, 3));
// 👉 saída: 5

// -------------------------------------------------------------

// 🔹 Retorno implícito
// Quando o corpo da função é de uma única linha,
// podemos omitir as chaves {} e o 'return' — o retorno é feito automaticamente.

const subtracao = (a, b) => a - b; // Função de linha única (arrow function)
console.log(subtracao(2, 3));
// 👉 saída: -1

// -------------------------------------------------------------

// 🔹 Arrow function com apenas 1 parâmetro
// Quando há apenas um parâmetro, também podemos tirar os parênteses.

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!!');
// 👉 saída: Legal!!!!
