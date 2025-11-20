// Função em JS é First-Class Object (Cidadão de Primeira Classe)
// Ou seja: pode ser tratada como dado (armazenar em variável, passar como parâmetro etc).

// 1) Criar função de forma literal
function fun1() { }

// 2) Armazenar função em variável
const fun2 = function () { }

// 3) Armazenar função dentro de um array
const array = [
    function (a, b) { return a + b }, 
    fun1, 
    fun2
]

// Chamando a função que está no índice 0 do array
console.log(array[0](2, 3))  // → 5

// 4) Armazenar função em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa!'
}
console.log(obj.falar()) // → Opa!

// 5) Passar função como parâmetro
function run(fun) {
    fun()  // executa a função recebida
}

run(function () {
    console.log('Executando...')
})

// 6) Uma função pode retornar outra função (Higher-Order Function)
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

// Chamando diretamente
soma(2, 3)(4) // → 9

// Salvando o retorno da função soma
const cincoMais = soma(2, 3)

// Chamando depois
cincoMais(4)  // → 9