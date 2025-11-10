// 🔹 Operadores relacionais comparam valores e retornam true ou false.

// Igualdade (==) compara valores, mas NÃO o tipo.
console.log('01)', '1' == 1); // true → o JS converte o tipo (string '1' → número 1)

// Igualdade estrita (===) compara valor e tipo.
console.log('02)', '1' === 1); // false → tipos diferentes (string vs número)

// Diferente (!=) compara valores, sem considerar o tipo.
console.log('03)', '3' != 3); // false → '3' é igual a 3 em valor

// Diferente estrito (!==) compara valor e tipo.
console.log('04)', '3' !== 3); // true → tipos diferentes

// Comparações numéricas
console.log('05)', 3 < 2);  // false
console.log('06)', 3 > 2);  // true
console.log('07)', 3 <= 2); // false
console.log('08)', 3 >= 2); // true

// Comparando datas
const d1 = new Date(0); // 0 = 1º de janeiro de 1970
const d2 = new Date(0);

// Aqui, as variáveis armazenam objetos diferentes (endereços de memória distintos)
console.log('09)', d1 === d2); // false
console.log('10)', d1 == d2);  // false

// Mas ao comparar o valor retornado por getTime() (que é o timestamp), são iguais
console.log('11)', d1.getTime() === d2.getTime()); // true

// Comparações entre undefined e null
console.log('12)', undefined == null);  // true → o JS considera iguais em valor
console.log('13)', undefined === null); // false → tipos diferentes


