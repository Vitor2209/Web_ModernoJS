function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; // Se um dos dois der certo
  const comprarTv50 = trabalho1 && trabalho2;    // Só se ambos derem certo
  const comprarTv32 = trabalho1 != trabalho2;    // Um ou outro, mas não ambos
  const manterSaudavel = !comprarSorvete;        // Nega o resultado

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
