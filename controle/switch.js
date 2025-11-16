// Função para imprimir resultado com base na nota usando SWITCH
const imprimirResultado = function (nota) {

    // Math.floor arredonda para baixo, pegando apenas a parte inteira da nota
    switch (Math.floor(nota)) {

        // Casos para notas 9 e 10
        case 10:
        case 9:
            console.log('Quadro de Honra!');
            break; // Interrompe o switch

        // Casos para notas 7 e 8
        case 8: 
        case 7:
            console.log('Aprovado!');
            break;

        // Notas 5 e 6
        case 6: 
        case 5:
            console.log('Recuperação!');
            break;

        // Notas de 0 a 4
        case 4: 
        case 3: 
        case 2: 
        case 1: 
        case 0:
            console.log('Reprovado!');
            break;

        // Qualquer outro valor que não se encaixe acima
        default:
            console.log('Nota inválida!');
    }
}

// Chamadas da função com diferentes notas
imprimirResultado(10); // Quadro de Honra!
imprimirResultado(8);  // Aprovado!
imprimirResultado(6);  // Recuperação!
imprimirResultado(3);  // Reprovado!
imprimirResultado(-1); // Nota inválida!
imprimirResultado(11); // Nota inválida!
