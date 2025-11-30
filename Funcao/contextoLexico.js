const valor = 'Global';

function minhaFuncao() {
    console.log(valor); // Acessa a variável "valor" do escopo léxico
}

function exec() {
    const valor = 'Local';
    minhaFuncao(); // Chama a função que acessa "valor"
}

exec(); // Imprime: "Global"

// ------------------------------------------------------

// Função de soma (usada como valor padrão)

const soma = function (a, b) {
    return a + b;
};

// ------------------------------------------------------

// ------------------------------------------------------

// Função que recebe outra função como parâmetro (callback)
// "operacao" tem valor padrão = soma
// ------------------------------------------------------

const imprimirResultado = function (a, b, operacao = soma) {
    // Executa a função passada como parâmetro
    console.log(operacao(a, b));
};

// Usando operação padrão (soma)
imprimirResultado(3, 4); 
// Resultado: 7

// Passando manualmente outra função (subtração)
imprimirResultado(3, 4, function (x, y) {
    return x - y;
});
// Resultado: -1
// Callback usando arrow function (multiplicação)
imprimirResultado(3, 4, (x, y) => x * y);
// Resultado: 12
// Arrow function com bloco explícito (divisão)
imprimirResultado(3, 4, (x, y) => {
    return x / y;
});
// Resultado: 0.75  
// ------------------------------------------------------
// Definindo métodos dentro de objetos
// ------------------------------------------------------   

const pessoa = {
    // Forma tradicional de declarar método
    falar: function () {
        console.log('Opa');
    }
};  

pessoa.falar();  // Chama o método -> imprime "Opa"

// Sintaxe mais moderna e curta para declarar métodos
const pessoa2 = {
    falar() {
        console.log('Epa');
    }   
};



