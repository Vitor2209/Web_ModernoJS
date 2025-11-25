let dobro = function (a) {
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2 // return implícito

console.log(dobro(Math.PI)) // 6.283185307179586

let ola = function () {
    return 'Olá'
}
ola = () => 'Olá' // sem parâmetros

ola = _ => 'Olá' // possui um parâmetro, mas ignorado   
console.log(ola()) // Olá

// Exemplo com mais de um parâmetro

let soma = function (a, b) {
    return a + b
}

soma = (a, b) => a + b
console.log(soma(2, 3)) // 5

// Exemplo com mais de uma linha no corpo da função

let saudacao = function (nome) {
    nome = nome.toUpperCase()
    return `Olá, ${nome}!`
}

saudacao = nome => {
    nome = nome.toUpperCase()
    return `Olá, ${nome}!`
}

console.log(saudacao('Ana')) // Olá, ANA!

// Arrow function com objeto literal

let pessoa = function () {
    return { nome: 'Ana', idade: 25 }
}

pessoa = () => ({ nome: 'Ana', idade: 25 }) // parênteses para retornar objeto

console.log(pessoa()) // { nome: 'Ana', idade: 25 }

// Arrow Function e this

function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa  // imprime 1, 2, 3...   
// O this dentro da arrow function aponta para o this da função Pessoa
// Porque arrow function herda o this do contexto onde foi criada
// Neste caso, o contexto é a função Pessoa
// Exemplo comparativo de this com função tradicional

function PessoaTradicional() {
    this.idade = 0 // atributo da função construtora

    setInterval(function () {
        // Aqui o this NÃO é o this da função PessoaTradicional
        // Em função tradicional, o this depende de quem chama
        // Como quem chama é o setInterval, o this aponta para global/window
        // global.idade é undefined → undefined++ = NaN
        this.idade++
        console.log(this.idade)
    }, 1000)
}