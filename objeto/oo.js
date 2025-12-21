// CODIGO NAO EXECUTAVEL 

// Procedural

processamento(valor1, valor2, valor3)

// OO

objeto = {
    valor1: 10,
    valor2: 20, 
    valor3: 30,
    processamento() {
        // this.valor1
    }
}
objeto.processamento() // Foco passou a ser o objeto

// Principios importantes:
// 1. Abstracao
// 2. Encapsulamento
// 3. Heranca (prototype)
// 4. Polimorfismo

// Exemplo de Abstracao
function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        idade: 0,
        falar() {
            console.log(`${this.nome} está falando`)
        },
        comer() {
            console.log(`${this.nome} está comendo`)
        },
        beber() {
            console.log(`${this.nome} está bebendo`)
        }   
    }
}

pessoa1 = criarPessoa('Luiz', 'Otavio')
pessoa2 = criarPessoa('Maria', 'Oliveira')
console.log(pessoa1.nome)
console.log(pessoa2.nome)
pessoa1.falar()
pessoa2.comer() 

