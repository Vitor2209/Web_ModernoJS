// -------------------------------------------------------------
// Tratamento de erros com try, catch e throw
// -------------------------------------------------------------

// Esta função é responsável por "lançar" (throw) um erro personalizado.
// Quando usamos throw, interrompemos a execução normal do código.
// Podemos lançar diferentes tipos de erro (Error, ReferenceError, etc.).
function tratarErroELancar(erro) {
  // Aqui poderíamos, por exemplo, registrar o erro em um log
  // ou enviar o erro para um servidor de monitoramento.
  // throw serve para “jogar o erro pra cima” e parar a execução.
  throw new Error('Ocorreu um erro inesperado durante a execução!');
}

// Esta função tenta imprimir o nome de um objeto em letras maiúsculas.
// Caso o objeto não tenha a propriedade "name", causará um erro.
// Esse erro será capturado pelo bloco try...catch.
function imprimirNomeGritado(obj) {
  try {
    // Tenta acessar a propriedade "name" e converter para maiúsculas
    console.log(obj.name.toUpperCase() + '!!!!!!');
  } catch (e) {
    // Caso ocorra erro, a função tratarErroELancar será chamada
    tratarErroELancar(e);
  } finally {
    // O bloco finally é opcional e sempre será executado,
    // mesmo que ocorra ou não um erro.
    console.log('Final do bloco try/catch.');
  }
}

// Criando um objeto com o nome correto
const objCorreto = { name: 'Roberto' };
imprimirNomeGritado(objCorreto); // Saída: ROBERTO!!!!!!

// Criando um objeto com nome incorreto (propositalmente)
const objComErro = { nome: 'Roberto' };
imprimirNomeGritado(objComErro); // Irá gerar erro → tratado pelo catch


function processarJSON(json) {
  try {
    // Tenta converter a string em um objeto
    const dados = JSON.parse(json);
    console.log('Nome:', dados.nome);
  } catch (e) {
    console.error('Erro ao processar JSON:', e.message);
  } finally {
    console.log('Execução finalizada.');
  }
}

// Correto
processarJSON('{"nome":"Vitor"}');

// Incorreto (gera erro porque o JSON está mal formatado)
processarJSON('{nome:"Vitor"}');


function dividir(a, b) {
  if (b === 0) {
    // Lançando um erro personalizado
    throw new RangeError('Divisão por zero não é permitida!');
  }
  return a / b;
}

try {
  console.log(dividir(10, 2)); // OK
  console.log(dividir(10, 0)); // Gera erro
} catch (e) {
  console.error('Erro capturado:', e.message);
}
