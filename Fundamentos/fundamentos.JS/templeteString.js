// Cria uma constante chamada "nome" e guarda a string "vitor"
const nome = 'vitor';

// Aqui é feita a concatenação tradicional (usando o sinal de '+')
const concatenacao = 'Ola ' + nome + '!';
// Resultado: "Ola vitor!"

// Agora usamos Template String (com crases ` ` ao invés de aspas)
// Tudo dentro de ${ } é interpretado como código JS
const template = `
ola 
  ${nome}!`;

// Mostra as duas formas no console
console.log(concatenacao, template);

// Você pode colocar expressões JavaScript dentro de ${ }
console.log(`1 + 1 = ${1 + 1}`);

// Cria uma função chamada "up" que transforma o texto em maiúsculas
const up = texto => texto.toUpperCase();

// Dentro da Template String, chamamos a função dentro de ${ }
console.log(`Ei.... ${up('cuidado')}!`);

