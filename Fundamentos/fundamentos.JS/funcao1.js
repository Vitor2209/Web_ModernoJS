// 🔹 Função sem retorno
// Essa função apenas executa uma ação (imprimir algo no console),
// mas NÃO devolve nenhum valor para quem a chamou.
function imprimirSoma(a, b) {
    console.log(a + b);
};

// Chamadas da função:
imprimirSoma(2, 0); 
// 👉 saída: 2 + 0 = 2

imprimirSoma(2);
// 👉 saída: NaN (Not a Number)
// Porque 'b' ficou undefined (não foi passado) e JS tenta somar 2 + undefined.

imprimirSoma(2, 10, 4, 5, 6, 7, 8);
// 👉 saída: 12
// O JS ignora os parâmetros extras — usa apenas os dois primeiros (a e b).

imprimirSoma();
// 👉 saída: NaN
// Nenhum valor foi passado, então a = undefined e b = undefined.

// -------------------------------------------------------------

// 🔹 Função com retorno
// Essa função retorna (devolve) um valor que pode ser usado em outro lugar.
function soma(a, b = 0) {
    // Aqui, o parâmetro 'b' tem valor padrão = 0.
    // Se 'b' não for informado, ele usará 0 por padrão.
    return a + b;
};

// Testando a função:
console.log(soma(2, 3));
// 👉 saída: 5

console.log(soma(2));
// 👉 saída: 2 + 0 = 2 (usa o valor padrão do 'b')

console.log(soma());
// 👉 saída: NaN (a = undefined e b = 0 → undefined + 0)

