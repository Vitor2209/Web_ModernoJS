function getPreco(imposto = 0, moeda = 'R$') {
    // "this" refere-se ao objeto que chamou a função
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco: getPreco // Atribuindo a função ao método do objeto
};

globalThis.preco = 20;
globalThis.desconto = 0.1;
console.log(getPreco()); // Usando "this" do objeto global

console.log(produto.getPreco()); // Usando "this" do objeto produto
globalThis.getPreco = getPreco;

// Usando call para chamar getPreco com "this" definido como produto
console.log(getPreco.call(produto));

// Usando apply para chamar getPreco com "this" definido como produto
console.log(getPreco.apply(produto));

// Usando call com argumentos adicionais
console.log(getPreco.call(produto, 0.2, '$'));

// Usando apply com argumentos adicionais (em array)
console.log(getPreco.apply(produto, [0.17, '€']));

// Resultado esperado em todas as chamadas com produto:
// R$ 4380.65

