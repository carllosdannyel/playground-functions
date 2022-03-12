// Desafio 1
function compareTrue(bool1, bool2) {
  let comparator = bool1 && bool2;
  return comparator;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(palavras) {
  let resultado = palavras.split(" ");
  return resultado;
}

// Desafio 4
function concatName(concatenacao) {
  let ultimoNome = concatenacao[concatenacao.length -1];
  let primeiroNome = concatenacao[0];
  let juncao = ultimoNome + ', ' + primeiroNome;
    return juncao;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = 0
  let partida = ties
  if (partida > 1) {
    pontosTotais = wins * 3;
  }
  return pontosTotais + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
}