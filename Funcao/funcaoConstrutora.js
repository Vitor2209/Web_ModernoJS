// Função construtora Carro
// ------------------------
// velocidadeMaxima e delta recebem valores padrão
function Carro(velocidadeMaxima = 200, delta = 5) {

    // Atributo privado (via closure)
    // Não é acessível fora da função
    let velocidadeAtual = 0;

    // Método público para acelerar o carro
    // Usa "this" para expor o método externamente
    this.acelerar = function () {
        // Se não ultrapassar a velocidade máxima, soma o delta
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima; // trava no máximo
        }
    };

    // Método público para obter a velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
}

// ------------------------------------------------------
// Criando uma instância do Carro usando "new"
const meuCarro = new Carro(180, 20); // velocidade máxima 180 e delta 20

// Acelerando várias vezes
meuCarro.acelerar();
console.log(meuCarro.getVelocidadeAtual()); // 20

meuCarro.acelerar();
console.log(meuCarro.getVelocidadeAtual()); // 40

meuCarro.acelerar();
console.log(meuCarro.getVelocidadeAtual()); // 60

meuCarro.acelerar();
console.log(meuCarro.getVelocidadeAtual()); // 80

meuCarro.acelerar();
console.log(meuCarro.getVelocidadeAtual()); // 100

meuCarro.acelerar();
console.log(meuCarro.getVelocidadeAtual()); // 120

meuCarro.acelerar();
console.log(meuCarro.getVelocidadeAtual()); // 140

// Ele vai acelerar até bater no limite (180)
// ------------------------------------------------------


// Função soma como exemplo
// -------------------------
// Apenas uma função comum sendo declarada,
// aqui não tem relação direta com o Carro
const soma = function (a, b) {
    return a + b;
};

