/* Lo han contratado para escribir un programa que inscribirá a los corredores para la carrera y les dará instrucciones 
el día de la carrera.

Como línea de tiempo, el registro se vería así:cronograma de registro

Así es como funciona nuestro registro. Hay corredores adultos (mayores de 18 años) y corredores jóvenes (menores de 18 años). 
Pueden registrarse temprano o tarde. A los corredores se les asigna un número de carrera y una hora de inicio 
en función de su edad e inscripción.

Número de carrera:

Los primeros adultos reciben un número de carrera igual o superior a 1000.
Todos los demás reciben un número por debajo de 1000.
Hora de inicio:

Los inscritos adultos corren a las 9:30 a. m. o a las 11:00 a. m.
Los adultos tempranos corren a las 9:30 am.
Adultos tarde corren a las 11:00 am.
Los jóvenes que se inscriban corren a las 12:30 horas (independientemente de la inscripción).
¡Pero no planeamos corredores que tengan exactamente 18 años! Nos encargaremos de eso al final del proyecto. */

/* 1. Los números de carrera se asignan al azar. Hemos proporcionado el código necesario en la parte superior del archivo. */
let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

/* 2. Cree una variable que indique si un corredor se registró temprano o no.
Establézcalo igual a un valor booleano. Cambiará esto más adelante a medida que pruebe diferentes condiciones de corredores. */
const registeredEarly = false;


/* 3. Cree una variable para la edad del corredor y configúrela como un número.
Cambiará esto más adelante a medida que pruebe diferentes condiciones de corredores. */
const age = 20;


/* 4. Cree una declaración de flujo de control que verifique si el corredor es un adulto Y se registró temprano.
Agregue 1000 a su número de carrera si esto es cierto. */
if (age > 18 && registeredEarly === true) {
    console.log(raceNumber += 1000);
}

/* 5. Cree una declaración de flujo de control separada debajo de la primera (comenzando con si nuevamente). 
Esta declaración verificará la edad y el tiempo de registro para determinar el tiempo de carrera.

Para los corredores mayores de 18 años que se registraron temprano, 
registren una declaración en la consola diciéndoles que correrán a las 9:30 am. Incluya su número de carrera. */
if (age > 18 && registeredEarly === true) {
    console.log(`You race at 9:30 am with number ${raceNumber}`);
}

/* 6. “Los adultos tardíos corren a las 11:00 am”

Como ya verificamos los primeros adultos, podemos escribir una declaración como esta: 
de lo contrario, si el corredor tiene más de 18 años Y no se registró temprano, correrá a las 11:00 a.m.

Escriba la instrucción else if correspondiente.
Dentro de eso, registre una cadena en la consola diciéndoles que competirán a las 11:00 am. Incluya su número de carrera. */
else if (age > 18 && registeredEarly === !true) {
    console.log(`You race at 11:00 am with number ${raceNumber}`);
}

/* 7 . “Los jóvenes que se registran corren a las 12:30 p. m. (independientemente del registro)”
Para las personas menores de 18 años, registre una declaración en la consola diciéndoles que competirán a las 12:30 p. m. 
Incluya su raceNumber. */
else if (age < 18) {
    console.log(`You race at 12:30 am with number ${raceNumber}`);
}

/*     9 _ ¡No te olvides de los corredores de exactamente 18 años!
Agregue una elsedeclaración que registre una declaración en la consola que le indique 
al corredor que vea el mostrador de registro. */
else {
    console.log(`See the registration desk`);
}

/* ___________________________________________CODIGO COMPLETO_________________________________________________ */
let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

const registeredEarly = true;

const age = 18;

if (age > 18 && registeredEarly === true) {
    console.log(raceNumber += 1000);
}

if (age > 18 && registeredEarly === true) {
    console.log(`You race at 9:30 am with number ${raceNumber}`);
} else if (age > 18 && registeredEarly === !true) {
    console.log(`You race at 11:00 am with number ${raceNumber}`);
} else if (age < 18) {
    console.log(`You race at 12:30 am with number ${raceNumber}`);
} else {
    console.log(`See the registration desk`);
}