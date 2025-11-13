// Função teste1 — demonstra o uso correto do "if"
function teste1(num) {
    // Se o número for maior que 7, o console.log(num) será executado
    if (num > 7)
        console.log(num)
    
    // Este console.log é executado sempre, pois está fora do bloco do if
    console.log('Final')
}

// Testando a função com dois valores
teste1(6); // não imprime o número (6 não é > 7), mas imprime 'Final'
teste1(8); // imprime o número (8 é > 7) e depois imprime 'Final'


// 🔹 Explicação:
// O if controla somente a primeira linha após ele, caso não use chaves {}.
// Por isso, quando num > 7, ele executa apenas o console.log(num).
// O console.log('Final') sempre roda, porque está fora do if.

// Função teste2 — demonstra o erro de colocar ponto e vírgula após o "if"

function teste2(num) {
    if (num > 7); { // ⚠️ Esse ponto e vírgula encerra o "if" aqui!
        console.log(num) // Esse bloco será executado SEMPRE, independente da condição
    }
}

teste2(6); // imprime 6
teste2(8); // imprime 8

// ⚠️ Atenção:
// O ponto e vírgula (;) encerra o comando do if, então o bloco { ... } não faz parte da condição.
// Ou seja, o console.log(num) será executado sempre, independentemente do valor da variável.

// 💡 Resumo:

// ✅ Correto: if (condição) { ... }

// ❌ Errado: if (condição); { ... }
