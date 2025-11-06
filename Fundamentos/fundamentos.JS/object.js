// Criando um objeto vazio.
// Objetos em JavaScript são coleções de pares chave:valor (ou seja, propriedades e seus respectivos valores).
const prod1 = {};

// Adicionando propriedades ao objeto dinamicamente (depois da criação).
prod1.nome = 'Celular Ultra Mega'; // adiciona a chave 'nome' com o valor 'Celular Ultra Mega'
prod1.preco = 15000.90;            // adiciona a chave 'preco' com o valor 15000.90

// Também é possível criar uma propriedade com nome composto (contendo espaço).
// Mas é uma má prática — dificulta o acesso posterior.
prod1['Desconto Legal'] = 0.40;    // cria uma chave 'Desconto Legal' com o valor 0.40

// Exibindo o objeto completo no console.
console.log(prod1);
/* saída:
{
  nome: 'Celular Ultra Mega',
  preco: 15000.9,
  'Desconto Legal': 0.4
}
*/


// Criando um novo objeto já com as propriedades dentro das chaves { }.
// Essa é a forma mais comum e prática de criar objetos no JavaScript.
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,

    // Um objeto pode conter outro objeto dentro dele.
    // Isso é chamado de "objeto aninhado" ou "objeto dentro de objeto".
    obj: {
        blablabla: 1,

        obj: {
            blablabla: 2
        }
    }
};

// Se você exibir o objeto no console, verá a estrutura hierárquica:
console.log(prod2);
/* saída:
{
  nome: 'Camisa Polo',
  preco: 79.9,
  obj: {
    blablabla: 1,
    obj: {
      blablabla: 2
    }
  }
}
*/

// Um objeto é uma coleção de dados relacionados, formados por pares de chave e valor.
// Cada chave (ou propriedade) tem um nome único dentro do objeto.