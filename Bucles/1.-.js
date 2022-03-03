/* Bucles

Un bucle es una herramienta de programación que repite un conjunto de instrucciones hasta que se alcanza una condición
 específica, llamada condición de parada . Como programador, descubrirá que depende de los bucles todo el tiempo. 
 Escuchará el término genérico iterar cuando se refiera a bucles; iterar simplemente significa "repetir".

Cuando necesitamos reutilizar una tarea en nuestro código, a menudo empaquetamos esa acción en una función. 
De manera similar, cuando vemos que un proceso tiene que repetirse varias veces seguidas, escribimos un bucle. 
Los bucles nos permiten crear código eficiente que automatiza procesos para crear programas escalables y manejables.

Como se ilustra en el diagrama, los bucles iteran o repiten una acción hasta que se cumple una condición específica. 
Cuando se cumple la condición, el ciclo se detiene y la computadora pasa a la siguiente parte del programa. */


/* Repetir tareas manualmente

Antes de escribir nuestros propios bucles, tomemos un momento para desarrollar una apreciación de los bucles. 
La mejor manera de hacerlo es mostrándole lo engorroso que sería si una tarea repetida requiriera que escribiera 
el mismo código cada vez. */

/* 1 . Cree la variable vacationSpotsy asigne su valor a una matriz de tres cadenas que nombran los lugares que le gustaría 
visitar. */
const vacationSpots = ['Irlanda', 'Nueva York', 'Praga'];

/* 2 . A continuación, console.log()cada elemento en vacationSpots. Como aún no conocemos los bucles, tenemos que 
console.log()separar cada elemento de la matriz por separado. */
const vacationSpots = ['Irlanda', 'Nueva York', 'Praga'];

console.log(vacationSpots[0]); //Irlanda
console.log(vacationSpots[1]); //Nueva York
console.log(vacationSpots[2]); //Praga



/* ¡Buen trabajo! Ahora imagine que la lista de vacaciones tiene 100 lugares: registrar cada elemento de la matriz 
en la consola a mano sería una tarea tediosa. En el próximo ejercicio, aprenderemos cómo hacer que las cosas 
sean más eficientes con los forbucles. */