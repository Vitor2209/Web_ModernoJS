// Função que recebe uma nota e imprime se o aluno foi aprovado ou reprovado
const imprimirResultado = function (nota) {

    // Aqui comparamos "nota" com 7.
    // IMPORTANTE: Em JavaScript, se "nota" for uma string, a comparação ainda é permitida,
    // porém pode gerar resultados imprevisíveis. Ex.: 'Epa!' >= 7 → false.
    if (nota >= 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

// Testes da função
imprimirResultado(10);      // Aprovado → correto
imprimirResultado(4);       // Reprovado → correto

// Aqui ocorre um problema: 'Epa!' não é número.
// O JavaScript tenta comparar automaticamente, resultando em "false",
// e por isso cai no "Reprovado!", mesmo sendo um valor inválido.
imprimirResultado('Epa!');  // Comportamento inesperado!
