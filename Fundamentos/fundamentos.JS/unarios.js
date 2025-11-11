// Declarando duas variáveis numéricas
let num1 = 1;
let num2 = 2;

// O operador unário '++' incrementa (soma 1) ao valor da variável
num1++  // mesmo que: num1 = num1 + 1
console.log(num1); // saída: 2

// O operador '--' decrementa (subtrai 1) do valor da variável
--num1  // mesmo que: num1 = num1 - 1
console.log(num1); // saída: 1

// Agora temos uma expressão com operadores unários dentro de uma comparação
// ++num1 → incrementa ANTES de comparar (pré-incremento)
// num2-- → compara primeiro e depois subtrai (pós-decremento)
console.log(++num1 === num2--);

// Explicando o que acontece:
// 1️⃣ ++num1 → num1 passa de 1 → 2
// 2️⃣ num2 ainda é 2 durante a comparação
// 3️⃣ 2 === 2 → true
// 4️⃣ Após a comparação, num2 é decrementado → num2 passa a valer 1

// Agora comparamos novamente os valores finais:
console.log(num1 === num2); // 2 === 1 → false
