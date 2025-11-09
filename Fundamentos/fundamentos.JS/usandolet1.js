// 🔹 Declarando uma variável com let
let numero = 1;

{
    // Aqui criamos um novo bloco com chaves {}
    // Diferente do var, o let **respeita o escopo de bloco**.
    // Isso significa que essa variável 'numero' só existe dentro desse bloco.
    let numero = 2;
    console.log('dentro =', numero); // 👉 saída: dentro = 2
}

console.log('fora =', numero); // 👉 saída: fora = 1
