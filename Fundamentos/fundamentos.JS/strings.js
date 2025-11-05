// Declara uma constante chamada "escola" e guarda a string "vit0r"
const escola = "vit0r";

// Mostra o caractere que está no índice 4 → (v=0, i=1, t=2, 0=3, r=4)
console.log(escola.charAt(4)); // saída: r

// Tenta mostrar o caractere no índice 6, mas não existe → retorna string vazia
console.log(escola.charAt(6)); // saída: ""

// Mostra o código Unicode (ou ASCII) do caractere no índice 0 (letra 'v')
console.log(escola.charCodeAt(0)); // saída: 118

// Mostra o índice em que aparece o caractere '0' dentro da string
console.log(escola.indexOf('0')); // saída: 3

// Retorna a parte da string a partir do índice 1 até o fim
console.log(escola.substring(1)); // saída: "it0r"

// Retorna a parte da string do índice 0 até o 2 (o final 3 não entra)
console.log(escola.substring(0, 3)); // saída: "vit"

// Concatena strings (mesmo que usar +, mas mais formal)
console.log('Escola '.concat(escola).concat("!")); // saída: "Escola vit0r!"

// O replace() substitui o conteúdo, não o índice!
// Aqui ele procura o caractere '3', mas como não existe, nada muda.
console.log(escola.replace(3, 'v')); // saída: "vit0r"

// Exemplo certo: troca o caractere '0' por 'v'
// console.log(escola.replace('0', 'v')); // saída: "vitvr"

// Divide a string em um array, cortando onde tiver vírgula
console.log('Ana, Maria, Pedro'.split(',')); // saída: ["Ana", " Maria", " Pedro"]

