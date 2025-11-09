// 🔹 Par nome/valor simples
const saudacao = 'Opa'; // contexto léxico 1
// "saudacao" é uma constante global com valor "Opa"

function exec() {
    const saudacao = 'Falaaaa'; // contexto léxico 2
    // Dentro dessa função, a variável "saudacao" existe apenas aqui
    return saudacao;
}

// 🔹 Objetos são conjuntos de pares nome/valor
const Cliente = {
    nome: 'StylePropertyMapReadOnly', // nome do cliente
    idade: 21,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Longe',
        numero: 70
    }
    // O objeto "endereco" é aninhado dentro de Cliente
};

// 🔹 Exibindo valores
console.log(saudacao);   // 👉 saída: "Opa"
// Variável global, fora do escopo da função

console.log(exec());      // 👉 saída: "Falaaaa"
// Variável local da função, contexto léxico diferente
