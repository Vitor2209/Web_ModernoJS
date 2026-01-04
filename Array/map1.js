const nums = [1, 2, 3, 4, 5]

// Map é usado para transformar os elementos de um array em um novo array
// Ele aplica uma função a cada elemento do array original e retorna um novo array com os resultados

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado) // [2, 4, 6, 8, 10]

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `£ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado) // [£ 33,00, £ 36,00, £ 39,00, £ 42,00, £ 45,00]
