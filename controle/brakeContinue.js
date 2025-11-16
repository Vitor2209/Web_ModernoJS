// Array de números de 1 a 10
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* ============================================================
   1) Loop com BREAK
   - O break interrompe completamente o laço quando a condição é atingida
=============================================================== */
for (x in nums) {

    // Quando o índice chegar em 5, o loop para imediatamente
    if (x == 5) {
        break;
    }

    // Imprime o índice e o valor correspondente no array
    console.log(`${x} = ${nums[x]}`);
}

/* ============================================================
   2) Loop com CONTINUE
   - O continue pula apenas a iteração atual e continua o loop
=============================================================== */
for (y in nums) {

    // Quando o índice for 5, pula essa repetição e segue para a próxima
    if (y == 5) continue;

    console.log(`${y} = ${nums[y]}`);
}

/* ============================================================
   3) Rótulo (label) EXTERNO para controlar loops aninhados
   - 'break externo' faz o break sair do loop mais externo
=============================================================== */
externo: for (a in nums) {        // Loop externo
    for (b in nums) {            // Loop interno

        // Se a = 2 e b = 3 → quebra o loop externo inteiro
        if (a == 2 && b == 3) break externo;

        // Imprime o par de índices
        console.log(`Par = ${a},${b}`);
    }
}
