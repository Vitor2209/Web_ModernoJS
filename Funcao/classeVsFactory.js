class Pessoa {  
    constructor(nome) {
        this.nome = nome;
    }   
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }   
}

const pessoa1 = new Pessoa('Carlos');
pessoa1.apresentar(); // Olá, meu nome é Carlos.

const pessoa = nome => {  
    return {
        nome: nome,
        apresentar: function() {
            console.log(`Olá, meu nome é ${this.nome}.`);
        }   
    };
};

const pessoa2 = pessoa('Ana');
pessoa2.apresentar(); // Olá, meu nome é Ana.
