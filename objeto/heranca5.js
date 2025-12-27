console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())

Object.prototype.attr0 = 'Z'

const obj1 = {}
const obj2 = new Object()
console.log(obj1.attr0)
console.log(obj2.attr0)

// Não faça isso em casa!!!
console.log('----------------------------------')

String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // Cuidado ao mexer em protótipos nativos!


