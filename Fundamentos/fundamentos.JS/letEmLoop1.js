// 🔹 Loop usando 'let'
for (let i = 0; i < 10; i++) {
    console.log(i); 
    // 👉 imprime os números de 0 até 9 dentro do loop
}

// 🔹 Tentativa de acessar 'i' fora do loop
console.log('i =', i); 
// ❌ ERRO: ReferenceError: i is not defined
// Porque 'let' **tem escopo de bloco**, ou seja, a variável 'i' só existe dentro do loop
