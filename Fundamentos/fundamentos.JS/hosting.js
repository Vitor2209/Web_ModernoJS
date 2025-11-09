console.log('a =', a);
// 👉 saída: a = undefined
// ❌ Mesmo antes de declarar 'a', o JS “eleva” a declaração de var para o topo.
// Mas atenção: apenas a **declaração** é elevada, não a atribuição.
// Ou seja, é como se fosse:
// var a;
// console.log('a =', a); // undefined
// a = 2;

var a = 2;
console.log('a =', a);
// 👉 saída: a = 2
// Agora a variável já recebeu o valor 2

// -------------------------------------------------------------

let b = 2;
console.log(b);
// 👉 saída: 2
// Diferente de var, o let **não sofre hoisting da mesma forma**.
// Se você tentar acessar 'b' antes da linha de declaração, dará **ReferenceError**.
