pasapalabra();

function pasapalabra() {
    const questions = [  //status==> 0: sin uso/pasapalabra | 1: respuesta OK | 2: respuesta KO
        //primera lista preguntas
        [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
        { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
        { letter: "c", answer: "cactus", status: 0, question: "CON LA C. Planta del desierto que pincha" },
        { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
        { letter: "e", answer: "esqueleto", status: 0, question: "CON LA E. Órgano del cuerpo humano que es muy dura y de color blanco" },
        { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
        { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
        { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },
        { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
        { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
        { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },
        { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
        { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },
        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
        { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
        { letter: "p", answer: "patata", status: 0, question: "CON LA P. Tubérculo muy comido en Europa con el que se hace tortillas" },
        { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
        { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
        { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
        { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
        { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
        { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
        { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
        { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }],
        //segunda lista preguntas
        [{ letter: "a", answer: "ahorrar", status: 0, question: "CON LA A. Guardar dinero como previsión para necesidades futuras" },
        { letter: "b", answer: "beca", status: 0, question: "CON LA B. Subvención para realizar estudios o investigaciones" },
        { letter: "c", answer: "culpcfsar", status: 0, question: "CON LA C. Atribuir o echar la culpa a alguien" },
        { letter: "d", answer: "deportar", status: 0, question: "CON LA D. Desterrar a alguien de algún lugar, por lo regular extranjero, y confinarlo allí por razones políticas o como castigo" },
        { letter: "e", answer: "envoltorio", status: 0, question: "CON LA E.  Capa exterior que cubre natural o artificialmente una cosa" },
        { letter: "f", answer: "frenar", status: 0, question: "CON LA F. Moderar o parar el movimiento de algo" },
        { letter: "g", answer: "grupo", status: 0, question: "CON LA G. Pluralidad de seres o cosas que forman un conjunto" },
        { letter: "h", answer: "huelga", status: 0, question: "CON LA H. Interrupción colectiva de la actividad laboral por parte de los trabajadores con el fin de reivindicar ciertas condiciones o manifestar una protesta" },
        { letter: "i", answer: "indignar", status: 0, question: "CON LA I.  Irritar, enfadar vehementemente a alguien" },
        { letter: "j", answer: "jubilado", status: 0, question: "CON LA J. Persona que ha dejado de trabajar y percibe una pensión" },
        { letter: "k", answer: "koala", status: 0, question: "CON LA K. Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos" },
        { letter: "l", answer: "liberar", status: 0, question: "CON LA L. Hacer que alguien o algo quede libre, eximir a alguien de una obligación" },
        { letter: "m", answer: "manifestación", status: 0, question: "CON LA M. Reunión pública, generalmente al aire libre, en la que los asistentes reclaman algo o expresan su protesta por algo" },
        { letter: "n", answer: "nacionalidad", status: 0, question: "CON LA N.  Estado propio de la persona nacida o naturalizada en una nación" },
        { letter: "ñ", answer: "soñar", status: 0, question: "CONTIENE LA Ñ. Representarse en la fantasía imágenes o sucesos mientras se duerme" },
        { letter: "o", answer: "organización", status: 0, question: "CON LA O. Asociación de personas regulada por un conjunto de normas en función de determinados fines" },
        { letter: "p", answer: "promover", status: 0, question: "CON LA P. Iniciar o impulsar una idea o proyecto procurando su logro" },
        { letter: "q", answer: "delinquir", status: 0, question: "CONTIENE LA Q. Cometer delito" },
        { letter: "r", answer: "reciclar", status: 0, question: "CON LA R. Someter material usado a un proceso para que se pueda volver a utilizar" },
        { letter: "s", answer: "suprimir", status: 0, question: "CON LA S. Hacer cesar, hacer desaparecer, anular" },
        { letter: "t", answer: "tasa", status: 0, question: "CON LA T. Tributo que se impone a la utilización de ciertos servicios, o al ejercicio de ciertas actividades" },
        { letter: "u", answer: "urgencia", status: 0, question: "CON LA U. Necesidad o falta apremiante, inmediata obligación de hacer algo" },
        { letter: "v", answer: "vivienda", status: 0, question: "CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas" },
        { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Licor alcóholico que se obtiene del destilado del grano de algunas plantas" },
        { letter: "x", answer: "exaltar", status: 0, question: "CONTIENE LA X. Avivar o aumentar un sentimiento o pasión, realzar el mérito o las cualidades de alguien" },
        { letter: "y", answer: "cayuco", status: 0, question: "CONTIENE LA Y. Embarcación india de una pieza, más pequeña que la canoa, con el fondo plano, que se gobierna con el canalete" },
        { letter: "z", answer: "zoológico", status: 0, question: "CON LA Z. Lugar en que se conservan, cuidan y crían diversas especies animales con fines didácticos o de entretenimiento" }],
        //tercera lista preguntas
        [{ letter: "a", answer: "antena", status: 0, question: "CON LA A. Objeto metálico con el que se reciben señales inalámbricas" },
        { letter: "b", answer: "batman", status: 0, question: "CON LA B. Superheroe de capa negra y protector de Gotham City" },
        { letter: "c", answer: "caca", status: 0, question: "CON LA C. Palabra que dicen los niños pequeños cuando tienen que ir al baño a hacer deposiciones" },
        { letter: "d", answer: "diamante", status: 0, question: "CON LA D. Piedra preciosa que comparte similitud molecular con el carbón" },
        { letter: "e", answer: "escuela", status: 0, question: "CON LA E. Sitio donde los niños van a aprender" },
        { letter: "f", answer: "facil", status: 0, question: "CON LA F. Contrario a difícil" },
        { letter: "g", answer: "ganar", status: 0, question: "CON LA G. Acción de no perder, lo que pasaría si contestas todas las preguntas bien" },
        { letter: "h", answer: "hummus", status: 0, question: "CON LA H. Puré de garbanzos y especial muy popular en paises árabes" },
        { letter: "i", answer: "isla", status: 0, question: "CON LA I. Trozo de tierra en medio de un mar u océano donde se puede vivir" },
        { letter: "j", answer: "jarra", status: 0, question: "CON LA J. Recipiente en el cual se guardan líquidos para beber" },
        { letter: "k", answer: "kiosko", status: 0, question: "CON LA K. Lugar donde compras periódicos y revistas" },
        { letter: "l", answer: "lampara", status: 0, question: "CON LA L. Objeto que da luz y está conectada a la corriente" },
        { letter: "m", answer: "manzana", status: 0, question: "CON LA M. Fruta nomralmente roja, redonda y que ayudó a descubrir la gravedad" },
        { letter: "n", answer: "necio", status: 0, question: "CON LA N. Persona que no atiende a razones y hace cosas sin tener en cuenta el consejo de la gente" },
        { letter: "ñ", answer: "ñu", status: 0, question: "CON LA Ñ. Ave grande que no vuela y da huevos negros" },
        { letter: "o", answer: "oso", status: 0, question: "CON LA O. Mamífero grande y peludo que siempre hiberna" },
        { letter: "p", answer: "papel", status: 0, question: "CON LA P. Objeto hecho a base de celulosa donde se escribe y se hacen libros" },
        { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Leche cuajada y sólida que se le hecha a las pizzas" },
        { letter: "r", answer: "rama", status: 0, question: "CON LA R. Parte del árbol donde están las hojas" },
        { letter: "s", answer: "sol", status: 0, question: "CON LA S. Cuerpo celeste que da luz y que nos ilumina durante el día" },
        { letter: "t", answer: "tierra", status: 0, question: "CON LA T. Tercer planeta del sistema solar" },
        { letter: "u", answer: "uva", status: 0, question: "CON LA U. Fruta con la que se hace el vino" },
        { letter: "v", answer: "volcan", status: 0, question: "CON LA V. Montaña que escupe ceniza, fuego y lava" },
        { letter: "w", answer: "washington", status: 0, question: "CON LA W. Capital de Estados Unidos de América" },
        { letter: "x", answer: "xilofono", status: 0, question: "CON LA X. Instruento de viento parecido a la flauta" },
        { letter: "y", answer: "yeso", status: 0, question: "CON LA Y. MAterial de color blanco con el que se recubren las paredes" },
        { letter: "z", answer: "zorro", status: 0, question: "CON LA Z. Mamífero de color rojo muy astuto que dió nombre a una película" }]
    ];
    const end = 'end';
    const pasapalabra = 'pasapalabra';
    let userName;
    let players = [];
    let roundQuestions = [];
    let roundSelector = 0;
    let promptAnswer;
    let totalAnswers;
    let arrayPlayers = [];
    let valPlayGame = true; //para indicar si juego, si false se para el juego entero y se da ranking
    let valPlayPasapalabra;
    let valName;
    let valRound = true;
    let valPromptAnswer;


    messageConsole('intro');

    userName = generateUserName();

    messageConsole('welcomeUser', userName);

    do {
        valPlayPasapalabra = window.confirm('¿Quieres iniciar una nueva partida?');

        if (valPlayPasapalabra) {
            roundQuestions = []; //para eliminar las preguntas del anterior round
            valName = window.confirm('¿Quieres mantener tu nombre o cambiarlo?\nACEPTAR - Mantenerlo\nCANCELAR - Cambiarlo');

            if (!valName) {
                userName = generateUserName();
                messageConsole('welcomeUser', userName);
            };

            //empieza el pasapalabra
            players.push(new generatePlayerData(userName));

            if (roundSelector === 3) {
                roundSelector = 1;
            } else {
                roundSelector = roundSelector + 1;
            };

            //genero array con preguntas
            roundQuestions = arrayQuestions(questions, roundSelector);

            //reinicio de valores usados durante el juego
            valRound = true;
            totalAnswers = 0;

            messageConsole('showTime', userName);

            do {
                for (let i = 0; i < roundQuestions.length; i++) {

                    if (roundQuestions[i].status === 0) {
                        do {
                            promptAnswer = prompt(roundQuestions[i].question);
                            valPromptAnswer = checkValue(promptAnswer, 1);
                        } while (!valPromptAnswer);


                        promptAnswer = promptAnswer.toLowerCase();
                        if (promptAnswer.toLowerCase() === end) {
                            i = roundQuestions.length;
                            messageConsole('finishGame', userName);
                            messageConsole('finalPunctuation', players[players.length - 1]);
                            valRound = false;
                        } else if (promptAnswer.toLowerCase() !== pasapalabra) {
                            if (promptAnswer === roundQuestions[i].answer) {
                                alert(promptAnswer + ', la respuesta es correcta!');
                                roundQuestions[i].status = 1;
                                players[players.length - 1].answerOK = players[players.length - 1].answerOK + 1;
                                totalAnswers++;
                            } else {
                                alert('¡Que lástima, tu respuesta es incorrecta!\nLa respuesta correcta es ' + roundQuestions[i].answer + '.');
                                roundQuestions[i].status = 2;
                                players[players.length - 1].answerKO = players[players.length - 1].answerKO + 1;
                                totalAnswers++;
                            };
                        };
                    };
                };

                if (promptAnswer.toLowerCase() !== end) {
                    valRound = checkStatusRosco(players[players.length - 1]);
                };

                if (totalAnswers === 27) {
                    players[players.length - 1].roscoAll = true;

                    messageConsole('endQuestions', userName);
                    messageConsole('finalPunctuation', players[players.length - 1]);
                };
            } while (valRound);
        } else {
            if (players.length > 0) {
                arrayPlayers = generateRanking(players);
                messageConsole('ranking', arrayPlayers);
            };
            messageConsole('farewell', userName);
            valPlayGame = false;  // <==IMPORTANTE PARA SALIR DEL PROGRAMA
        };
    } while (valPlayGame);
}


/*
 * Función para registrar el nombre del jugador.
 *
 * @return: (string) nombre del jugador
 */
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
 *Función que dará mensajes de bienvenida, dependiendo
 * el caso.
 * 
 * @param1: string - indica la opción del switch, dependiendo el caso
 * @param2: valor extra (en caso de necesitarse)
 */
function messageConsole(value, data1) {
    switch (value) {
        case 'intro':
            console.log('*****************');
            console.log('** PASAPALABRA **');
            console.log('*****************');
            break;
        case 'welcomeUser':
            console.log('Hola ' + data1 + ' y bienvenido a Pasapalabra.');
            break;
        case 'showTime':
            console.log('Muy bien ' + data1 + ', vamos a jugar!');
            break;
        case 'finishGame':
            console.log('Muy bien ' + data1 + ', acabamos el juego aquí.');
            console.log('Ahora vamos a ver las preguntas que has acertado.');
            console.log('Tu puntuación queda así:');
            break;
        case 'endQuestions':
            console.log('Muy bien ' + data1 + ', has conseguido contestar todas las preguntas. ¡Felicidades!');
            console.log('Ahora vamos a ver las preguntas que has acertado.');
            console.log('Tu puntuación ha quedado así:');
            break;
        case 'finalPunctuation':
            let valTemp;

            if (data1.roscoAll) {
                valTemp = 'No';
            } else {
                valTemp = 'Sí';
            }
            console.log('Respuestas correctas: ' + data1.answerOK);
            console.log('Respuestas falladas: ' + data1.answerKO);
            console.log('¿Quedaron preguntas por contestar? ' + valTemp);
            if (data1.roscoAll) {
                console.log('Como has contestado todas las preguntas, entrarás en nuestro ranking!');
            } else {
                console.log('Como no has contestado todas las preguntas, no entrarás en nuestro ranking.');
            };
            break;
        case 'ranking':
            console.log('El ranking de jugadores es el siguiente:');
            console.table(data1);
            break;
        case 'farewell':
            console.log('Hasta la próxima ' + data1 + ', esperamos verte pronto!');
            break;
    };
};


/*
 *Función que genera el objeto "jugador"
 *
 * objeto = {
 *      playerName: (string) nombre jugador
 *      answerOK: (int) respuestas correctas
 *      answerKO: (int) respuesta falladas
 *      roscoAll: (boolean) indica si se han respuesto todas las preguntas del rosco
 * }
 *   
 * @param: (string) - nombre de jugador
 */
function generatePlayerData(userName) {
    this.playerName = userName;
    this.answerOK = 0;
    this.answerKO = 0;
    this.roscoAll = false;
}


/*
 *Función para generar las preguntas que se usarán en la
 *ronda actual.
 *
 * @param1: array con las preguntas
 * @param2: int con número de la tanda de preguntas a escoger
 * 
 * @return: (array) preguntas a jugar
 */
function arrayQuestions(questions, roundSelector) {
    let arrayTemp = [];
    let ronda = roundSelector - 1;

    for (let i = 0; i < questions[ronda].length; i++) {
        arrayTemp[i] = questions[ronda][i];
    };

    return arrayTemp;
}

/*
 * Función para valorar si se han contestado todas las preguntas
 * del pasapalabra o no
 * 
 * @param: (array) datos del jugador actual
 * 
 * @return: (boolean) indica si faltan preguntas por contestar (true) o no (false)
 */
function checkStatusRosco(playerData) {
    let valoration = true;
    let totalAnswers;

    totalAnswers = playerData.answerOK + playerData.answerKO;

    if (totalAnswers === 27) {
        valoration = false;
    };

    return valoration;
}


/*
 * Función para generar una lista con el ranking de jugadores
 * por puntos. Solo entrarán en el ranking los jugadores que
 * tengas el roscoAll = true;
 * 
 * @param: (obj) datos de jugadores
 * 
 * @return:(array) ranking de jugadores ==> [0]:puntuación, [1]: nombre del jugador
 */
function generateRanking(objectPlayers) {
    let arrayTemp = [];
    let temp = {};

    for (let i = 0; i < objectPlayers.length; i++) {

        if (objectPlayers[i].roscoAll) {
            temp = { Puntuacion: objectPlayers[i].answerOK, Jugador: objectPlayers[i].playerName };
            arrayTemp.push(temp);
        };
    };

    arrayTemp.join();
    arrayTemp.sort();
    arrayTemp.sort(function (a, b) {
        return b.Puntuacion - a.Puntuacion;
    });

    return arrayTemp;
}


/*
 * Función para valorar si la opción dada en el prompt
 * es la esperada.
 * 
 * value=1 -> mira nombre usuario/respuesta pasapalabra
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