// A palavra-chave "var" é a forma antiga de declarar variáveis em JavaScript.
// Ela ainda funciona, mas deve ser evitada, pois tem escopo de função e pode gerar confusão.
var a = 3; // Cria a variável 'a' e atribui o valor 3

// A palavra-chave "let" é a forma moderna de declarar variáveis.
// Tem escopo de bloco (ou seja, só existe dentro das chaves { } onde foi criada).
let b = 4; // Cria a variável 'b' e atribui o valor 4

// O console.log exibe valores no console (terminal ou navegador)
console.log(a, b); // saída: 3 4

// A palavra-chave "const" é usada para declarar constantes.
// Uma constante não pode ter seu valor alterado depois de criada.
const c = 5; // Cria a constante 'c' com o valor 5

// Se tentarmos mudar o valor de 'c', o JavaScript mostrará um erro:
// c = 10; // ❌ TypeError: Assignment to constant variable.

// Resumo prático:
// var  → variável antiga (evite usar)
// let  → variável moderna (pode mudar o valor, tem escopo de bloco)
// const → constante (não muda, tem escopo de bloco)

// Exemplo adicional (diferença de escopo):

{
  var x = 10;  // 'var' tem escopo de função → acessível fora do bloco
  let y = 20;  // 'let' tem escopo de bloco → existe apenas dentro das chaves
  const z = 30; // 'const' também tem escopo de bloco
  console.log("Dentro do bloco:", x, y, z); // saída: 10 20 30
}

console.log("Fora do bloco:", x); // saída: 10
// console.log(y); // ❌ erro → y não é acessível aqui
// console.log(z); // ❌ erro → z não é acessível aqui
