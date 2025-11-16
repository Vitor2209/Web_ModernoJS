// Função que recebe uma nota e imprime um resultado baseado nela
const imprimirResultado = function (nota) {
    
    // A estrutura switch compara apenas valores exatos.
    // Math.floor(nota) garante que trabalharemos com um número inteiro.
    switch (Math.floor(nota)) {

        // Se a nota for 10 ou 9 → Quadro de Honra
        case 10:
        case 9:
            console.log('Quadro de Honra!');
            break;

        // Aqui havia um erro: "case8: case7:" (sem espaços e sem dois pontos)
        // Corrigido abaixo ↓
        case 8:
        case 7:
            console.log('Aprovado!');
            break;

        // Notas 6 ou 5 → Recuperação
        case 6:
        case 5:
            console.log('Recuperação!');
            break;

        // Notas de 4 a 0 → Reprovado
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado!');
            break;

        // Qualquer valor fora do esperado cai aqui
        default:
            console.log('Nota inválida!');
    }
};

// Chamadas para testar a função com várias notas
imprimirResultado(10);   // Quadro de Honra
imprimirResultado(8);    // Aprovado
imprimirResultado(6);    // Recuperação
imprimirResultado(3);    // Reprovado
imprimirResultado(-1);   // Nota inválida
imprimirResultado(11);   // Nota inválida
