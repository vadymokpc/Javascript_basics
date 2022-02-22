/* Funciones auxiliares
También podemos usar el valor de retorno de una función dentro de otra función. 
Estas funciones que se llaman dentro de otra función a menudo se denominan funciones auxiliares . 
Dado que cada función está realizando una tarea específica, hace que nuestro código sea más fácil de leer 
y depurar si es necesario. Si quisiéramos definir una función que convierta la temperatura de Celsius a Fahrenheit,
 podríamos escribir dos funciones como: */
function multiplyByNineFifths(number) {
    return number * (9 / 5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};
getFahrenheit(15); // Returns 59

console.log(getFahrenheit(15));

/*   En el ejemplo anterior:

getFahrenheit()se llama y 15se pasa como un argumento.

El bloque de código dentro de getFahrenheit()llamadas multiplyByNineFifths()y pasa 15como argumento.

multiplyByNineFifths()toma el argumento de 15para el numberparámetro.

El bloque de código dentro de multiplyByNineFifths()la función se multiplica 15por (9/5), que se evalúa como 27.

27se devuelve a la llamada de función en getFahrenheit().

getFahrenheit()sigue ejecutándose. Se suma 32a 27, que se evalúa como 59.

Finalmente, 59 se devuelve a la llamada de función getFahrenheit(15). */