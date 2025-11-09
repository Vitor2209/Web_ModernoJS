// 🔹 Criando um array vazio para armazenar funções
const funcs = [];

// 🔹 Loop usando 'var'
for (var i = 0; i < 10; i++) {
    // Aqui, estamos **adicionando uma função ao array** a cada iteração
    funcs.push(function () {
        console.log(i);
        // ❌ Atenção: todas essas funções vão acessar a mesma variável 'i'
        // que foi declarada com var e está no escopo da função/global
    });
}

// Chamando a função armazenada na posição 2 do array
funcs[2](); 
// 👉 saída: 10
// Mesmo esperando 2, o valor é 10 porque o loop já terminou
// e 'i' está no valor final (10)

// Chamando a função armazenada na posição 8 do array
funcs[8](); 
// 👉 saída: 10
// Mesma explicação: todas as funções referenciam a **mesma variável 'i'**
