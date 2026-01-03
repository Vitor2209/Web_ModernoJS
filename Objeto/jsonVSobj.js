const obj = { a: 1, b: 2, c: 3 , soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // Converte objeto para JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // Dá erro! JSON inválido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // Converte JSON para objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": {"e": 4, "f": 5}}')) // JSON com objeto dentro
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": [6, 7, 8]}')) // JSON com array dentro
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": {"e": 4, "f": {"g": 5}}}')) // JSON com objeto dentro de objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": [6, 7, {"h": 8}]}')) // JSON com array dentro de objeto dentro de array
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": [{"i": 9}, {"j": 10}]}')) // JSON com array de objetos
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": [{"k": [11, 12]}, {"l": [13, 14]}]}')) // JSON com array de objetos com arrays dentro
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": {"m": [15, 16], "n": {"o": 17}}}')) // JSON com objeto dentro de objeto com array dentro
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": [{"p": {"q": 18}}, {"r": {"s": 19}}]}')) // JSON com array de objetos com objetos dentro
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": {"t": {"u": [20, 21]}}}')) // JSON com objeto dentro de objeto com array dentro
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": [{"v": [22, 23]}, {"w": [24, 25]}], "x": {"y": 26}}')) // JSON complexo   
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": {"z": {"aa": [27, 28]}, "ab": {"ac": 29}}}')) // JSON complexo com múltiplos níveis
// Observe que em todos os exemplos acima, as chaves e strings devem estar entre aspas duplas.

// No exemplo acima, a função soma não é convertida para JSON, pois JSON só suporta dados.

