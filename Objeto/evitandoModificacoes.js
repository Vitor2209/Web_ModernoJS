// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);


// Object.freeze = selado + valores constantes
const carro = { modelo: 'Gol', ano: 2019 };
Object.freeze(carro);
console.log('Congelado:', Object.isFrozen(carro));
carro.modelo = 'Vectra';
carro.ano = 2020;
delete carro.ano;
console.log(carro);

// No exemplo acima, não é possível adicionar, remover ou modificar propriedades do objeto carro.

