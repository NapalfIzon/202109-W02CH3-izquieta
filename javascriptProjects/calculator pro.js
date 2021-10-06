calculatorPro();

function calculatorPro() {
    let arrayNumbers = [];
    let arrayResults = [];
    let newNumber;
    let valueValoration = false;
    let numValoration;
    let i = 0;

    do {
        newNumber = prompt('Enter a number or press cancel to stop');

        valueValoration = valueAnalize(newNumber);

        if (valueValoration) {
            numValoration = valorationNumber(newNumber);

            if (numValoration) {
                console.log('Inserted value: ' + newNumber);
                arrayNumbers.push(newNumber);
            } else {
                alert('Not a number. Try again.');
            };
        } else {
            if (arrayNumbers.length == 1) {
                arrayResults[0] = resultRootSquare(arrayNumbers[0]);
                arrayResults = formatNumberArray(1, arrayResults);
                messageFinal(1, arrayResults);
            } else {
                arrayResults[0] = resultSum(arrayNumbers);
                arrayResults[1] = resultRest(arrayNumbers);
                arrayResults[2] = resultMult(arrayNumbers);
                arrayResults[3] = resultDiv(arrayNumbers);
                arrayResults = formatNumberArray(2, arrayResults);
                messageFinal(2, arrayResults);
            };
        };
    } while (valueValoration);
};


/*
 * Función para valorar si se introdujo
 * un valor en el prompt de "newNumber"
 * 
 * @param: valor a analizar
 * 
 * @return: boolean para designar si hay valor (true) o no (false).
 */
function valueAnalize(numVal) {
    let valorationNumVal;

    if (numVal === null) {
        valorationNumVal = false;
    } else {
        if (numVal.toString().length > 0) {
            valorationNumVal = true;
        } else {
            valorationNumVal = false;
        };
    };

    return valorationNumVal;
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
 * de los valores en arrayNumbers.
 * 
 * @param: array con valores a calcular
 * 
 * @return: resultado de la suma
 */
function resultSum(numVal) {
    let numFinal = 0;

    for (let i = 0; i < numVal.length; i++) {
        numFinal = numFinal + numVal[i];
    };

    return numFinal;
};


/*
 * Función para calcular la resta
 * de los valores en arrayNumbers.
 * 
 * @param: array con valores a calcular
 * 
 * @return: resultado de la resta
 */
function resultRest(numVal) {
    let numFinal = numVal[0];

    for (let i = 1; i < numVal.length; i++) {
        numFinal = numFinal - numVal[i];
    };

    return numFinal;
};


/*
 * Función para calcular la multiplicación
 * de los valores en arrayNumbers.
 * 
 * @param: array con valores a calcular
 * 
 * @return: resultado de la multiplicación
 */
function resultMult(numVal) {
    let numFinal = numVal[0];

    for (let i = 1; i < numVal.length; i++) {
        numFinal = numFinal * numVal[i];
    };

    return numFinal;
};


/*
 * Función para calcular la división
 * de los valores en arrayNumbers.
 * 
 * @param: array con valores a calcular
 * 
 * @return: resultado de la división
 */
function resultDiv(numVal) {
    let numFinal = numVal[0];

    for (let i = 1; i < numVal.length; i++) {
        numFinal = numFinal / numVal[i];
    };

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
 * @param1: valor para indicar si habrá 1 o varios valores
 * @param2: array con valores a estudiar
 * 
 * @return: array con valores tratados (en caso que hubiese hecho falta)
 */
function formatNumberArray(valoration, arrNumbers) {
    let arrTemp = [];

    if (valoration == 1) {
        if (arrNumbers[0].toString().length > 4) {
            arrTemp[0] = arrNumbers[0].toFixed(3);
        } else {
            arrTemp[0] = arrNumbers[0];
        };
    } else if (valoration == 2) {
        for (let i = 0; i < arrNumbers.length; i++) {
            if (arrNumbers[i].toString().length > 4) {
                arrTemp[i] = arrNumbers[i].toFixed(3);
            } else {
                arrTemp[i] = arrNumbers[i]
            };
        };
    };

    return arrTemp;
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
function messageFinal(valoration, arrFinal) {
    console.log('Results:');

    switch (valoration) {
        case 1:
            console.log('The result of the root square is ' + arrFinal[0]);
            launchCalculatorPro();
            break;
        case 2:
            console.log('The result of the sum is ' + arrFinal[0]);
            console.log('The result of the rest is ' + arrFinal[1]);
            console.log('The result of the mult is ' + arrFinal[2]);
            console.log('The result of the div is ' + arrFinal[3]);
            launchCalculatorPro();
            break;
    };
};


/*
 * Función para preguntar si se siguen tomando datos
 * 
 * CASE 1: se vuelve a lanzar la función "calculatorPro"
 * CASE 2: se detiene el programa
 */
function launchCalculatorPro() {
    let checkResult = window.confirm('Do you want to keep giving numbers?');

    switch (checkResult) {
        case true:
            calculatorPro();
            break;
        case false:
            console.log('Bye');
            break;
    };
};