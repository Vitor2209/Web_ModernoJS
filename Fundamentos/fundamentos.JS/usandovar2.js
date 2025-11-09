// 🔹 Declarando uma variável com 'var'
var numero = 1;

{
    // Aqui criamos um novo bloco com chaves,
    // mas como estamos usando 'var', ele **não respeita escopo de bloco**.
    // Isso significa que essa nova atribuição substitui a variável 'numero' do escopo global.
    var numero = 2;
    console.log('dentro =', numero); // 👉 saída: dentro = 2
}

console.log('fora =', numero); // 👉 saída: fora = 2

