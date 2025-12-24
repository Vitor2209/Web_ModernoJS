const a = 1;
const b = 2;
const c = 3;

// Notação literal de objeto
const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c }; // ES6 em diante
console.log(obj1); // Saída: { a: 1, b: 2, c: 3 }
console.log(obj2); // Saída: { a: 1, b: 2, c: 3 }

// Notação literal de função

const nomeAttr = "nota";
const valorAttr = 7.87;

const obj3 = {
  nomeAttr: valorAttr, // Atributo com nome fixo
};
console.log(obj3); // Saída: { nomeAttr: 7.87 }
const obj4 = {
  [nomeAttr]: valorAttr, // Atributo com nome dinâmico
};
console.log(obj4); // Saída: { nota: 7.87 }

const obj5 = {
  funcao1: function () {
    // Notação tradicional
    return "Função 1";
  },
  funcao2() {
    // Notação abreviada ES6
    return "Função 2";
  },
};