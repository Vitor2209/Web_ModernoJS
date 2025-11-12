// Função que exibe uma mensagem apenas se a nota for boa (maior ou igual a 7)
function SoBoaNoticia(nota) {
    // O bloco 'if' verifica se a condição entre parênteses é verdadeira
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

// Chamando a função com uma nota que satisfaz a condição (>= 7)
SoBoaNoticia(8.1); // saída: Aprovado com 8.1



// Outra função para demonstrar o comportamento do 'if' com diferentes valores
function seForVerdadeEuFalo(valor) {
    // Em JavaScript, qualquer valor pode ser avaliado como verdadeiro ou falso (truthy ou falsy)
    // Se o valor for "truthy" (verdadeiro), o código dentro do 'if' será executado
    if (valor) {
        console.log('É verdade..... ' + valor);
    }
}

// Testando a função com diferentes tipos de valores
// Todos os valores abaixo são considerados "falsy" (falsos) em JavaScript
seForVerdadeEuFalo();         // undefined → falso
seForVerdadeEuFalo(null);     // falso
seForVerdadeEuFalo(undefined);// falso
seForVerdadeEuFalo(NaN);      // falso
seForVerdadeEuFalo('');       // string vazia → falso
seForVerdadeEuFalo(0);        // número zero → falso

// E os próximos são "truthy" (verdadeiros), então a mensagem será exibida
seForVerdadeEuFalo(-1);       // verdadeiro (número diferente de zero)
seForVerdadeEuFalo(' ');      // string com espaço → verdadeiro
seForVerdadeEuFalo('?');      // string não vazia → verdadeiro
seForVerdadeEuFalo([]);       // array vazio → verdadeiro
seForVerdadeEuFalo([1, 2]);   // array com valores → verdadeiro
seForVerdadeEuFalo({});       // objeto vazio → verdadeiro
