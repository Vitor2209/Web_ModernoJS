// Array contendo várias notas numéricas
const notas = [6.7, 7.4, 9.8, 8.1, 5.5, 3.0, 2.3, 10.0];

// O for...in percorre os ÍNDICES do array (0, 1, 2, 3, ...)
// NÃO percorre os valores diretamente — por isso usamos notas[i]
for (let i in notas) {
    console.log(`Nota = ${notas[i]}`);
}

// Objeto representando uma pessoa
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
};

// O for...in percorre as CHAVES do objeto (nome, sobrenome, idade, peso)
// Acessamos o valor usando pessoa[atributo]
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

// Apenas imprime a palavra "atributo" (string literal)
console.log('atributo');
