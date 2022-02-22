/* 1 . En el ejercicio anterior, creamos una función para encontrar la cantidad de monitores a pedir 
para una oficina. Ahora escribamos otra función que use la monitorCountfunción para calcular el precio.
A continuación monitorCount, cree una declaración de función llamada costOfMonitorsque tenga dos parámetros,
 el primer parámetro es rowsy el segundo parámetro es columns. Deje el cuerpo de la función vacío por ahora. */
function monitorCount() {

};

function costOfMonitors(rows, columns) {

};

/* 2 .Es hora de agregar algo de código al cuerpo de la función costOfMonitorspara calcular el costo total.
Agregue una returndeclaración que devuelva el valor de llamar monitorCount(rows, columns)multiplicado por 200. */
function monitorCount() {

};

function costOfMonitors(rows, columns) {

    return monitorCount(rows, columns) * 200
};

/* 3 .Deberíamos guardar el costo en una variable. Declare una variable nombrada totalCost 
usando la const palabra clave. Asigne al totalCostvalor de la llamada costOfMonitors()
con los argumentos 5y 4respectivamente. */
const totalCost = costOfMonitors(5, 4);

/* 4 . Para verificar que la función funcionó correctamente, inicie sesión totalCosten la consola. */
console.log(totalCost);

/* ___________________________________________CODIGO COMPLETO_________________________________________________ */

function monitorCount() {

};

function costOfMonitors(rows, columns) {

    return monitorCount(rows, columns) * 200;
};

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);