/* 1 . Utilice el .shift()método para eliminar el primer elemento de la matriz groceryList.

Registre el nuevo groceryListen la consola. */
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList); //[ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]


/* 2 .Bajo el código agregado en el paso 1, use el .unshift()método para agregar 'popcorn'al comienzo de su lista de compras.

Después de llamar .unshift()a groceryList, inicie sesión groceryListen la consola. */
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList); //[ 'popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]



/* 3 .Tienes prisa y decides pedirle a un amigo que te ayude con tus compras. 
Quiere que recoja el 'bananas', 'coffee beans'y 'brown rice'.

Bajo el código que agregó para el paso 2, utilícelo .slice()para proporcionarle a su amigo
 una lista de estas tres cosas.

Registre esta parte de la lista en la consola. A diferencia de los dos puntos de control anteriores, 
debe realizar ambos pasos en una línea. */
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

/* groceryList.shift();
groceryList.unshift('popcorn');  */

console.log(groceryList.slice(1, 4)); //[ 'bananas', 'coffee beans', 'brown rice' ]


/* 4 . .slice()Después de llamar groceryList, registre la lista de compras en la consola una vez más.

Tenga en cuenta que la groceryListmatriz aún contiene los mismos elementos que tenía en el Paso 2. 
¡Eso significa .slice()que no está mutando! Puedes confirmarlo en el enlace del paso anterior. */

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');

console.log(groceryList.slice(1, 4)); //[ 'bananas', 'coffee beans', 'brown rice' ]
console.log(groceryList); //[ 'popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]


/* 5 . Encontremos el índice de un elemento en particular groceryListusando .indexOf().

Llame .indexOf()para groceryListencontrar el índice del elemento 'pasta'y guarde el valor devuelto en una const variable
 llamada pastaIndex.

Luego inicie sesión pastaIndexen la consola. (Puede eliminar las otras console.log()declaraciones para despejar el 
terminal). */
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex); // 4