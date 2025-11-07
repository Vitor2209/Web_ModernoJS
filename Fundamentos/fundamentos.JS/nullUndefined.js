// A variável foi declarada, mas ainda não recebeu nenhum valor.
let valor; // não inicializada
console.log(valor); 
// 👉 Resultado: undefined
// Isso significa que a variável existe, mas ainda não tem valor atribuído.

// Agora estamos atribuindo explicitamente o valor 'null'.
// Null representa "ausência de valor" — ou seja, algo propositalmente vazio.
valor = null; // ausência de valor
console.log(valor);
// 👉 Resultado: null

// console.log(valor.toString()); 
// 👉 Isso daria ERRO, pois não é possível acessar métodos em null ou undefined.

// -------------------------------------------------------------
// Agora vamos criar um objeto:
const produto = {};
console.log(produto.preco); 
// 👉 Resultado: undefined
// 'preco' não existe ainda dentro do objeto, por isso é 'undefined'.

console.log(produto);
// 👉 Resultado: {}
// O objeto está vazio, sem propriedades.

// -------------------------------------------------------------
// Agora adicionamos uma propriedade ao objeto.
produto.preco = 3.50;
console.log(produto);
// 👉 Resultado: { preco: 3.5 }

// -------------------------------------------------------------
// Aqui estamos atribuindo 'undefined' manualmente.
// Isso é uma prática **não recomendada** — o ideal é deixar o JS usar undefined sozinho.
produto.preco = undefined;
console.log(!!produto.preco);
// 👉 Resultado: false (porque undefined é considerado "falsy")

// delete produto.preco
// 👉 Se usássemos 'delete', removeríamos completamente a propriedade do objeto.

console.log(produto);
// 👉 Resultado: { preco: undefined }

// -------------------------------------------------------------
// Agora definimos 'null' para indicar que o produto está "sem preço" intencionalmente.
produto.preco = null;
console.log(!!produto.preco);
// 👉 Resultado: false (null também é "falsy")

console.log(produto);
// 👉 Resultado: { preco: null }

