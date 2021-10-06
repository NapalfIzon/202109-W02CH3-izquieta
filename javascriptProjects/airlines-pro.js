airlines();

function airlines() {
    let flights = [
        { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
        { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
        { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
        { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
        { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
        { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
        { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
        { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
        { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
        { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
        { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
    ];
    let userName;
    let averangePrice;
    let stopOverCounter = 0;
    let arrayLastFlights = [];
    let role;
    let roleVal = true;
    let adminOption;
    let adminVal;
    let addVal;
    let position = -1;

    userName = prompt('Inserte su nombre de usuario:');

    if (userName === null || userName.length === 0) {
        userName = 'Invitado/a';
    };

    console.log('Bienvenido ' + userName + '.\n');
    console.log('\n**LISTADO DE VUELOS**');

    showFlights(flights);

    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale) {
            stopOverCounter++;
        };
    };

    averangePrice = averangePriceCalculator(flights);

    console.log('\nEl precio medio de los vuelos es de ' + averangePrice + '€.');
    console.log('\nHay ' + stopOverCounter + ' vuelos que realizan escalas.');

    arrayLastFlights = lastFlightList(flights);

    console.log('\nLos destinos de los últimos 5 vuelos del día son: ' + arrayLastFlights + '.');

    do {
        role = prompt(userName + ', ¿eres Admin o User?');

        if (role === null) {
            console.log('Que tengas un buen día.');
            roleVal = true;
        } else if (role.length === 0) {
            alert('No puedes dejar este campo vacío. Por favor, vuelve a intentarlo.');
            roleVal = false;
        } else {
            if (role.toUpperCase() === 'ADMIN') {
                do {
                    adminOption = prompt('¿Qué opción deseas realizar?\n1 - Añadir un nuevo vuelo\n2 - Borrar un vuelo');
                    adminVal = checkValue(adminOption, 1);
                } while (!adminVal);

                switch (adminOption) {
                    case '1': //añadir un vuelo
                        flights = addFlights(flights);
                        addVal = window.confirm('¿Quieres añadir más vuelos?');
                        if (addVal) {
                            do {
                                flights = addFlights(flights);
                                addVal = window.confirm('¿Quieres añadir más vuelos?');
                            } while (addVal);
                        };
                        break;
                    case '2': //eliminar un vuelo
                        flights = removeFlights(flights);
                        addVal = window.confirm('¿Quieres eliminar más vuelos?');
                        if (addVal) {
                            do {
                                flights = removeFlights(flights);
                                addVal = window.confirm('¿Quieres eliminar más vuelos?');
                            } while (addVal);
                        };
                        break;
                };
                roleVal = true;
            } else if (role.toUpperCase() === 'USER') {
                do {
                    adminOption = prompt('Indica el precio de un vuelo:');
                    adminVal = checkValue(adminOption, 3);
                } while (!adminVal);

                flights = orderUserFlights(flights);
                adminOption = parseInt(adminOption);

                showOrderedFlights(adminOption, flights);

                do {
                    addVal = prompt('Indica el id del vuelo que quieres reservar:');
                    adminVal = checkValue(addVal, 3);
                } while (!adminVal);

                addVal = parseInt(addVal);

                for (let i = 0; i < flights.length; i++) {
                    if (addVal === flights[i].id) {
                        position = i;
                    };
                };

                if (position < 0) {
                    alert('No hay vuelos con el id indicado.')
                } else {
                    console.log('Gracias por su compra, vuelva pronto.');
                };

                roleVal = true;
            } else {
                alert('Rol incorrecto. Por favor, vuelve a intentarlo.');
                roleVal = false;
            };
        };
    } while (!roleVal);
};


/*
 * Función para calcular la media aritmética
 * (coste medio) de los vuelos
 * 
 * @param: array con los datos de los vuelos (incluído precio vuelos => cost)
 * 
 * @return: valor con la media aritmética de la propiedad "cost" 
 */
function averangePriceCalculator(arrayData) {
    let sumTemp = 0;
    for (let i = 0; i < arrayData.length; i++) {
        sumTemp = sumTemp + arrayData[i].cost;
    };

    sumTemp = sumTemp / arrayData.length;

    sumTemp = sumTemp.toFixed(2);

    return sumTemp;
};


/*
 * Función para crear un array con la lista
 * de destinos de los últimos 5 vuelos.
 * 
 * @param: array con los datos de los vuelos (incluído destino vuelos => to)
 * 
 * @return: array con la lista de los últimos 5 vuelos
 */
function lastFlightList(arrayData) {
    let counterTemp = 0;
    let arrayTemp = [];

    for (let i = 0; i < arrayData.length; i++) {

        if (arrayData[i].id >= 6) {
            arrayTemp[counterTemp] = arrayData[i].to;
            counterTemp++;
        };
    };

    return arrayTemp;
};


/*
 * Función para crear el array con los datos de los vuelos
 * añadidos.
 * 
 * @param: array con los datos actuales de los vuelos
 * 
 * @return: array con los vuelos originales más los añadidos
 */
function addFlights(arrayFlights) {
    let arrayTemp = [];
    let arrayFinal = [];
    let idTemp;
    let fromTemp;
    let toTemp;
    let costTemp;
    let scaleTemp;
    let val;
    let valFinal = true;

    arrayFinal = arrayFlights;

    if (arrayFlights.length >= 15) {
        alert('Ya hay 15 vuelos registrados.\nNo puedes añadir más vuelos.');
    } else {
        //pido ciudad origen
        fromTemp = prompt('Indica la ciudad de origen:');
        val = checkValue(fromTemp, 2);

        if (val) {
            fromTemp = fromTemp.charAt(0).toUpperCase() + fromTemp.slice(1);
            //pido ciudad destino
            toTemp = prompt('Indica la ciudad de destino:');
            val = checkValue(toTemp, 2);

            if (val) {
                toTemp = toTemp.charAt(0).toUpperCase() + toTemp.slice(1);
                //pido importe vuelo
                costTemp = prompt('Indica el coste del vuelo:');
                val = checkValue(costTemp, 3);

                if (val) {
                    costTemp = parseInt(costTemp);
                    //pido info escalas
                    scaleTemp = window.confirm('¿El vuelo tiene escalas?\nACEPTAR - Sí tiene escalas\nCANCELAR - No tiene escalas');
                    //genero nuevo id
                    idTemp = idCalculator(arrayFlights);
                } else {
                    valFinal = false;
                };
            } else {
                valFinal = false;
            };
        } else {
            valFinal = false;
        };
    };

    if (valFinal) {
        arrayTemp = { id: idTemp, to: toTemp, from: fromTemp, cost: costTemp, scale: scaleTemp };

        arrayFinal.push(arrayTemp);

        console.log('Vuelo registrado correctamente.');
    };

    return arrayFinal;
};


function removeFlights(arrayFlights) {
    let arrayFinal = [];
    let removeId;
    let val;
    let position;

    arrayFinal = arrayFlights;

    removeId = prompt('Indica el id del vuelo que deseas eliminar:');
    val = checkValue(removeId, 3);

    if (val) {
        removeId = parseInt(removeId);

        for (let i = 0; i < arrayFinal.length; i++) {
            if (removeId === arrayFinal[i].id) {
                position = i;
            };
        };

        if (position < 0) {
            alert('No hay vuelos con el id indicado.')
        } else {
            arrayFinal.splice(position, 1);
            console.log('Vuelo eliminado correctamente.');
        };
    };

    return arrayFinal;
};


/*
 * Función para generar un nuevo id para
 * un vuelo que añadamos
 * 
 * @param: array con los datos actuales de los vuelos
 * 
 * @return: int con id generado
 */
function idCalculator(arrayFlights) {
    let arrayIdTemp = [];
    let idFinal;

    for (let i = 0; i < arrayFlights.length; i++) {
        arrayIdTemp[i] = arrayFlights[i].id;
    };

    arrayIdTemp.join();
    arrayIdTemp.sort();
    arrayIdTemp.sort(function (a, b) {
        return a - b;
    });;

    finalPosition = arrayIdTemp.length - 1;

    idFinal = arrayIdTemp[finalPosition] + 1;

    return idFinal;
};


/*
 * Función para ordenar los vuelos desde el más caro
 * hasta el más barato
 * 
 * @param: array con los datos actuales de los vuelos
 * 
 * @return: array con los vuelos organizados según indicaciones
 */
function orderUserFlights(arrayFlights) {
    let arrayFinal = [];

    arrayFinal = arrayFlights;


    arrayFinal.join();
    arrayFinal.sort();
    arrayFinal.sort(function (a, b) {
        if (a.cost < b.cost) {
            return -1;
        };
        if (a.cost > b.cost) {
            return 1;
        };
        return 0;
    });

    return arrayFinal;
};


/*
 * Función para crear arrays con datos de vuelos, teniendo presente
 * si su precio es mayor, igual o inferior al precio indicado.
 * 
 * @param1: int con importe de referencia del vuelo a comparar
 * @param2: array con los datos de los vuelos
 */
function showOrderedFlights(price, arrayFlights) {
    let arrayUpperPrice = [];
    let arraySamePrice = [];
    let arrayLowerPrice = [];

    for (let i = 0; i < arrayFlights.length; i++) {
        if (price < arrayFlights[i].cost) {
            arrayUpperPrice.push(arrayFlights[i]);
        } else if (price === arrayFlights[i].cost) {
            arraySamePrice.push(arrayFlights[i]);
        } else if (price > arrayFlights[i].cost) {
            arrayLowerPrice.push(arrayFlights[i]);
        };
    };

    console.log('Importe indicado: ' + price + '€.');

    if (arrayUpperPrice.length < 1) {
        console.log('No hay vuelos con un precio más alto al indicado.');
    } else {
        console.log('Los vuelos con un precio más alto son:');
        showFlights(arrayUpperPrice);
    };

    if (arraySamePrice.length < 1) {
        console.log('No hay vuelos con un precio igual indicado.');
    } else {
        console.log('Los vuelos con el mismo precio son:');
        showFlights(arraySamePrice);
    };

    if (arrayLowerPrice.length < 1) {
        console.log('No hay vuelos con un precio más bajo al indicado.');
    } else {
        console.log('Los vuelos con un precio más bajo son:');
        showFlights(arrayLowerPrice);
    };
};


/*
 * Función para mostrar en pantalla un array con los datos de
 * de los vuelos de manera "friendly"
 * 
 * @param: array con los datos de los vuelos
 */
function showFlights(arrayFlights) {
    let stopOverInformation;
    let stopOverTrue = 'no realiza ninguna escala';
    let stopOverFalse = 'realiza una escala';

    for (let i = 0; i < arrayFlights.length; i++) {

        if (arrayFlights[i].scale) {
            stopOverInformation = stopOverTrue;
        } else {
            stopOverInformation = stopOverFalse;
        };
        console.log('El vuelo de id ' + arrayFlights[i].id + ' con origen ' + arrayFlights[i].from + ', y destino: ' + arrayFlights[i].to + ' tiene un coste de ' +
            arrayFlights[i].cost + '€ y ' + stopOverInformation + '.');
    };
};


/*
 * Función para valorar si la opción dada en el menú de Admin
 * es la esperada.
 * 
 * value=1 -> mira entrada de opción Admin
 * value=2 -> mira nombre ciudad
 * value=3 -> mira valor importe vuelos/id vuelo a eliminar/vuelos a ordenar
 * 
 * @param: valor recogido en el menú con un prompt
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
                if (isNaN(data)) {
                    alert('Debes escoger la opción 1 o 2.\nPor favor, vuelve a intentarlo.');
                    valoration = false;
                } else if (data <= 0 || data > 2) {
                    alert('Debes escoger la opción 1 o 2.\nPor favor, vuelve a intentarlo.');
                    valoration = false;
                };
                break;
            case 2:
                if (!isNaN(parseInt(data))) {
                    alert('Nombre ciudad incorrecto. Por favor, vuelve a intentarlo.');
                    valoration = false;
                };
                break;
            case 3:
                if (isNaN(data)) {
                    alert('Solo puedes insertar números.\nPor favor, vuelve a intentarlo.');
                    valoration = false;
                };
                break;
        };
    };

    return valoration;
};