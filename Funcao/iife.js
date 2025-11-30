// IIFE -> Immediately Invoked Function Expression
// ---------------------------------
// Uma função que é definida e executada imediatamente.
// Usada para criar um escopo isolado, evitando poluição do escopo global.

(function() {
    console.log('Esta função foi executada imediatamente!');
    console.log('Isso ajuda a manter o escopo global limpo.');
})(); // Parênteses no final para invocar a função imediatamente

// Outra forma de escrever uma IIFE usando arrow function
(() => {
    console.log('Esta é uma IIFE usando arrow function!');
})();

// ------------------------------------------------------

