// Array de fabricantes
const faabricantes = [
  "Mercedes", "Audi", "BMW", "Toyota", "Honda"
];
// Obs: o nome da variável está com 2 "a" — funciona, mas é um erro de digitação :)


// Função que será usada no forEach
function imprimir(nome, indice) {
    // Mostra o índice (começando em 1) e o nome
    console.log(`${indice + 1} - ${nome}`);
}

// Passando a função "imprimir" como callback do forEach
faabricantes.forEach(imprimir);
// O forEach chama "imprimir" para cada elemento do array


// Mesma lógica, mas usando uma função anônima tradicional
faabricantes.forEach(function (nome, indice) {
    // Para cada elemento, executa esse console.log
    console.log(`${indice + 1} - ${nome}`);
});


// Agora usando arrow function com dois parâmetros
faabricantes.forEach((nome, indice) => 
    console.log(`${indice + 1} - ${nome}`)
);
// Sintaxe mais curta e moderna


// Arrow function ainda mais curta, usando apenas o nome
faabricantes.forEach(nome => console.log(nome));
// Aqui não usamos o índice, então omitimos o segundo parâmetro









