// 🔹 typeof verifica o tipo de dado

console.log(typeof Object);       
// 👉 saída: 'function'
// Em JS, Object é uma função construtora

console.log(typeof new Object);   
// 👉 saída: 'object'
// Usando 'new', criamos um objeto a partir da função construtora Object

// -------------------------------------------------------------

const Cliente = function() {};
console.log(typeof Cliente);      
// 👉 saída: 'function'
// Cliente é uma função anônima atribuída a uma constante

console.log(typeof new Cliente);  
// 👉 saída: 'object'
// Criamos um objeto a partir da função Cliente usando 'new'

// -------------------------------------------------------------

class Produto {}; // ES2015 (ES6)
console.log(typeof Produto);      
// 👉 saída: 'function'
// Classes em JS são funções, sintaxe moderna para criar objetos

console.log(typeof new Produto()); 
// 👉 saída: 'object'
// Criamos um objeto a partir da classe Produto usando 'new'

