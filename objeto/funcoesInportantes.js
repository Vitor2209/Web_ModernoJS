const pesoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pesoa)) // Retorna um array com as chaves do objeto
console.log(Object.values(pesoa)) // Retorna um array com os valores do objeto
console.log(Object.entries(pesoa)) // Retorna um array com arrays de pares [chave, valor]

Object.entries(pesoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

console.log(Object.defineProperty(pesoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}))

pesoa.dataNascimento = '01/01/2017' // Não vai alterar pois writable está como false
console.log(pesoa.dataNascimento)
console.log(Object.keys(pesoa)) 
// dataNascimento aparece pois enumerable está como true

// Object.assign (ECMAScript 2015)  
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Atribui os valores dos objetos o1 e o2 ao objeto dest
console.log(obj) // Saída: { a: 4, b: 2, c: 3 }
console.log(dest) // dest também é alterado: { a: 4, b: 2, c: 3 }
console.log(o1) // Permanece inalterado: { b: 2 }
console.log(o2) // Permanece inalterado: { c: 3, a: 4 }
console.log(Object.freeze({ nome: 'Ana' })) // Congela o objeto, não permitindo alterações
console.log(obj5.funcao1()) // Saída: Função 1
console.log(obj5.funcao2()) // Saída: Função 2  

console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] } 
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }      
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }      
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }      
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }      
console.log(obj5) // Saída: { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
