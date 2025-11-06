// Criando um array (vetor) com 4 valores numéricos.
// Arrays são estruturas que guardam múltiplos valores em uma única variável.
const valores = [7.7, 8.9, 6.3, 9.2];

// Aqui, acessamos os elementos do array pelos seus índices (posições).
// O índice começa em 0 → ou seja:
// valores[0] → primeiro elemento (7.7)
// valores[3] → quarto elemento (9.2)
console.log(valores[0], valores[3]); // saída: 7.7 9.2

// Tentando acessar o índice 4, que ainda não existe no array.
// Como não há valor nessa posição, o JS retorna "undefined".
console.log(valores[4]); // saída: undefined

// Adicionando um novo elemento ao array na posição 4.
valores[4] = 10;
console.log(valores); // saída: [7.7, 8.9, 6.3, 9.2, 10]

// A propriedade .length mostra quantos elementos o array tem.
console.log(valores.length); // saída: 5

// O método .push() adiciona novos elementos no final do array.
// Aqui estamos colocando vários tipos diferentes: um objeto, booleano, null e string.
// Arrays em JS são heterogêneos → podem misturar tipos de dados diferentes.
valores.push({id: 3}, false, null, 'teste');
console.log(valores);
/* saída:
[
  7.7, 8.9, 6.3, 9.2, 10,
  { id: 3 }, false, null, 'teste'
]
*/

// O método .pop() remove o último elemento do array e o retorna.
// Aqui ele remove a string 'teste' e exibe ela.
console.log(valores.pop()); // saída: 'teste'

// O operador 'delete' remove o elemento de uma posição específica,
// mas não altera o tamanho total do array (deixa o espaço vazio).
delete valores[0];
console.log(valores);
/* saída:
[
  <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null
]
*/

// typeof retorna o tipo do valor.
// Arrays em JavaScript são do tipo 'object'.
console.log(typeof valores); // saída: 'object'
