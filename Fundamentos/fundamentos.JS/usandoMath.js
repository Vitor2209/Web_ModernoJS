// Cria uma constante chamada "raio" e dá o valor 5.6
const raio = 5.6;

// Aqui calculamos a área de um círculo usando a fórmula: área = π * r²
// Math.PI → é o número π (pi = 3.1415926535...)
// Math.pow(raio, 2) → calcula o raio elevado à potência 2 (ou seja, raio²)
const area = Math.PI * Math.pow(raio, 2);

// Mostra o resultado da área no console
console.log(area);

// Mostra o tipo de dado que é "Math"
console.log(typeof Math);

//--------------------------------------

// Gera um número aleatório entre 0 e 1 (ex: 0.374, 0.952, etc)
console.log(Math.random());

// Simulando um dado de 6 lados (números de 1 a 6)
const numeroAleatorio = Math.random() * 6; // vai gerar entre 0 e 6 (ex: 4.37)
const dado = Math.floor(numeroAleatorio) + 1; // arredonda pra baixo e soma 1

console.log(`🎲 Você tirou: ${dado}`);

//--------------------------------------

const nomes = ['Ana', 'Vitor', 'Pedro', 'Maria', 'Lucas'];

const indice = Math.floor(Math.random() * nomes.length);
const sorteado = nomes[indice];

console.log(`🎉 O sorteado foi: ${sorteado}!`);
