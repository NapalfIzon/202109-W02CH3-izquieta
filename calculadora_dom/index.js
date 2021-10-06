window.onload = function () {
    let display = document.getElementsByClassName('displayNumbers');
    let ac = document.getElementsByClassName('clean');
    let erase = document.getElementsByClassName('erase');
    let division = document.getElementsByClassName('division');
    let multiplication = document.getElementsByClassName('multiplication');
    let substract = document.getElementsByClassName('substract');
    let add = document.getElementsByClassName('add');
    let equal = document.getElementsByClassName('equalSign');
    let comma = document.getElementsByClassName('comma');
    let selectedNumber = document.getElementsByClassName('number');
    let newNumber = "";
    let counterNumberDisplay = 0;
    let status = true; //boolean para indicar si borra contenido de pantalla (true) o no (false)
    let finalNumber;
    let firstNumer;
    let secondNumber;
    let showNumber;
    let actualOperation = 0; // 0: sin operación / 1: suma / 2: resta / 3: multiplicación / 4: división

    //escucha de entrada de números por pantalla
    for (let i = 0; i < selectedNumber.length; i++) {
        selectedNumber[i].addEventListener('click', function () {
            newNumber = selectedNumber[i].textContent;
            if (counterNumberDisplay < 9) {
                displayNumberScreen(display[0], newNumber);
            };
        });
    }

    //escucha de entrada de números por teclado
    document.addEventListener('keypress', function (e) {
        if (!isNaN(e.key) || e.key === ',') {
            newNumber = e.key;
            if (counterNumberDisplay < 9) {
                displayNumberScreen(display[0], newNumber);
            };
        };
    })

    //escucha de entrada de coma por pantalla
    comma[0].addEventListener('click', function () {
        newNumber = ',';
        if (counterNumberDisplay < 9) {
            displayNumberScreen(display[0], newNumber);
        };
    })

    //escucha para borrar contenido de pantalla y memoria
    ac[0].addEventListener('click', function () {
        firstNumer = 0;
        secondNumber = 0;
        counterNumberDisplay = 0;
        display[0].innerText = '0';
        actualOperation = 0;
        status = false;
    })

    //escucha para borrar contenido de pantalla
    erase[0].addEventListener('click', function () {
        if (display[0].textContent.length > 1) {
            counterNumberDisplay--;
            display[0].innerText = display[0].textContent.substring(0, display[0].textContent.length - 1);
        } else {
            display[0].innerText = '0';
        };
    })

    //escucha para ejecutar botón "suma"
    add[0].addEventListener('click', function () {
        finalNumber = convertStringToNumber(display[0].textContent);

        switch (actualOperation) {
            case 0: //no hay operación asignada todavía
                firstNumer = finalNumber;
                actualOperation = 1;
                counterNumberDisplay = 0;
                status = false;
                break;
            case 1:
                secondNumber = finalNumber;
                firstNumer = firstNumer + secondNumber;
                showNumber = firstNumer;
                showNumber = convertNumberToString(showNumber);
                display[0].innerText = showNumber;
                counterNumberDisplay = 0;
                status = false;
                break;
        }
    })

    //escucha para ejecutar botón "resta"
    substract[0].addEventListener('click', function () {
        finalNumber = convertStringToNumber(display[0].textContent);

        switch (actualOperation) {
            case 0: //no hay operación asignada todavía
                firstNumer = finalNumber;
                actualOperation = 2;
                counterNumberDisplay = 0;
                status = false;
                break;
            case 2:
                secondNumber = finalNumber;
                firstNumer = firstNumer - secondNumber;
                showNumber = firstNumer;
                showNumber = convertNumberToString(showNumber);
                display[0].innerText = showNumber;
                counterNumberDisplay = 0;
                status = false;
                break;
        }
    })

    //escucha para ejecutar botón "multiplicación"
    multiplication[0].addEventListener('click', function () {
        finalNumber = convertStringToNumber(display[0].textContent);

        switch (actualOperation) {
            case 0: //no hay operación asignada todavía
                firstNumer = finalNumber;
                actualOperation = 3;
                counterNumberDisplay = 0;
                status = false;
                break;
            case 3:
                secondNumber = finalNumber;
                firstNumer = firstNumer * secondNumber;
                showNumber = firstNumer;
                showNumber = convertNumberToString(showNumber);
                display[0].innerText = showNumber;
                counterNumberDisplay = 0;
                status = false;
                break;
        }
    })

    //escucha para ejecutar botón "división"
    division[0].addEventListener('click', function () {
        finalNumber = convertStringToNumber(display[0].textContent);

        switch (actualOperation) {
            case 0: //no hay operación asignada todavía
                firstNumer = finalNumber;
                actualOperation = 4;
                counterNumberDisplay = 0;
                status = false;
                break;
            case 4:
                if (firstNumer === 0) {
                    display[0].innerText = 'Error';
                    counterNumberDisplay = 0;
                    status = false;
                    actualOperation = 0;
                    firstNumer = 0;
                    secondNumber = 0;
                } else {
                    secondNumber = finalNumber;
                    firstNumer = firstNumer / secondNumber;
                    showNumber = firstNumer;
                    showNumber = convertNumberToString(showNumber);
                    display[0].innerText = showNumber;
                    counterNumberDisplay = 0;
                    status = false;
                }
                break;
        }
    })

    //escucha para símbolo "igual"
    equal[0].addEventListener('click', function () {
        finalNumber = convertStringToNumber(display[0].textContent);

        switch (actualOperation) {
            case 1:
                secondNumber = finalNumber;
                firstNumer = firstNumer + secondNumber;
                showNumber = firstNumer;
                showNumber = convertNumberToString(showNumber);
                display[0].innerText = showNumber;
                counterNumberDisplay = 0;
                status = false;
                actualOperation = 0;
                firstNumer = 0;
                secondNumber = 0;
                break;
            case 2:
                secondNumber = finalNumber;
                firstNumer = firstNumer - secondNumber;
                showNumber = firstNumer;
                showNumber = convertNumberToString(showNumber);
                display[0].innerText = showNumber;
                counterNumberDisplay = 0;
                status = false;
                actualOperation = 0;
                firstNumer = 0;
                secondNumber = 0;
                break;
            case 3:
                secondNumber = finalNumber;
                firstNumer = firstNumer * secondNumber;
                showNumber = firstNumer;
                showNumber = convertNumberToString(showNumber);
                display[0].innerText = showNumber;
                counterNumberDisplay = 0;
                status = false;
                actualOperation = 0;
                firstNumer = 0;
                secondNumber = 0;
                break;
            case 4:
                if (firstNumer === 0) {
                    display[0].innerText = 'Error';
                    counterNumberDisplay = 0;
                    status = false;
                    actualOperation = 0;
                    firstNumer = 0;
                    secondNumber = 0;
                } else {
                    secondNumber = finalNumber;
                    firstNumer = firstNumer / secondNumber;
                    showNumber = firstNumer;
                    showNumber = convertNumberToString(showNumber);
                    display[0].innerText = showNumber;
                    counterNumberDisplay = 0;
                    status = false;
                    actualOperation = 0;
                    firstNumer = 0;
                    secondNumber = 0;
                };
                break;
        };
    })


    function displayNumberScreen(screen, newNumber) {
        let firstNumber = screen.textContent;

        if (status) {
            if (firstNumber.charAt(0) === '0' && firstNumber.charAt(1) !== ',' && newNumber === ',') {
                screen.innerText = '0,';
                counterNumberDisplay++;
                counterNumberDisplay++;
            } else if (firstNumber.charAt(1) === ',' && newNumber !== ',') {
                screen.innerText += newNumber;
                counterNumberDisplay++;
            } else if (firstNumber.charAt(0) === '0' && firstNumber.charAt(1) !== ',' && newNumber !== '0') {
                screen.innerText = newNumber;
                counterNumberDisplay++;
            } else if (firstNumber.charAt(0) !== '0') {
                screen.innerText += newNumber;
                counterNumberDisplay++;
            };
        } else {
            if (newNumber === '0') {
                screen.innerText = '0';
                status = true;
            } else if (newNumber === ',') {
                screen.innerText = '0,';
                counterNumberDisplay++;
                counterNumberDisplay++;
                status = true;
            } else if (newNumber !== '0') {
                screen.innerText = newNumber;
                counterNumberDisplay++;
                status = true;
            };
        }
    }


    function convertStringToNumber(numberNan) {
        let numberTemp;

        numberTemp = numberNan;
        numberTemp = numberTemp.replace(',', '.');
        numberTemp = parseFloat(numberTemp);

        return numberTemp;
    };


    function convertNumberToString(numberTemp) {
        let stringTemp;

        stringTemp = numberTemp;
        stringTemp = stringTemp.toString();
        stringTemp = stringTemp.replace('.', ',');
        stringTemp = stringTemp.slice(0, 9);

        return stringTemp;
    };
}