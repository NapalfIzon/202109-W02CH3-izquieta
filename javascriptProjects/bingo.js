bingo();

function bingo() {
    //zona de variables
    let userName;
    let playBingoCard;
    let bingoCard = [];
    let arrayRanking = [];
    let valPlayGame = true;
    let valRound = true;
    let valTombolaNumber = [];
    let valBingoCardNumbers = false;
    let askName;
    let askTombola;
    let askBingoCard = false;
    let changeBingoCard = true;
    let tombola = [];
    let bingoName = ['B', 'I', 'N', 'G', 'O'];
    let position;
    let turnCounter;
    //zona de variables

    tombola = generateTombola();

    messageConsole('intro');

    userName = generateUserName();

    messageConsole('welcomeUser', userName);

    do {
        playBingoCard = window.confirm('¿Quieres iniciar una nueva partida?');

        if (playBingoCard) {

            askName = window.confirm('¿Quieres mantener tu nombre o cambiarlo?\nACEPTAR - Mantenerlo\nCANCELAR - Cambiarlo');

            if (!askName) {
                userName = generateUserName();
                messageConsole('welcomeUser', userName);
            };

            //aquí comienza el juego
            bingoCard.push(new generateBingoCard(userName));
            messageConsole('showBingoCard', bingoCard[bingoCard.length - 1].numsCard);

            //aquí reinicio los valores modificables de la anterior partida
            valRound = true;
            turnCounter = 75;
            valBingoCardNumbers = false;
            tombola = generateTombola();

            do {
                askBingoCard = window.confirm(userName + ',¿Quieres mantener este cartón de bingo?\nACEPTAR - SÍ\nCANCELAR - NO');

                if (askBingoCard) {
                    changeBingoCard = false;
                } else {
                    bingoCard.pop();
                    bingoCard.push(new generateBingoCard(userName));
                    messageConsole('showBingoCard', bingoCard[bingoCard.length - 1].numsCard);
                    changeBingoCard = true;
                };
            } while (changeBingoCard);

            alert('Muy bien ' + userName + ', vamos a jugar!');

            do {
                if (bingoCard[bingoCard.length - 1].full) {
                    console.log('Ya has jugado todos los números de este cartón.');
                    valRound = false;  // <==IMPORTANTE PARA SALIR DEL BUCLE DE JUEGO
                } else {
                    askTombola = window.confirm('Quieres sacar un nuevo número de la tómbola?\nACEPTAR - SÍ\nCANCELAR - NO');

                    if (askTombola) {
                        tombola = generateTombolaNumber(tombola);
                        alert(tombola[1] + ', ha salido el ' + tombola[1] + '.');
                        turnCounter--;
                        valTombolaNumber = checkTombolaNumber(tombola[1], bingoCard[bingoCard.length - 1].numsCard);

                        if (valTombolaNumber[0]) {
                            position = bingoName[valTombolaNumber[1]];
                            bingoCard[bingoCard.length - 1].numsCard[position] = 'x';
                            messageConsole('numberChecked', bingoCard[bingoCard.length - 1].numsCard);
                            valBingoCardNumbers = checkBingoCardNumbers(bingoCard[bingoCard.length - 1].numsCard);
                        };

                        if (valBingoCardNumbers) {
                            alert('¡¡¡BINGO!!!');
                            messageConsole('bingo', turnCounter);
                            bingoCard[bingoCard.length - 1].points = turnCounter;
                            valRound = false;
                        };
                    } else {
                        messageConsole('noMoreTurns', bingoCard[bingoCard.length - 1].numsCard);
                        valRound = false;
                    };
                };
            } while (valRound);
        } else {
            arrayRanking = generateRanking(bingoCard);
            messageConsole('ranking', arrayRanking);
            messageConsole('farewell', userName);
            valPlayGame = false;  // <==IMPORTANTE PARA SALIR DEL PROGRAMA
        };

    } while (valPlayGame);
}

/*
 *Función para generar todos los números de la tómbola
 *
 *@return: devuelve un array bidimencional, donde [0] están los 75 números
 *         de la tómbola, y [1] el espacio para saber el número que ha salido
 *         (de base es 0)
 */
function generateTombola() {
    let tombola = [];
    let arrayTemp = [];

    for (let t = 0; t < 75; t++) {
        arrayTemp[t] = t + 1;
    };

    tombola.push(arrayTemp);
    tombola.push('0');

    return tombola;
}


/*
 *Función que dará mensajes de bienvenida, dependiendo
 * el caso.
 * 
 * @param1: string - indica la opción del switch, dependiendo el caso
 * @param2: valor extra (en caso de necesitarse)
 */
function messageConsole(value, data1) {
    switch (value) {
        case 'intro':
            console.log(' _     _                   \n' +
                '| |   (_)                  \n' +
                '| |__  _ _ __   __ _  ___  \n' +
                '| \'_ \\| | \'_ \\ / _` |/ _ \\ \n' +
                '| |_) | | | | | (_| | (_) |\n' +
                '|_.__/|_|_| |_|\\__, |\\___/ \n' +
                '                __/ |      \n' +
                '               |___/       ');
            break;
        case 'welcomeUser':
            console.log('Hola ' + data1 + ', esperamos que te diviertas.');
            break;
        case 'farewell':
            console.log('Hasta la próxima ' + data1 + ', esperamos verte pronto!');
            break;
        case 'noMoreTurns':
            console.log('Hasta aquí has llegado.')
            console.log('Tu cartón de bingo ha quedado así: ');
            showBingoCard(data1);
            break;
        case 'showBingoCard':
            console.log('Esta es tu cartón de bingo: ');
            showBingoCard(data1);
            break;
        case 'numberChecked':
            console.log('Ha habido una coincidencia! Tu cartón de bingo ha quedado así:');
            showBingoCard(data1);
            break;
        case 'bingo':
            console.log('Has conseguido hacer "BINGO"!');
            console.log('Tu puntuación final es de ' + data1 + ' puntos.');
            break;
        case 'ranking':
            console.log('El ranking de jugadores es el siguiente:');
            console.table(data1);
            break;
    };
}


function generateUserName() {
    let name;
    let valUserName = false;

    do {
        name = prompt('Inserte su nombre de usuario:');
        valUserName = checkValue(name, 1);
    } while (!valUserName);

    return name;
}


/*
 * Función para generar el objeto que irá dentro
 * del array "bingoCard"
 * 
 * objeto = {
 *      numsCard: [array números cartón bingo],
 *      numsCardBackup: [array números cartón bingo],
 *      playerName: (string) userName,
 *      line: (boolean) - si ha hecho linea,
 *      full: (boolean) - si todos los números han sido seleccionados,
 *      points: (int) - para ir contando los puntos para el ranking
 * }
 * 
 * @param: (string) - nombre de jugador
 */
function generateBingoCard(userName) {
    this.numsCard = generateRandomNumbers();
    this.numsCardBackup = this.numsCard;
    this.playerName = userName;
    this.line = false;
    this.full = false;
    this.points = 0
}


/*
 * Función para generar el array con los números
 * del cartón de bingo 
 */
function generateRandomNumbers() {
    let numTemp;
    let arrayTemp = [];
    let objectTemp = {};
    let valNumArray = true;
    let valFinal = true;
    let min = Math.ceil(0.95);
    let max = Math.floor(75);

    arrayTemp[0] = Math.floor(Math.random() * (max - min) + min);

    do {
        numTemp = Math.floor(Math.random() * (max - min) + min);

        valNumArray = arrayTemp.includes(numTemp);

        if (!valNumArray) {
            arrayTemp.push(numTemp);
        };

        if (arrayTemp.length >= 5) { //número "mayor que" determinará cantidad de números generados
            valFinal = false;
        };

    } while (valFinal);

    arrayTemp.join();
    arrayTemp.sort();
    arrayTemp.sort(function (a, b) {
        return a - b;
    });

    objectTemp = {
        B: arrayTemp[0],
        I: arrayTemp[1],
        N: arrayTemp[2],
        G: arrayTemp[3],
        O: arrayTemp[4]
    };

    return objectTemp;
}


/*
 * Función para mostrar en pantalla la tabla de bingo
 * 
 * @param: objeto con los números de la tabla
 */
function showBingoCard(objectBingoCard) {
    let arrayTemp = [];

    arrayTemp[0] = objectBingoCard;

    console.table(arrayTemp[0]);
}


/*
 * Función para generar un número sacado del array de
 * la tómbola.
 * 
 * @param: array con los números de la tómbola y número anterior
 *         seleccionado
 * 
 * @return: (int) número de la tómbola seleccionado
 */
function generateTombolaNumber(tombola) {
    let numTemp;
    let valNum;
    let valoration;
    let min = Math.ceil(0.95);
    let max = Math.floor(75);

    do {
        numTemp = Math.floor(Math.random() * (max - min) + min);
        valNum = tombola[0].includes(numTemp);

        //hacer refacto
        if (valNum) {
            for (let i = 0; i < 75; i++) {
                if (tombola[0][i] === numTemp) {
                    tombola[0][i] = 'x';
                };

                tombola[1] = numTemp;
            };

            valoration = false;
        } else {
            valoration = true;
        };
    } while (valoration);

    return tombola;
}


/*
 * Función para indicar si el número de la tómbola coincide
 * con alguno de los billetes de la carta de bingo
 * 
 * @param1: (int) número que salió en la tómbola
 * @param2: (obj) números de la carta de bingo
 * 
 * @return: (array) indica si número coindice ([0]) y en que posición ([1] - "0" si no hay posición)
 */
function checkTombolaNumber(tombolaNumber, objectBingoCardNumbers) {
    let valoration = [];
    let arrayTemp = [];

    arrayTemp = [
        arrayTemp[0] = objectBingoCardNumbers.B,
        arrayTemp[1] = objectBingoCardNumbers.I,
        arrayTemp[2] = objectBingoCardNumbers.N,
        arrayTemp[3] = objectBingoCardNumbers.G,
        arrayTemp[4] = objectBingoCardNumbers.O
    ];

    if (arrayTemp.includes(tombolaNumber)) {
        for (let i = 0; i < arrayTemp.length; i++) {
            if (arrayTemp[i] === tombolaNumber) {
                valoration[0] = true;
                valoration[1] = i;
            };
        };
    } else {
        valoration[0] = false;
        valoration[1] = 0;
    };

    return valoration;
}


/*
 * Función para indicar si hay bingo (todos los número seleccionados)
 * 
 * @param2: (obj) números de la carta de bingo
 * 
 * @return: (boolean) indica si hay bingo (true) o no
 */
function checkBingoCardNumbers(objectBingoCardNumbers) {
    let valoration;
    let arrayTemp = [];
    let counter = 0;

    arrayTemp = [
        arrayTemp[0] = objectBingoCardNumbers.B,
        arrayTemp[1] = objectBingoCardNumbers.I,
        arrayTemp[2] = objectBingoCardNumbers.N,
        arrayTemp[3] = objectBingoCardNumbers.G,
        arrayTemp[4] = objectBingoCardNumbers.O
    ];

    for (let i = 0; i < arrayTemp.length; i++) {
        if (arrayTemp[i] === 'x') {
            counter++;
        };
    };

    if (counter === 5) {
        valoration = true;
    } else {
        valoration = false;
    };

    return valoration;
}


/*
 * Función para generar una lista con el ranking de jugadores
 * por puntos. Solo entrarán en el ranking los jugadores que
 * hayan hecho bingo.
 * 
 * @param: (obj) datos de los cartones jugados
 * 
 * @return:(array) ranking de jugadores ==> [0]:puntuación, [1]: nombre del jugador
 */
function generateRanking(objectBingoCards) {
    let arrayTemp = [];
    let temp = {};

    for (let i = 0; i < objectBingoCards.length; i++) {

        if (objectBingoCards[i].points !== 0) {
            temp = { Puntuacion: objectBingoCards[i].points, Jugador: objectBingoCards[i].playerName };
            arrayTemp.push(temp);
        };
    };

    arrayTemp.join();
    arrayTemp.sort();
    arrayTemp.sort(function (a, b) {
        return a[0] - b[0];
    });

    return arrayTemp;
}


/*
 * Función para valorar si la opción dada en el prompt
 * es la esperada.
 * 
 * value=1 -> mira nombre usuario
 * 
 * 
 * @param1: valor recogido en el menú con un prompt
 * @param2: int - indica origen del dato
 * 
 * @return: boolean indicando si el valor es OK (true) o no (false)
 */
function checkValue(data, value) {
    let valoration = true;

    if (data === null) {
        alert('No puedes dejar este campo vacío. Por favor, vuelve a intentarlo.');
        valoration = false;
    } else if (data.length === 0) {
        alert('No puedes dejar este campo vacío. Por favor, vuelve a intentarlo.');
        valoration = false;
    } else {
        switch (value) {
            case 1:
                if (!isNaN(data)) {
                    alert('Debes ingresar un nombre correcto (no números).\nPor favor, vuelve a intentarlo.');
                    valoration = false;
                };
                break;
        };
    };

    return valoration;
}