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
  let resultado = palavras.split(' ');
  return resultado;
}

// Desafio 4
function concatName(concatenacao) {
  let ultimoNome = concatenacao[concatenacao.length - 1];
  let primeiroNome = concatenacao[0];
  let juncao = ultimoNome + ', ' + primeiroNome;
  return juncao;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = 0;
  let partida = ties;
  if (partida > 1) {
    pontosTotais = wins * 3;
  }
  return pontosTotais + partida;
}

// Desafio 6
function highestCount(arrayOfNumber) {
  let repeated = arrayOfNumber[0];
  let counter = 0;

// encontra o maior valor que se repete reatribuindo cada novo maior valor a variavel repeat
  for (let index = 1; index < arrayOfNumber.length; index += 1) {
    if (arrayOfNumber[index] > repeated) {
      repeated = arrayOfNumber[index];
    }
  }

// verifica a quantidade de vezes que o maior valor aparece e atribuuindo mais um ao counter caso o encontre
  for (let index2 = 0; index2 < arrayOfNumber.length; index2 += 1) {
    if (arrayOfNumber[index2] === repeated) {
      counter += 1;
    }
  }
  return counter;
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
};
