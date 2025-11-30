// Closuer é uma função dentro de outra função que tem acesso ao escopo da função pai, mesmo após a função pai ter sido executada.
//Esse conceito é muito utilizado para criar variáveis e métodos privados em JavaScript.

// Contexto lexico em JavaScript é o escopo em que uma função foi declarada, e não onde ela é executada. Isso significa que uma função sempre terá acesso às variáveis do seu contexto léxico, mesmo quando chamada fora desse contexto.

const x = 'Global';

function fora() {
    const x = 'Local';  
    function dentro() {
        return x; // Acessa a variável "x" do escopo léxico da função "fora"
    }   
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao()); // Imprime: "Local"

// ------------------------------------------------------   

