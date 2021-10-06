/* eslint-disable no-console */
const arrayNumbers = [];
let arrayResults = [];
let valoration;
let numberOne;
let numberTwo;
arrayNumbers.push(numberOne);
arrayNumbers.push(numberTwo);

// eslint-disable-next-line no-alert
numberOne = parseFloat(prompt("Insert first number:"));
// eslint-disable-next-line no-alert
numberTwo = parseFloat(prompt("Insert second number:"));

/*
 * Función para calcular la raíz cuadrada
 * de un valor.
 *
 * @param: valor calcular
 *
 * @return: resultado de la raíz cuadrada
 */
function resultRootSquare(numVal) {
  return Math.sqrt(numVal);
}

/*
 * Función para analizar los números guardados
 * en la array "arrayResults", y designar solo
 * 3 decimales en caso que tenga más.
 *
 * CASE 1: solo 1 valor a analizar en el array
 * CASE 2: hay varios valores a analizar en el array
 *
 * @param1: valor para indicar si habrá 1 o 2 valores
 * @param2: array con valores a estudiar
 *
 * @return: array con valores tratados (en caso que hubiese hecho falta)
 */
function formatNumberArray(valorationFormatNumberArray, arrNumbers) {
  const arrTemp = [];

  if (valorationFormatNumberArray === 1) {
    if (arrNumbers[0].toString().length > 4) {
      arrTemp[0] = arrNumbers[0].toFixed(3);
      // eslint-disable-next-line spaced-comment
    }
  } else if (valorationFormatNumberArray === 2) {
    for (let i = 0; i < arrNumbers.length; i++) {
      if (arrNumbers[i].toString().length > 4) {
        arrTemp[i] = arrNumbers[i].toFixed(3);
      } else {
        arrTemp[i] = arrNumbers[i];
      }
    }
  }

  return arrTemp;
}

/*
 * Función para mostrar en pantalla el contenido
 * del array "arrayResults" de manera "friendly".
 *
 * CASE 1: solo hay 1 valor a mostrar (guardado en un array)
 * CASE 2: hay varios valores a mostrar (guardado en un array)
 *
 * @param1: valor para indicar si habrá 1 o 2 valores
 * @param2: array con valores a mostrar
 */
function messageFinal(valorationMessageFinal, arrFinal) {
  console.log("Results:");

  switch (valorationMessageFinal) {
    case 1:
      console.log(`The result of the root square is ${arrFinal[0]}`);
      break;
    case 2:
      console.log(`The result of the sum is ${arrFinal[0]}`);
      console.log(`The result of the rest is ${arrFinal[1]}`);
      console.log(`The result of the mult is ${arrFinal[2]}`);
      console.log(`The result of the div is ${arrFinal[3]}`);
      break;
    default:
      break;
  }
}

/*
 * Función para calcular la suma
 * de 2 valores.
 *
 * @param: array con valores a calcular
 *
 * @return: resultado de la suma
 */
function resultSum(numVal) {
  return numVal[0] + numVal[1];
}

/*
 * Función para calcular la resta
 * de 2 valores.
 *
 * @param: array con valores a calcular
 *
 * @return: resultado de la resta
 */
function resultRest(numVal) {
  return numVal[0] - numVal[1];
}

/*
 * Función para calcular la multiplicación
 * de 2 valores.
 *
 * @param: array con valores a calcular
 *
 * @return: resultado de la multiplicación
 */
function resultMult(numVal) {
  return numVal[0] * numVal[1];
}

/*
 * Función para calcular la división
 * de 2 valores.
 *
 * @param: array con valores a calcular
 *
 * @return: resultado de la división
 */
function resultDiv(numVal) {
  return numVal[0] / numVal[1];
}

switch (valoration) {
  case 0:
    console.log("You haven't inserted any value.");
    break;
  case 1:
    console.log("Only the first value was a number.");
    arrayResults[0] = resultRootSquare(numberOne);
    arrayResults = formatNumberArray(1, arrayResults);
    messageFinal(1, arrayResults);
    break;
  case 2:
    console.log("Only the second value was a number.");
    arrayResults[0] = resultRootSquare(numberTwo);
    arrayResults = formatNumberArray(1, arrayResults);
    messageFinal(1, arrayResults);
    break;
  case 3:
    arrayResults[0] = resultSum(arrayNumbers);
    arrayResults[1] = resultRest(arrayNumbers);
    arrayResults[2] = resultMult(arrayNumbers);
    arrayResults[3] = resultDiv(arrayNumbers);
    arrayResults = formatNumberArray(2, arrayResults);
    messageFinal(2, arrayResults);
    break;
  case 4:
    console.log("Any of the two values were a number.");
    break;
  default:
    break;
}

/*
 * Función para valorar si el dato pasado
 * es un número o no (NaN).
 *
 * @param: valor a analizar
 *
 * @return: boolean para designar si el valor era NaN o no.
 */
function valorationNumber(numVal) {
  if (Number.isNaN(numVal)) {
    return false;
  }
  return true;
}

/* Función para analizar el array con datos
 * dependiendo de la longitud (length) del valor
 * y si no es un número (isNaN).
 *
 * CASE 0: sin valores = devuelve "0"* CASE 1: solo primer valor = devuelve "1
 * CASE 2: solo segundo valor = devuelve "2"
 * CASE 3: los 2 valores = devuelve "3"
 * CASE 4: ningún dato es numérico = devuelve "4"
 *
 * @param: array con datos obtenidos por prompt
 *
 * @return: valor para indicar el caso (según lo indicado antes)
 */
function arrayAnalize(arrNumbers) {
  let valorationArrayAnalize = 0;
  const valorationNumberOne = valorationNumber(arrNumbers[0]);
  const valorationNumberTwo = valorationNumber(arrNumbers[1]);

  if (
    arrNumbers[0].toString().length > 0 &&
    arrNumbers[1].toString().length < 1
  ) {
    if (valorationNumberOne) {
      valorationArrayAnalize = 1;
    } else {
      valorationArrayAnalize = 5;
    }
  } else if (
    arrNumbers[0].toString().length < 1 &&
    arrNumbers[1].toString().length > 0
  ) {
    if (valorationNumberTwo) {
      valorationArrayAnalize = 2;
    } else {
      valorationArrayAnalize = 6;
    }
  } else if (
    arrNumbers[0].toString().length > 0 &&
    arrNumbers[1].toString().length > 0
  ) {
    if (valorationNumberOne && valorationNumberTwo) {
      valorationArrayAnalize = 3;
    } else if (!valorationNumberOne && valorationNumberTwo) {
      valorationArrayAnalize = 2;
    } else if (valorationNumberOne && !valorationNumberTwo) {
      valorationArrayAnalize = 1;
    } else if (!valorationNumberOne && !valorationNumberTwo) {
      valorationArrayAnalize = 4;
    }
  }

  return valorationArrayAnalize;
}

valoration = arrayAnalize(arrayNumbers);

// module.exports = nombre_de_la_función;
module.exports = resultRootSquare;
module.exports = resultSum;
module.exports = resultRest;
module.exports = resultMult;
module.exports = resultDiv;
module.exports = formatNumberArray;
module.exports = valorationNumber;
