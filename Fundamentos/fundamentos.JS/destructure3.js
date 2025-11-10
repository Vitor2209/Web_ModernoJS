// Destructuring em PARÂMETROS de FUNÇÃO
// Aqui, estamos desestruturando um objeto diretamente na declaração do parâmetro.
// A função espera receber um OBJETO com as propriedades 'min' e 'max'.

function rand({ min = 0, max = 1000 }) {
    // Math.random() gera um número aleatório entre 0 e 1 (exclusivo)
    // Multiplicamos pela diferença entre 'max' e 'min' para ajustar o intervalo,
    // e somamos 'min' para deslocar o intervalo para o valor mínimo desejado.
    const valor = Math.random() * (max - min) + min

    // Math.floor() arredonda o valor para baixo, retornando um número inteiro.
    return Math.floor(valor)
}

// Criamos um objeto com as propriedades 'max' e 'min'
const obj = { max: 50, min: 40 }
console.log(rand(obj))
// Gera um número inteiro entre 40 e 50

console.log(rand({ min: 955 }))
// Aqui passamos só 'min'. Como 'max' não foi passado, assume o valor padrão 1000.
// Gera um número inteiro entre 955 e 1000.

console.log(rand({}))
// Passando um objeto vazio — ambos os valores usam os padrões: min = 0, max = 1000.
// Gera um número entre 0 e 1000.

console.log(rand())
// ❗ Erro! — Nesse caso, não passamos NADA.
// A função tenta fazer o destructuring de 'undefined', o que não é possível.
// Para evitar isso, seria preciso dar um valor padrão ao parâmetro:
// function rand({ min = 0, max = 1000 } = {})
