function soma() {
   // Variável local que vai acumular a soma dos valores recebidos
   let soma = 0

   // "arguments" é um objeto que contém TODOS os valores passados para a função,
   // mesmo que você não declare parâmetros.
   for (i in arguments) {
      // Cada elemento é somado ao acumulador.
      // OBS: se for número, soma; se for string, concatena!
      soma += arguments[i]
   }

   // Retorna o resultado final
   return soma
}

// Chamadas de teste
console.log(soma())                 // Nenhum valor → 0
console.log(soma(1))                // Apenas 1 → 1
console.log(soma(1.1, 2.2, 3.3))     // Soma números → 6.6
console.log(soma(1.1, 2.2, "Teste")) // Aqui ocorre CONCATENAÇÃO → "3.3Teste"
console.log(soma('a', 'b', 'c'))     // Tudo é string → "abc"
