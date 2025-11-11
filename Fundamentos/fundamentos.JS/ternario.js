// Criando uma função chamada "resultado"
// Ela recebe um parâmetro chamado "nota"
// O operador ternário faz uma verificação lógica simples em uma linha:
//
// estrutura: condição ? valorSeVerdadeiro : valorSeFalso
//
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// Testando a função com duas notas diferentes:

console.log(resultado(7.1))
// Como 7.1 >= 7 → condição verdadeira → retorna 'Aprovado'

console.log(resultado(6.7))
// Como 6.7 >= 7 → condição falsa → retorna 'Reprovado'


// 🧠 Entendendo o operador ternário (? :)

// O operador ternário é uma forma compacta do if/else.

// 📘 Sintaxe:

// condição ? valorSeVerdadeiro : valorSeFalso


// 📘 Exemplo equivalente usando if/else:

function resultado(nota) {
  if (nota >= 7) {
    return 'Aprovado'
  } else {
    return 'Reprovado'
  }
}


// Os dois códigos fazem exatamente a mesma coisa — o ternário só é mais curto e direto.
