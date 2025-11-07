// O operador typeof retorna o tipo de um valor ou entidade em JavaScript.
console.log(typeof Object); 
// 👉 Resultado: function
// Mesmo Object sendo usado como “objeto base” no JavaScript,
// internamente ele é definido como uma FUNÇÃO construtora.
// Em JS, funções podem criar objetos — e é isso que Object faz.

// ------------------------------------------------------------

// Criando uma classe (que parece algo separado, mas…)
class Produto {};
console.log(typeof Produto); 
// 👉 Resultado: function
// Em JavaScript, classes são apenas "açúcar sintático" (syntactic sugar)
// para funções construtoras. Ou seja, por trás dos panos, uma classe é uma função!

/*
  Explicando melhor:
  A declaração acima:
  
  class Produto {}

  é equivalente a algo como:

  function Produto() {}
  
  Ambas servem para criar novos objetos, usando:
  const p1 = new Produto();
*/

function Carro() {}
const carro1 = new Carro();
console.log(typeof carro1); // object


/* 
📚 LINKS ÚTEIS – DOCUMENTAÇÃO JAVASCRIPT (MDN)

Esses são os principais links da documentação oficial do JavaScript (MDN).
Use eles como referência conforme for aprendendo cada tema no curso Web Moderna.

------------------------------------------------------------
🔹 VARIÁVEIS E CONSTANTES
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var

------------------------------------------------------------
🔹 TIPOS PRIMITIVOS
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures

------------------------------------------------------------
🔹 NÚMEROS E MATH
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

------------------------------------------------------------
🔹 STRINGS
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

------------------------------------------------------------
🔹 BOOLEANOS
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean

------------------------------------------------------------
🔹 ARRAYS
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

------------------------------------------------------------
🔹 OBJETOS
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object

------------------------------------------------------------
🔹 FUNÇÕES
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions

------------------------------------------------------------
🔹 CLASSES
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes

------------------------------------------------------------
🔹 OPERADORES
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators

------------------------------------------------------------
🔹 TEMPLATE STRINGS
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals

------------------------------------------------------------
💡 DICA:
Depois de cada aula, pesquise o tema no MDN, leia só o começo e os exemplos.
Isso vai te acostumar com a documentação sem te confundir.
*/
