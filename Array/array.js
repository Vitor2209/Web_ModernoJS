console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia') // adiciona no final do array
console.log(aprovados.length)

aprovados[9] = 'Rafael' // cria posições vazias
console.log(aprovados.length)
console.log(aprovados)

console.log(aprovados[8] === undefined) // true
console.log(aprovados[8] === null) // false
aprovados.sort() // ordena o array

console.log(aprovados)
delete aprovados[1] // deleta o elemento, mas mantém a posição vazia
console.log(aprovados[1])

console.log(aprovados.length)
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // a partir do índice 1, remove 1 elemento
console.log(aprovados)

aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // a partir do índice 1, remove 0 elementos e adiciona os novos
console.log(aprovados)
aprovados.splice(2, 1, 'Elemento3') // a partir do índice 2, remove 1 elemento e adiciona o novo

console.log(aprovados)

 