/* Declaraciones Do...While

En algunos casos, desea que un fragmento de código se ejecute al menos una vez y luego se repita en función de una 
condición específica después de su ejecución inicial. Aquí es donde do...whileentra la declaración.

Una do...whiledeclaración dice que se debe hacer una tarea una vez y luego seguir haciéndola hasta que ya no se cumpla
 una condición específica. La sintaxis de una do...whiledeclaración se ve así: */
let countString = '';
let i = 0;

do {
    countString = countString + i;
    i++;
} while (i < 5);

console.log(countString); // 01234

/* En este ejemplo, el bloque de código realiza cambios en la countStringvariable al agregarle la forma de cadena 
de la ivariable. Primero, el bloque de código después de la dopalabra clave se ejecuta una vez. Luego se evalúa 
la condición. Si la condición se evalúa como true, el bloque se ejecutará nuevamente. El bucle se detiene cuando 
la condición se evalúa como false. */

/* ¡ Tenga en cuenta que el bucle whiley son diferentes! do...whileA diferencia del whileciclo, do...whilese ejecutará 
al menos una vez ya sea que la condición se evalúe como true. */
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
    console.log(firstMessage) //I will print!
}

while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false) {
    console.log(secondMessage)
};


/* 1 . Nos gustaría un programa para simular parte del proceso de horneado de pasteles. Dependiendo de la receta, 
se requiere una cantidad diferente de tazas de azúcar. Cree la variable cupsOfSugarNeededy asígnele un valor numérico
 de su elección.

Las tazas de azúcar se deben agregar a la masa de una en una. Declare la variable cupsAddedy asígnele el valor 0. */
const cupsOfSugarNeeded = 2;

let cupsAdded = 0;

/* 2 . Somos golosos, por lo que queremos agregar al menos una taza de azúcar a la masa, incluso si el valor de cupsOfSugarNeededes 0.

Cree un do...whilebucle que se incremente cupsAddeden uno mientras cupsAddedsea menor que cupsOfSugarNeeded.

Para ayudarnos a visualizar la salida en cada iteración del ciclo, agregue un console.logdentro del
do...while bloque y registre el valor de cupsAdded. */
const cupsOfSugarNeeded = 2;

let cupsAdded = 0;

do {
    cupsAdded++;
    console.log(cupsAdded + ' se agregó la copa') //1 se agregó la copa 2 se agregó la copa
}
while (cupsAdded < cupsOfSugarNeeded)
console.log(cupsAdded); // 2