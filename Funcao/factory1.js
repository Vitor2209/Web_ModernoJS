// Factory simple example
// ----------------------
// Uma *factory function* é uma função que cria e retorna objetos.
// É uma alternativa simples e direta ao uso de classes ou funções construtoras.

function createPerson(name, age) {

    // Retornando um objeto literal
    return {
        name: name, // Propriedade "name" recebe o valor passado
        age: age,   // Propriedade "age" recebe o valor passado
        
        // Método do objeto
        greet: function() {
            // "this" se refere ao próprio objeto
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };  
}

// Criando duas pessoas usando a factory function
const person1 = createPerson('Alice', 30);
const person2 = createPerson('Bob', 25);

// Chamando o método greet de cada objeto criado
person1.greet(); 
// Output: Hello, my name is Alice and I am 30 years old.

person2.greet();
// Output: Hello, my name is Bob and I am 25 years old.
