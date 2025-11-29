// Array com várias notas
const notas = [7.7, 6.5, 8.0, 9.3, 5.0, 7.1, 10.0];


// -----------------------------
// SEM CALLBACK (maneira tradicional)
// -----------------------------

const notasBaixas1 = []; // array que vai guardar as notas menores que 7

for (let i in notas) {  
    // 'i' representa o índice de cada elemento no array
    if (notas[i] < 7) {
        // Se a nota for menor que 7, adiciona no array
        notasBaixas1.push(notas[i]);
    }   
}

console.log(notasBaixas1);
// Resultado: [6.5, 5.0]


// -----------------------------
// COM CALLBACK usando .filter()
// -----------------------------

// O método filter percorre o array e retorna UM NOVO ARRAY
// contendo apenas os elementos que atendem à condição.

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7; // condição — devolve true ou false
});

console.log(notasBaixas2);
// Resultado: [6.5, 5.0]


// -----------------------------
// ARROW FUNCTION dentro do filter
// -----------------------------

const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);
// Forma mais curta e moderna de escrever a mesma lógica


// -----------------------------
// CALLBACK definido separadamente
// -----------------------------

// A função de teste fica armazenada em uma variável
const notasMenorQue7 = nota => nota < 7;

// E aqui ela é passada para o filter
const notasBaixas4 = notas.filter(notasMenorQue7);

console.log(notasBaixas4);
// Mesmo resultado novamente


