//colecao dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira' //cria a chave nome e atribui o valor Cadeira
produto['marca do produto'] = 'Generica' //cria a chave marca do produto e atribui o valor Generica
produto.preco = 220

console.log(produto)

delete produto.preco //deleta a chave preco
delete produto['marca do produto'] //deleta a chave marca do produto

console.log(produto)

const carro = { 
    modelo: 'A4',
    valor: 89000,
    proprietario: { 
        nome: 'Raul',
        idade: 56,
        endereco: { 
            logradouro: 'Rua ABC',
            numero: 123
        }   
    },
    condutores: [{ 
        nome: 'Junior', 
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro() {
        //...
        return 2000
    }
}

carro.proprietario.endereco.numero = 1000 //alterando o valor da chave numero dentro do objeto endereco
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' //alterando o valor da chave logradouro dentro do objeto endereco