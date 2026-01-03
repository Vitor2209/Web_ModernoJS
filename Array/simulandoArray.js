const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
});

console.log(quaseArray.toString());

const meuArray = ['Rafael', 'Ana', 'Bia'];
console.log(meuArray);

console.log(quaseArray + ''); // chama o toString definido
console.log(Object.values(quaseArray)); // transforma em array
console.log(Object.keys(quaseArray)); // mostra as chaves do objeto
console.log(Object.entries(quaseArray)); // mostra os pares chave/valor do objeto
console.log(typeof quaseArray);
console.log(typeof meuArray);

// Transformar um objeto em array
const obj = { a: 1, b: 2, c: 3 };
const arrFromObj = Array.from(Object.values(obj));
console.log(arrFromObj);
console.log(typeof arrFromObj);

// Transformar uma string em array
const str = 'Rafael';
const arrFromStr = Array.from(str);
console.log(arrFromStr);
console.log(typeof arrFromStr);