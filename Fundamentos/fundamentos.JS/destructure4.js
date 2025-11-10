// Destructuring de ARRAY em PARÂMETROS de FUNÇÃO
// Também podemos desestruturar arrays diretamente na função.
// Podemos definir valores padrão e até trocar os valores se necessário.

function rand([min = 0, max = 1000]) {
    // Se o valor de min for maior que max, trocamos eles usando destructuring
    if (min > max) [min, max] = [max, min];

    // Gerando número aleatório entre min e max
    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor); // Arredondando para baixo
}

// -------------------------------------------------------------

console.log(rand([50, 40]));
// min=50, max=40 → troca realizada → gera número entre 40 e 50

console.log(rand([, 10]));
// min não foi passado → assume padrão 0, max = 10
// Gera número entre 0 e 10

console.log(rand([]));
// Nenhum valor passado → min = 0, max = 1000
// Gera número entre 0 e 1000

console.log(rand());
// ❌ Erro! — Não foi passado array algum
// Para evitar isso, dar valor padrão ao parâmetro:
// function rand([min = 0, max = 1000] = [])

