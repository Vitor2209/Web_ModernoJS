// Objeto "pessoa" com uma propriedade e um método
const pessoa = {
    saudacao: 'Bom dia!',

    // Método que imprime a saudação usando "this"
    falar() {
        console.log(this.saudacao);
    }
}

// Quando chamamos o método através do objeto,
// o "this" aponta corretamente para "pessoa"
pessoa.falar(); // → Bom dia!


// Aqui estamos apenas copiando a função para outra variável.
// IMPORTANTE: ela perde a referência ao objeto original.
const falar = pessoa.falar;

// Agora, quando executamos, "this" NÃO aponta mais para "pessoa",
// e sim para o contexto global → saudacao não existe → undefined
falar(); // → undefined


// Usamos .bind(pessoa) para AMARRAR (bind) o "this" ao objeto pessoa.
// Ou seja: obrigamos o método a sempre usar o "this" referente ao objeto.
const falarDePessoa = pessoa.falar.bind(pessoa);

// Agora funciona de qualquer lugar, pois o "this" foi fixado.
falarDePessoa(); // → Bom dia!
