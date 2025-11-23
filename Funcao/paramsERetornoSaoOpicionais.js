function area(largura, altura) {
    // Calcula a área multiplicando largura pela altura.
    // Atenção: se largura ou altura vierem como undefined,
    // o resultado será NaN.
    const area = largura * altura

    // Verifica se a área é maior que 20.
    // Caso seja, a função NÃO retorna nada; apenas mostra uma mensagem.
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        // Caso a área seja 20 ou menos,
        // retorna o valor calculado normalmente.
        return area
    }
}

// Aqui chamamos a função com largura = 2 e altura = 2.
// A área é 4, que é menor que 20 → retorna 4.
console.log(area(2, 2))

// Aqui chamamos apenas com largura = 2.
// altura será undefined → 2 * undefined = NaN → retorna NaN.
console.log(area(2))

// Aqui não enviamos nenhum parâmetro.
// largura = undefined, altura = undefined → NaN.
console.log(area())

// Aqui passamos vários parâmetros, mas JS só usa os 2 primeiros.
// Ou seja: largura = 2, altura = 3 → retorna 6.
console.log(area(2, 3, 17, 22, 44))

// Aqui largura = 5 e altura = 5 → área = 25.
// Como é maior que 20, a função só imprime no console
// e NÃO retorna nada → o log mostra "undefined" depois da mensagem.
console.log(area(5, 5))


