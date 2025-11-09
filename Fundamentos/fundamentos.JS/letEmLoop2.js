// 🔹 Criando um array vazio para armazenar funções
const funcs = [];

// 🔹 Loop usando 'let'
for (let i = 0; i < 10; i++) {
    // Cada iteração cria uma **nova variável `i` isolada**
    // Por isso, cada função capturará o valor correto de i
    funcs.push(function () {
        console.log(i);
    });
}

// Chamando a função armazenada na posição 2 do array
funcs[2](); 
// 👉 saída: 2
// Cada função lembra do valor de 'i' no momento em que foi criada

// Chamando a função armazenada na posição 8 do array
funcs[8](); 
// 👉 saída: 8
// Perfeito: cada função tem seu próprio escopo, graças ao 'let'
