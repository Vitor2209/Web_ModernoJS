// Cria uma variável chamada "isAtivo" e atribui o valor falso (false)
let isAtivo = false;

// Mostra o valor atual de isAtivo no console
console.log(isAtivo); // saída: false

// Agora a variável passa a valer verdadeiro (true)
isAtivo = true;

// Mostra novamente o valor de isAtivo
console.log(isAtivo); // saída: true

// Agora isAtivo recebe o número 1
// (em JavaScript, o número 1 é considerado "truthy" — ou seja, verdadeiro)
isAtivo = 1;

// A negação lógica é feita com o operador '!'
// Um '!' inverte o valor lógico: true vira false, false vira true
// Dois '!!' convertem qualquer valor para o seu equivalente booleano real

console.log(!!isAtivo); // saída: true  → porque 1 é considerado verdadeiro
console.log(!isAtivo);  // saída: false → a negação de verdadeiro é falso

console.log(!!0);        // false → 0 é considerado "falso"
console.log(!!1);        // true  → 1 é considerado "verdadeiro"
console.log(!!"texto");  // true  → strings não vazias são "truthy"
console.log(!!"");       // false → string vazia é "falsy"
console.log(!!null);     // false
console.log(!!undefined);// false
console.log(!!NaN);      // false
console.log(!!{});       // true  → objetos são "truthy"
console.log(!![]);       // true  → arrays também
