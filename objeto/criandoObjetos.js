// Usando a notação literal para criar um objeto

const obj1 = {} // Objeto vazio
console.log(obj1)

// Object em JavaScript
const obj2 = new Object // Objeto vazio usando o construtor Object
console.log(obj2)

// Função construtora
function Produto(nome, preco, desc) {
    this.nome = nome // Atributo público    
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }   
}

const p1 = new Produto('Caneta', 7.99, 0.15) // Criando um novo objeto Produto
const p2 = new Produto('Notebook', 2999.99, 0.25) // Criando outro objeto Produto
console.log(p1.nome) // Acessando o atributo público nome
console.log(p1.getPrecoComDesconto()) // Acessando o método para obter o preço com desconto
console.log(p2.nome)
console.log(p2.getPrecoComDesconto())