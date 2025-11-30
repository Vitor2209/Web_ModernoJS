// Definição de uma classe em JavaScript (ES6+)
// --------------------------------------------
// A classe "Pessoa" serve como um molde para criar objetos
// com propriedades "nome" e "idade", além do método "apresentar()".

class Pessoa {

    // O método constructor é executado automaticamente
    // quando usamos "new Pessoa(...)"
    constructor(nome, idade) {
        this.nome = nome;   // Atribui o valor à propriedade do objeto
        this.idade = idade; // "this" refere-se à instância criada
    }   

    // Método da classe (fica no prototype)
    // Cada instância de Pessoa pode chamar apresentar()
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }   
}


// Criando instâncias da classe Pessoa usando "new"
// ------------------------------------------------
// Cada uma recebe seus próprios valores de nome e idade

const pessoa1 = new Pessoa('João', 28);
const pessoa2 = new Pessoa('Maria', 22);


// Chamando o método apresentar() de cada objeto
pessoa1.apresentar(); // Olá, meu nome é João e tenho 28 anos.
pessoa2.apresentar(); // Olá, meu nome é Maria e tenho 22 anos.

