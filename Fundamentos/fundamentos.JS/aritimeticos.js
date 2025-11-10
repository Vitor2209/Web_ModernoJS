// 🔹 Destructuring de array para atribuir valores a variáveis
const [a, b, c, d] = [3, 5, 1, 15];
// a=3, b=5, c=1, d=15

// 🔹 Operações aritméticas básicas
const soma = a + b + c + d;         // soma de todos os valores → 3+5+1+15 = 24
const subtracao = b - d;            // subtração → 5-15 = -10
const multiplicacao = a * b;        // multiplicação → 3*5 = 15
const divisao = d / a;              // divisão → 15/3 = 5
const modulo = a % 2;               // resto da divisão de 3 por 2 → 1

// 🔹 Imprimindo os resultados
// -divisao mostra o valor negativo da divisão
console.log(soma, subtracao, multiplicacao, -divisao, modulo); 
// 👉 saída: 24 -10 15 -5 1
