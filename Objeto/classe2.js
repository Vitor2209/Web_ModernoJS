class Avo {
    constructor() {
        this.sobrenome = 'Silva';
    }
}

class Pai extends Avo {
    constructor() {
        super();
        this.nome = 'José';
    }   
}

class Filho extends Pai {
    constructor() {
        super();
        this.idade = 20;
    }   

    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }   
}

const filho = new Filho();
console.log(filho.getNomeCompleto());

console.log(filho instanceof Filho);
console.log(filho instanceof Pai);
console.log(filho instanceof Avo);

// Saída esperada:
// José Silva
// true
// true
// true

