// Função "compras" que recebe dois parâmetros booleanos (verdadeiro ou falso)
// Cada parâmetro representa se um trabalho foi feito ou não.
function compras(trabalho1, trabalho2) {

  // Se pelo menos um dos trabalhos for verdadeiro, compra sorvete.
  // || (OU) → retorna true se pelo menos uma condição for verdadeira.
  const comprarSorvete = trabalho1 || trabalho2;

  // Só compra a TV de 50" se os dois trabalhos derem certo.
  // && (E) → retorna true apenas se ambas as condições forem verdadeiras.
  const comprarTv50 = trabalho1 && trabalho2;

  // Compra a TV de 32" apenas se um trabalho der certo e o outro não.
  // != (diferente) → retorna true se os valores forem diferentes (um true e outro false).
  const comprarTv32 = trabalho1 != trabalho2;

  // Se não comprar sorvete, significa que vai manter a saúde.
  // ! (negação) → inverte o valor lógico.
  const manterSaudavel = !comprarSorvete;

  // Retorna um objeto com os quatro resultados.
  // O JavaScript entende que o nome da variável pode ser usado como chave do objeto.
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

// Agora testamos a função com todas as combinações possíveis de true e false:

console.log(compras(true, true));
// Ambos os trabalhos deram certo → compra sorvete, TV 50", não compra TV 32" e não mantém saudável.

console.log(compras(true, false));
// Apenas o primeiro trabalho deu certo → compra sorvete, não compra TV 50", compra TV 32", não mantém saudável.

console.log(compras(false, true));
// Apenas o segundo trabalho deu certo → mesmo resultado da linha anterior.

console.log(compras(false, false));
// Nenhum trabalho deu certo → não compra nada e mantém-se saudável.

