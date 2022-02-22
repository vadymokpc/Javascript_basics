/* 1 . Imagínese si necesitáramos pedir monitores para todos en una oficina y esta oficina estuviera convenientemente dispuesta 
en forma de cuadrícula. ¡Podríamos usar una función para ayudarnos a calcular la cantidad de monitores necesarios!
Declara una función monitorCount()que tiene dos parámetros. El primer parámetro es rowsy el segundo parámetro es columns. */
function monitorCount(rows, columns) {

    /*  2 . Calculemos el número de monitores multiplicando rowsy columnsluego devolviendo el valor.
En el cuerpo de la función que acaba de escribir, use la returnpalabra clave para devolver rows * columns. */
    let rowsColumns = rows * columns;

    return rowsColumns;
}
/* 3 . Ahora que la función está definida, podemos calcular la cantidad de monitores necesarios. 
Digamos que la oficina tiene 5 filas y 4 columnas.
Declare una variable nombrada numOfMonitorsusando la constpalabra clave y asigne numOfMonitorsel
 valor de invocar monitorCount()con los argumentos 5y 4. */
const numOfMonitors = monitorCount(5, 4);

/* 4 . Para verificar que la función funcionó correctamente, inicie sesión numOfMonitorsen la consola. */
console.log(numOfMonitors);

/* ___________________________________________CODIGO COMPLETO_________________________________________________ */

function monitorCount(rows, columns) {

    let rowsColumns = rows * columns;

    return rowsColumns;
}
const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);