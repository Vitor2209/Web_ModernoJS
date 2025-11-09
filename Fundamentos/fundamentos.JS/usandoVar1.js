{
    {
        {
            {
                {
                    {
                        {
                            // 🔹 A variável 'sera' é declarada com var dentro de vários blocos.
                            // Em JavaScript, o 'var' **não tem escopo de bloco**, apenas de função ou global.
                            // Ou seja: mesmo estando dentro de várias chaves, ela ainda é acessível fora desses blocos.

                            var sera = 'sera???'
                            console.log(sera); // 👉 saída: 'sera???'
                        }
                    }
                }
            }
        }
    }
}

// Mesmo fora dos blocos, a variável 'sera' ainda existe!
console.log(sera); // 👉 saída: 'sera???'

// -------------------------------------------------------------

// 🔹 Agora um exemplo dentro de uma função.
function teste() {
    // A variável 'local' é declarada dentro da função com var.
    // Diferente dos blocos, funções **criam um novo escopo** para var.
    // Isso significa que 'local' só existe dentro dessa função.
    var local = 123
    console.log(local); // 👉 saída: 123
}

teste();

// Fora da função, tentar acessar 'local' dá erro (ReferenceError),
// porque 'local' só existe dentro do escopo da função.
console.log(local); // ❌ ERRO: local is not defined
