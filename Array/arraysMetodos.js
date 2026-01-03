const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove o último elemento 
console.log(pilotos);

pilotos.push('Verstappen'); // adiciona um elemento no final do array
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona um elemento no início do array
console.log(pilotos);

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa'); // a partir do índice 2, remove 0 elementos e adiciona Bottas e Massa
console.log(pilotos);

// remover
pilotos.splice(3, 1); // a partir do índice 3, remove 1 elemento
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array a partir do índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array do índice 1 ao 4 (não inclui o índice 4)
console.log(algunsPilotos2);





