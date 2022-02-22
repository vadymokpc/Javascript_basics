/* Funciones de flecha de cuerpo conciso
JavaScript también proporciona varias formas de refactorizar la sintaxis de la función de flecha. 
La forma más condensada de la función se conoce como cuerpo conciso . Exploraremos algunas de estas técnicas a continuación:

1.- Las funciones que toman un solo parámetro no necesitan que ese parámetro esté entre paréntesis. 
Sin embargo, si una función toma cero o múltiples parámetros, se requieren paréntesis. */

//ZERO PARAMETERS
const functionName = () => {};

//ONE PARAMETER
const functionName = paramOne => {};

//TWO OR MORE PARAMETERS
const functionName = (paramOne, paramTwo) => {};

/* 2.- Un cuerpo de función compuesto por un bloque de una sola línea no necesita llaves. 
Sin las llaves, lo que evalúe esa línea se devolverá automáticamente. 
El contenido del bloque debe seguir inmediatamente a la flecha =>y returnse puede eliminar la palabra clave. 
Esto se conoce como retorno implícito . */

//SINGLE LINE BLOCK
const sumNumbers = number => number + number;

//MULTI LINE BLOCK
const sumNumbers = number => {
    const sum = number + number;
    return sum; //RETURN STATEMENT
};

/* Así que si tenemos una función:
 */
const squareNum = (num) => {
    return num * num;
};

/* Podemos refactorizar la función a:
 */

const squareNum = num => num * num;

/* Observe los siguientes cambios:

Los paréntesis alrededor num se han eliminado, ya que tiene un solo parámetro.
Las llaves { }se han eliminado ya que la función consta de un bloque de una sola línea.
La returnpalabra clave se eliminó porque la función consta de un bloque de una sola línea. */


/* 1 . Vamos a refactorizar plantNeedsWater()para ser un cuerpo conciso. Tenga en cuenta que ya hemos convertido
 la declaración if/ elseen un operador ternario para que el código quepa en una línea. */

//Sin refactorizar

//Refactorizado
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

plantNeedsWater();
console.log(plantNeedsWater('Wednesday'));