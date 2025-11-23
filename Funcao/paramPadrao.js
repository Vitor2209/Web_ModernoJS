// ---------------------------------------------
// 1) PRIMEIRA TÉCNICA (antiga) PARA ATRIBUIR VALOR PADRÃO
// ---------------------------------------------
function soma1(a, b, c) {
    // Se o valor for "falsy" (undefined, null, 0, '', false), cai para 1
    // Isso causa um problema: se o usuário enviar 0, ele é ignorado!
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

// Testes
console.log(
    soma1(),             // Nenhum argumento → 1 + 1 + 1 = 3
    soma1(1, 2, 3),      // Argumentos normais → 6
    soma1(0, 0, 0)       // Problema: era pra ser 0, mas vira 3
)


// ---------------------------------------------
// 2) SEGUNDA TÉCNICA — CORRIGINDO OS PROBLEMAS DA PRIMEIRA
// ---------------------------------------------
function soma2(a, b, c) {
    // Se "a" NÃO for undefined, usa o valor enviado.
    // Senão, usa 1.
    a = a !== undefined ? a : 1

    // Verifica se existe o índice 1 no objeto "arguments"
    // (significa que "b" foi passado na chamada da função)
    b = 1 in arguments ? b : 1

    // Se "c" NÃO for um número (NaN), vira 1. Senão, usa o valor mesmo.
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(
    soma2(),             // → 3
    soma2(1, 2, 3),      // → 6
    soma2(0, 0, 0)       // Aqui funciona corretamente → 0
)


// ---------------------------------------------
// 3) TERCEIRA TÉCNICA (MODERNA – PADRÃO ES6)
// Melhor e mais limpa, usada no mercado HOJE
// ---------------------------------------------
function soma3(a = 1, b = 1, c = 1) {
    // Agora os valores padrão são nativos da linguagem
    return a + b + c
}

console.log(
    soma3(),             // → 3
    soma3(1, 2, 3),      // → 6
    soma3(0, 0, 0)       // Funciona perfeitamente → 0
)
