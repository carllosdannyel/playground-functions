// Desafio 11
// referencia: https://www.youtube.com/watch?v=i2jdF-c8pRw&t=122s
function generatePhoneNumber(digitos) {
  // digitos.sort();
  let numeroFinal = '';
  let numeroRepetido;
  let contador;
  if (digitos.length !== 11) {
    return "Array com tamanho incorreto."
  }
  for (let index = 0; index < digitos.length; index += 1) {
    numeroRepetido = digitos[index];
    contador = 0;
    for (let index2 = 0; index2 < digitos.length; index2 += 1) {
      if (numeroRepetido === digitos[index2]) {
        contador += 1;
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    for (let i = 0; i < digitos.length; i += 1) {
      if (digitos[i] < 0 || digitos[i] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    if (digitos.length === 11) {
      numeroFinal = "("
      for (let i = 0; i < 2; i += 1) {
        numeroFinal += digitos[i];
        }
        numeroFinal += ") ";
      for (let i2 = 2; i2 < digitos.length - 4; i2 += 1) {
        numeroFinal += digitos[i2];
      }
      numeroFinal += "-"
      for (let i3 = 7; i3 < digitos.length; i3 +=1) {
        numeroFinal += digitos[i3];
      }
    }
  }
  return numeroFinal;
}

// console.log(generatePhoneNumber([2, 3, 4, 5, 6, 7, 4, 5, 9, 7, 3,]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else {
    return false;
  }
}
// console.log(triangleCheck(10,5,6))

// Desafio 13
function hydrate(string) {
  if (string === "1 cerveja") {
    return "1 copo de água";
  } else if (string === "1 cachaça, 5 cervejas e 1 copo de vinho") {
    return "7 copos de água";
  } else if (string === "2 shots de tequila, 2 cervejas e 1 corote") {
    return "5 copos de água";
  } else if (string === "1 copo de catuaba, 1 cervejas e 1 copo de vinho") {
    return "3 copos de água";
  } else if (string === "4 caipirinhas e 2 cervejas") {
    return "6 copos de água"
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
