const sequencia = {
    _valor: 1, // convenção: atributo privado
    get valor() {
        return this._valor++;
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor); // Saída: 1
console.log(sequencia.valor); // Saída: 2
sequencia.valor = 1000;
console.log(sequencia.valor); // Saída: 1000
console.log(sequencia.valor); // Saída: 1001
console.log(sequencia.valor); // Saída: 1002
console.log(sequencia.valor); // Saída: 1003
console.log(sequencia.valor);