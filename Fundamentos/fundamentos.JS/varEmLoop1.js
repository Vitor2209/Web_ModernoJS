// 🔹 Loop usando 'var'
for (var i = 0; i < 10; i++) {
    console.log(i); 
    // 👉 imprime os números de 0 até 9 dentro do loop
}

// 🔹 A variável 'i' ainda existe fora do loop!
// Isso acontece porque 'var' **não tem escopo de bloco**, apenas de função ou global.
console.log('i =', i); 
// 👉 saída: i = 10
// Observação: o loop terminou quando i = 10, então esse é o valor da variável fora do loop
