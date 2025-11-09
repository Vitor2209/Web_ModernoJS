// Novo recurso ES2015: Destructuring (ou Desestruturação)
// Permite "extrair" valores de objetos e arrays de forma mais simples e clara.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua 2',
        numero: 10,
    }
};

// Aqui usamos o destructuring para "tirar" diretamente os atributos nome e idade do objeto pessoa.
// Isso é equivalente a:
// const nome = pessoa.nome;
// const idade = pessoa.idade;
const { nome, idade } = pessoa;
console.log(nome, idade); // saída: Ana 5

// Também podemos renomear as variáveis na desestruturação.
// Aqui, "nome" vira "n" e "idade" vira "i".
const { nome: n, idade: i } = pessoa;
console.log(n, i); // saída: Ana 5

// É possível atribuir valores padrão e extrair propriedades que não existem.
// "sobrenome" não existe → undefined
// "bemHumorado" não existe, mas definimos um valor padrão "true".
const { sobrenome, bemHumorado = true } = pessoa;
console.log(bemHumorado, sobrenome); // saída: true undefined

// Também dá pra desestruturar objetos "aninhados" (dentro de outros).
// Aqui estamos pegando logradouro e numero de "endereco",
// e tentando pegar "cep", que não existe → undefined.
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep); // saída: Rua 2 10 undefined
