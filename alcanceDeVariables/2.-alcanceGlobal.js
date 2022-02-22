/* Alcance global

El ámbito es el contexto en el que se declaran nuestras variables. Pensamos en el alcance en relación con los
 bloques porque las variables pueden existir fuera o dentro de estos bloques.
En el ámbito global , las variables se declaran fuera de los bloques. Estas variables se denominan
 variables globales . Debido a que las variables globales no están vinculadas dentro de un bloque,
  cualquier código del programa puede acceder a ellas, incluido el código en bloques. 
  
  Veamos un ejemplo de alcance global:*/

const color = 'blue';

const returnSkyColor = () => {
    return color; // blue 
};

console.log(returnSkyColor()); // blue

/* Aunque la colorvariable se define fuera del bloque, se puede acceder a ella en el bloque de funciones, 
lo que le otorga un alcance global. 
A su vez, colorse puede acceder dentro del returnSkyColorbloque de funciones.
Trabajemos con variables globales para ver cómo se puede acceder a los datos desde cualquier lugar dentro 
de un programa. */


/* 1 . En la parte superior de main.js , escribe tres variables globales:

Nombra la primera variable satellitey configúrala igual a 'The Moon'.
Nombra la segunda variable galaxyy configúrala igual a 'The Milky Way'.
Nombra la tercera variable starsy configúrala igual a 'North Star'. */
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
/* 
2 .Debajo de las variables creadas en el paso anterior, escribe una función llamada callMyNightSky. 
Dentro de la función, incluya una declaración de retorno como esta:

return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy; */
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

/* 3 .Debajo de la callMyNightSky()función, use console.log()para registrar el valor de callMyNightSky()en la consola.

Notará que el bloque de funciones para callMyNightSky()puede acceder a las variables globales libremente ya que
 las variables están disponibles para todas las líneas de código en el archivo. */

/* ___________________________________________CODIGO COMPLETO_________________________________________________ */

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

callMyNightSky();
console.log(callMyNightSky());