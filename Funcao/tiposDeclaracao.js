// function declaration
// --------------------
// Este é o formato clássico de função em JavaScript.
// Pode ser chamada antes ou depois da sua declaração
// por causa do hoisting.

function soma(x, y) {
    return x + y;
}   


// function expression
// --------------------
// Aqui a função é atribuída a uma variável.
// Não sofre hoisting da mesma forma, então só pode
// ser chamada depois de definida.

const sub = function (x, y) {
    return x - y;
};


// named function expression
// -------------------------
// É uma function expression, mas com um nome interno.
// Esse nome só existe *dentro* do corpo da função.
// Fora dela, o identificador não está disponível.

const mult = function multiplicacao(x, y) {
    return x * y;
};  


// Chamadas das funções
console.log(soma(3, 4));        // 7  -> funciona normalmente

console.log(sub(3, 4));         // -1 -> função atribuída à variável sub

console.log(mult(3, 4));        // 12 -> usando a variável mult

console.log(multiplicacao(3, 4)); 
// ❌ Erro: multiplicacao is not defined
// O nome "multiplicacao" só existe dentro da própria função,
// não no escopo externo.

// ----------------------------------------------
// Resumo:
// - Declaração de função: sofre hoisting, pode chamar antes.
// - Função anônima em variável: só pode chamar depois.
// - Named function expression: nome só válido dentro dela.
// ----------------------------------------------

