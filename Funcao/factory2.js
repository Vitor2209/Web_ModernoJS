// Função factory (Factory Function)
// ---------------------------------
// Uma função que retorna um objeto.
// É usada para criar múltiplos "produtos" com a mesma estrutura.
// Vantagens: simples, clara e permite valores padrão.

function criarProduto(nome, preco) {
    return {
        nome: nome,   // nome do produto
        preco: preco, // preço do produto
        desconto: 0.1 // desconto fixo de 10%
    }
}   


// Criando produtos usando a função factory
const produto1 = criarProduto('Notebook', 2500);
const produto2 = criarProduto('Smartphone', 1500);

// Acessando propriedades dos objetos criados
console.log(produto1.nome);      // "Notebook"
console.log(produto1.preco);     // 2500
console.log(produto1.desconto);  // 0.1

console.log(produto2.nome);      // "Smartphone"
console.log(produto2.preco);     // 1500
console.log(produto2.desconto);  // 0.1


// Criando mais produtos
const produto3 = criarProduto('Tablet', 800);
console.log(produto3);           
// { nome: 'Tablet', preco: 800, desconto: 0.1 }

const produto4 = criarProduto('Monitor', 1200);
console.log(produto4);
// { nome: 'Monitor', preco: 1200, desconto: 0.1 }


// Usando template strings para exibir informações
console.log(
    `O produto ${produto1.nome} custa R$${produto1.preco} com desconto de ${produto1.desconto * 100}%`
);
console.log(
    `O produto ${produto2.nome} custa R$${produto2.preco} com desconto de ${produto2.desconto * 100}%`
);
console.log(
    `O produto ${produto3.nome} custa R$${produto3.preco} com desconto de ${produto3.desconto * 100}%`
);
console.log(
    `O produto ${produto4.nome} custa R$${produto4.preco} com desconto de ${produto4.desconto * 100}%`
);

// ------------------------------------------------------
