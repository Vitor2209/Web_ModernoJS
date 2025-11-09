// 🔹 Math.ceil arredonda para cima
console.log(Math.ceil(6.1)); 
// 👉 saída: 7
// Exemplo de objeto Math e método de objeto (função dentro do objeto)

// -------------------------------------------------------------

// 🔹 Criando um objeto vazio
const obj1 = {};

// 🔹 Atribuindo uma propriedade usando notação ponto
obj1.nome = 'Bola';
// Também poderia usar notação de colchetes: obj1['nome'] = 'Bola2';
console.log(obj1.nome); 
// 👉 saída: 'Bola'

// -------------------------------------------------------------

// 🔹 Função construtora (modelo de objeto)
function Obj(nome) {
    this.nome = nome; // propriedade do objeto
    this.exec = function() { // método do objeto
        console.log('Exec...');
    }
}

// 🔹 Criando objetos a partir da função construtora
const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

// 🔹 Acessando propriedades e métodos usando notação ponto
console.log(obj2.nome); // 👉 saída: 'Cadeira'
console.log(obj3.nome); // 👉 saída: 'Mesa'

obj3.exec(); // 👉 saída: 'Exec...'
// Chamando método do objeto usando notação ponto


