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
    let stopOverInformation;
    let stopOverTrue = 'no realiza ninguna escala';
    let stopOverFalse = 'realiza una escala';
    let averangePrice;
    let stopOverCounter = 0;
    let arrayLastFlights = [];

    userName = prompt('Inserte su nombre de usuario:');

    if (userName === null || userName.length === 0) {
        userName = 'Invitado/a';
    };

    console.log('Bienvenido ' + userName + '.\n');
    console.log('\n**LISTADO DE VUELOS**');

    for (let i = 0; i < flights.length; i++) {

        if (flights[i].scale) {
            stopOverInformation = stopOverTrue;
            stopOverCounter++;
        } else {
            stopOverInformation = stopOverFalse;
        };

        console.log('El vuelo con origen ' + flights[i].from + ', y destino: ' + flights[i].to + ' tiene un coste de ' +
            flights[i].cost + '€ y ' + stopOverInformation + '.');
    };

    averangePrice = averangePriceCalculator(flights);

    console.log('\nEl precio medio de los vuelos es de ' + averangePrice + '€.');
    console.log('\nHay ' + stopOverCounter + ' vuelos que realizan escalas.');

    arrayLastFlights = lastFlightList(flights);

    console.log('\nLos destinos de los últimos 5 vuelos del día son: ' + arrayLastFlights + '.');
};