/* Matrices con let y const

Puede recordar que puede declarar variables con las palabras clave lety const. Las variables declaradas con let 
se pueden reasignar.

Las variables declaradas con la constpalabra clave no se pueden reasignar. Sin embargo, los elementos de una 
matriz declarada con constsiguen siendo mutables. Lo que significa que podemos cambiar el contenido de una const matriz, 
pero no podemos reasignar una nueva matriz o un valor diferente.

Las instrucciones a continuación ilustrarán este concepto más claramente. Preste mucha atención a las 
similitudes y diferencias entre la condimentsmatriz y la utensilsmatriz a medida que completa los pasos. */


/* 1 . Debajo de las dos matrices existentes, vuelva a asignar el elemento en el índice 0de condimentsa 'Mayo'.

Registre la matriz actualizada, condiments, en la consola. */
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments[0] = 'Mayo';
console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

/* 2 . Debajo de su código del Paso 1, reasígnelo condimentspara que sea una nueva matriz que contenga una sola 
cadena['Mayo']

Registre el resultado en la consola.

Tenga en cuenta que puede reasignar elementos en una matriz y reasignar una nueva matriz completa a una
 variable declarada usando la letpalabra clave. */
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments = ['Mayo'];
console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

/* 3 . Debajo de su código del Paso 2, vuelva a asignar el último elemento de la utensilsmatriz a 'Spoon'.

Registre la matriz actualizada en la consola. */
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments = ['Mayo'];
console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

utensils[3] = 'Spoon';
console.log(utensils);