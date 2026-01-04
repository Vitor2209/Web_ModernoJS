const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 6.8, bolsista: false },
    { nome: 'Ana', nota: 8.5, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// Outra forma de escrever a função de callback
const resultado2 = alunos.map(a => a.nota).reduce((acumulador, atual) => acumulador + atual)
console.log(resultado2)

// Valor inicial
const resultado3 = alunos.map(a => a.nota).reduce((acumulador, atual) => acumulador + atual, 10)
console.log(resultado3)

// Somar as notas dos alunos
const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0)
console.log(somaNotas)

// Encontrar o aluno com a maior nota
const maiorNota = alunos.reduce((melhor, aluno) => {
    return (aluno.nota > melhor.nota) ? aluno : melhor
})
console.log(maiorNota)

// Contar quantos alunos são bolsistas
const totalBolsistas = alunos.reduce((total, aluno) => {
    return aluno.bolsista ? total + 1 : total
}, 0)
console.log(totalBolsistas)

// Criar um objeto que agrupe alunos por faixa de nota
const agrupamentoPorFaixa = alunos.reduce((agrupamento, aluno) => {
    const faixa = aluno.nota >= 7 ? 'Aprovado' : 'Reprovado'    
    if (!agrupamento[faixa]) {
        agrupamento[faixa] = []
    }   
    agrupamento[faixa].push(aluno)
    return agrupamento
}, {})
console.log(agrupamentoPorFaixa)

// Calcular a média das notas dos alunos
const mediaNotas = alunos.reduce((soma, aluno, _, { length }) => soma + aluno.nota / length, 0)
console.log(mediaNotas) 

// Criar uma string com os nomes dos alunos
const nomesAlunos = alunos.reduce((nomes, aluno, index, array) => {
    return nomes + aluno.nome + (index < array.length - 1 ? ', ' : '')
}, '')
console.log(nomesAlunos)

// Verificar se todos os alunos são bolsistas
const todosBolsistas = alunos.reduce((todos, aluno) => todos && aluno.bolsista, true)
console.log(todosBolsistas)

// Verificar se algum aluno é bolsista
const algumBolsista = alunos.reduce((algum, aluno) => algum || aluno.bolsista, false)
console.log(algumBolsista)

// Criar um array com as notas dos alunos arredondadas
const notasArredondadas = alunos.reduce((notas, aluno) => {
    notas.push(Math.round(aluno.nota))
    return notas
}, [])

