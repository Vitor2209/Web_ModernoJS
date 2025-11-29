// -------------------------------
// Exemplo de callback no browser
// -------------------------------

// Pega o primeiro elemento <body> da página
document.getElementsByTagName('body')[0].onclick = function (e) {
    // Esta função é um CALLBACK: só será executada quando o usuário clicar no body
    console.log('O evento ocorreu!');
};



// -------------------------------
// Exemplo de callback no Node.js
// -------------------------------

const http = require('http'); 
// Importa o módulo 'http' para criar servidores



// Servidor 1 — usando função tradicional
http.createServer(function (req, res) {
    // Esta função é um CALLBACK: ela é chamada AUTOMATICAMENTE
    // sempre que alguém faz uma requisição ao servidor

    res.writeHead(200, {'Content-Type': 'text/plain'}); // Cabeçalho HTTP
    res.end('Olá Mundo!\n'); // Resposta da requisição
}).listen(8080); // Porta do servidor

console.log('Servidor rodando em http://localhost:8080/');



// -------------------------------
// Mesma ideia, mas com arrow function
// -------------------------------

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Olá Mundo com Arrow Function!\n');
}).listen(8081);

console.log('Servidor rodando em http://localhost:8081/');



// ------------------------------------------------------------
// Diferença de comportamento do "this" entre funções comuns e
// arrow functions
// ------------------------------------------------------------

// Função comum: o "this" depende de quem chama a função (contexto dinâmico)
http.createServer(function (req, res) { 
    console.log(this); 
    // Aqui, "this" aponta para o servidor criado
}).listen(8082);


// Arrow function: o "this" NÃO muda — ele é léxico, ou seja,
// depende do local onde a função foi declarada e não de quem a chamou
http.createServer((req, res) => { 
    console.log(this); 
    // Aqui, "this" NÃO aponta para o servidor
    // Ele herda o "this" do escopo externo (geralmente módulo atual)
}).listen(8083);

console.log('Servidores rodando em http://localhost:8082/ e http://localhost:8083/');



// ----------------------------------------
// Como testar os servidores
// ----------------------------------------

// Acesse no navegador:
// http://localhost:8080/
// http://localhost:8081/
// http://localhost:8082/
// http://localhost:8083/

// Ou use o curl no terminal:
// curl http://localhost:8080/
// curl http://localhost:8081/
// curl http://localhost:8082/
// curl http://localhost:8083/

