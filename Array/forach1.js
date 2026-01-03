const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

const nomes = ['Ana', 'Bia', 'Carlos']
nomes.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
nomes.forEach(nome => console.log(nome))
const exibirNomes = nome => console.log(nome)
nomes.forEach(exibirNomes)

