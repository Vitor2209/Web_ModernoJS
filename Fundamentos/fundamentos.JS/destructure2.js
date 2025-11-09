// Destructuring com ARRAY
// Assim como em objetos, o destructuring também pode ser usado em arrays.
// A diferença é que, em arrays, usamos colchetes [] em vez de chaves {}.

const [a] = [10];
console.log(a); 
// Aqui estamos "tirando" o primeiro elemento do array [10] e atribuindo à variável 'a'.
// Resultado: a = 10

// Agora um exemplo mais complexo:
const [n1, , n3, n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);
/*
Explicação:
n1 → recebe o 1º valor → 10
(n2) → é pulado (espaço vazio após a vírgula)
n3 → recebe o 3º valor → 9
n5 → tenta pegar o 4º valor → 8
n6 → não existe, então assume o valor padrão 0
Saída: 10 9 8 0
*/


// Exemplo mais avançado — destructuring aninhado:
const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);
/*
Explicação passo a passo:
O array principal tem dois elementos: [ [,8,8], [9,6,8] ]
→ o primeiro elemento é ignorado (vírgula antes da vírgula interna)
→ o segundo elemento é outro array: [9,6,8]
Dentro dele, ignoramos o primeiro valor (9) e pegamos o segundo (6)
Resultado final: nota = 6
*/
