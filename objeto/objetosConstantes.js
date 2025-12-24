const pessoa = { nome: "João" };
pessoa.nome = "Pedro"; // Isso é permitido
console.log(pessoa.nome); // Saída: Pedro

// pessoa = { nome: "Maria" }; // Isso causaria um erro

Object.freeze(pessoa); // Congela o objeto para evitar modificações

pessoa.nome = "Maria"; // Isso não terá efeito
pessoa.end = "Rua A"; // Isso não terá efeito
delete pessoa.nome; // Isso não terá efeito

console.log(pessoa.nome); // Saída: Pedro
console.log(pessoa); // Saída: { nome: "Pedro" }

const pessoaConstante = Object.freeze({ nome: "Joao" });
pessoaConstante.nome = "Maria"; // Isso não terá efeito
console.log(pessoaConstante.nome); // Saída: Joao