// Exemplo 1: this PERDIDO → causa NaN
function Pessoa() {
    this.idade = 0 // atributo da função construtora

    setInterval(function() {
        // Aqui o this NÃO é o this da função Pessoa
        // Em função tradicional, o this depende de quem chama
        // Como quem chama é o setInterval, o this aponta para global/window
        // global.idade é undefined → undefined++ = NaN
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa  // imprime NaN a cada segundo

// Exemplo 2: Usando "self" (ou "that") para manter a referência correta
function Pessoa2() {
    this.idade = 0
    const self = this // capturamos o this correto (da instância)

    setInterval(function() {
        // Agora NÃO usamos mais this, e sim self
        // self sempre aponta para o objeto criado com new Pessoa2
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa2  // imprime 1, 2, 3...

// Exemplo 3: Arrow Function resolve automaticamente o problema do this
function Pessoa3() {
    this.idade = 0  

    setInterval(() => {
        // Arrow function NÃO tem seu próprio this
        // Ela herda o this do contexto onde foi criada
        // Aqui ela herda o this da função Pessoa3
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa3  // imprime 1, 2, 3...

// Exemplo 4: Usando bind(this) para fixar o this corretamente
function Pessoa4() {
    this.idade = 0  

    setInterval(function() {
        // bind(this) faz com que o this dentro da função
        // seja SEMPRE o this da função Pessoa4
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // <<< this fixado aqui
}

new Pessoa4  // imprime 1, 2, 3...


