// Cadeia de protótipos (prototype chain)

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1) // A
console.log(filho.attr2) // B
console.log(filho.attr3) // C

const carro = {
    velAtual: 0,
    velMax: 200,    
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }   
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super para chamar o método do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) // ferrari herda de carro
Object.setPrototypeOf(volvo, carro)   // volvo herda de carro   
console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(300)
console.log(ferrari.status())
volvo.acelerarMais(100)
console.log(volvo.status())

