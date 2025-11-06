// Declaração de duas constantes numéricas
const peso1 = 1.0;
const peso2 = Number('2.0'); // Converte a string '2.0' em um número

// Exibe os valores das variáveis peso1 e peso2
console.log(peso1, peso2); // saída: 1 2

// Verifica se os valores são inteiros (sem casas decimais)
console.log(Number.isInteger(peso1)); // true → 1.0 é inteiro
console.log(Number.isInteger(peso2)); // true → 2.0 também é inteiro

// Declara notas (avaliações) com valores decimais
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

// Calcula o total (nota1 * peso1 + nota2 * peso2)
const total = avaliacao1 * peso1 + avaliacao2 * peso2;

// Calcula a média ponderada (dividindo o total pela soma dos pesos)
const media = total / (peso1 + peso2);

// Exibe a média com apenas 2 casas decimais
console.log(media.toFixed(2)); // saída: 7.87

// Exibe o número em formato binário (base 2)
console.log(media.toString(2)); // exemplo de saída: 111.110111... (número em binário)

// Mostra o tipo da variável 'media'
console.log(typeof media); // saída: 'number'

// Mostra o tipo de 'Number' (que é uma função construtora)
console.log(typeof Number); // saída: 'function'


