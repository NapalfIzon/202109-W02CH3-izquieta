let arrayNumbers = [];
let arrayResults = [];
let valoration;
let numberOne = parseFloat(prompt('Insert first number:'));
let numberTwo = parseFloat(prompt('Insert second number:'));
arrayNumbers.push(numberOne);
arrayNumbers.push(numberTwo);

valoration = arrayAnalize(arrayNumbers);

switch (valoration) {
	case 0:
		console.log('You haven\'t inserted any value.');
		break;
	case 1:
        console.log("Only the first value was a number.");
        arrayResults[0] = resultRootSquare(numberOne);
        arrayResults = formatNumberArray(1,arrayResults);
        messageFinal(1,arrayResults);
		break;
	case 2:
		console.log("Only the second value was a number.");
        arrayResults[0] = resultRootSquare(numberTwo);
        arrayResults = formatNumberArray(1,arrayResults);
        messageFinal(1,arrayResults);
		break;
	case 3:
        arrayResults[0] = resultSum(arrayNumbers);
        arrayResults[1] = resultRest(arrayNumbers);
        arrayResults[2] = resultMult(arrayNumbers);
        arrayResults[3] = resultDiv(arrayNumbers);
        arrayResults = formatNumberArray(2,arrayResults);
		messageFinal(2,arrayResults);
		break;
	case 4:
		console.log("Any of the two values were a number.");
		break;
};


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
	let valoration = 0;
	let valorationNumberOne = valorationNumber(arrNumbers[0]);
	let valorationNumberTwo = valorationNumber(arrNumbers[1]);

	if (arrNumbers[0].toString().length>0 && arrNumbers[1].toString().length<1) {
		if (valorationNumberOne) {
			valoration=1;
		} else {
			valoration=5;
		};			
	} else if (arrNumbers[0].toString().length<1 && arrNumbers[1].toString().length>0) {
		if (valorationNumberTwo) {
			valoration=2;
		} else {
			valoration=6;
		};
	} else if (arrNumbers[0].toString().length>0 && arrNumbers[1].toString().length>0) {
		if (valorationNumberOne && valorationNumberTwo) {
			valoration=3;
		} else if (!valorationNumberOne && valorationNumberTwo) {
			valoration=2;
		} else if (valorationNumberOne && !valorationNumberTwo) {
			valoration=1;
		} else if (!valorationNumberOne && !valorationNumberTwo) {
			valoracion=4;
		};
	};

	return valoration;
};

    /*
     * Función para valorar si el dato pasado
     * es un número o no (NaN).
     * 
     * @param: valor a analizar
     * 
     * @return: boolean para designar si el valor era NaN o no.
     */
function valorationNumber(numVal) {
	if (isNaN(numVal)) {
		return false;
	} else {
		return true
	};
};


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
function messageFinal(valoration,arrFinal) {
    console.log('Results:');

    switch (valoration) {
        case 1:
            console.log('The result of the root square is ' + arrFinal[0]);
            break;
        case 2:
            console.log('The result of the sum is ' + arrFinal[0]);
            console.log('The result of the rest is ' + arrFinal[1]);
            console.log('The result of the mult is ' + arrFinal[2]);
            console.log('The result of the div is ' + arrFinal[3]);
            break;
    };
};


    /*
     * Función para calcular la raíz cuadrada
     * de un valor.
     * 
     * @param: valor calcular
     * 
     * @return: resultado de la raíz cuadrada
     */
function resultRootSquare(numVal) {
    let numFinal;

    numFinal = Math.sqrt(numVal);

    return numFinal;
};


    /*
     * Función para calcular la suma
     * de 2 valores.
     * 
     * @param: array con valores a calcular
     * 
     * @return: resultado de la suma
     */
function resultSum(numVal) {
    let numFinal;

    numFinal = numVal[0] + numVal[1];

    return numFinal;
};


    /*
     * Función para calcular la resta
     * de 2 valores.
     * 
     * @param: array con valores a calcular
     * 
     * @return: resultado de la resta
     */
function resultRest(numVal) {
    let numFinal;

    numFinal = numVal[0] - numVal[1];

    return numFinal;
};


    /*
     * Función para calcular la multiplicación
     * de 2 valores.
     * 
     * @param: array con valores a calcular
     * 
     * @return: resultado de la multiplicación
     */
function resultMult(numVal) {
    let numFinal;

    numFinal = numVal[0] * numVal[1];

    return numFinal;
};


    /*
     * Función para calcular la división
     * de 2 valores.
     * 
     * @param: array con valores a calcular
     * 
     * @return: resultado de la división
     */
function resultDiv(numVal) {
    let numFinal;

    numFinal = numVal[0] / numVal[1];

    return numFinal;
};


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
function formatNumberArray (valoration,arrNumbers) {
    let arrTemp = [];

    if (valoration==1) {
        if (arrNumbers[0].toString().length>4){
            arrTemp[0] = arrNumbers[0].toFixed(3);
        } else {
            arrTemp[0] = arrNumbers[0];
        };
    } else if (valoration==2) {
        for (let i=0; i<arrNumbers.length; i++) {
            if (arrNumbers[i].toString().length>4) {
                arrTemp[i] = arrNumbers[i].toFixed(3);
            } else {
                arrTemp[i] = arrNumbers[i]
            };            
        };
    };

    return arrTemp;
};