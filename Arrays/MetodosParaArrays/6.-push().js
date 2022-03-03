/* El método .push()

Aprendamos algunos métodos de JavaScript integrados que facilitan el trabajo con matrices. 
Estos métodos se utilizan específicamente en matrices para hacer que las tareas comunes, como 
agregar y eliminar elementos, sean más sencillas.

Un método .push()nos permite agregar elementos al final de una matriz. Aquí hay un ejemplo de cómo se usa esto: */
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


/* Entonces, ¿cómo .push()funciona?

Accedemos al pushmétodo usando la notación de puntos, conectando pushcon itemTrackerun punto.

Entonces lo llamamos como una función. Eso es porque .push()es una función que JavaScript nos permite usar
 directamente en una matriz.

.push()puede tomar un solo argumento o múltiples argumentos separados por comas. En este caso, estamos agregando
 dos elementos: 'item 3'y 'item 4'a itemTracker.

Observe que .push()cambia, o muta , itemTracker. También es posible que se le .push()conozca como un método de matriz
 destructivo , ya que cambia la matriz inicial.

Si está buscando un método que mute una matriz al agregarle elementos, ¡entonces .push()es el método para usted! */


/* 1 . Agregue dos elementos a la choresmatriz usando .push(). Úselo console.logpara imprimir su chores matriz 
para asegurarse de que se agregaron sus elementos. */
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('Lo que sea', 'Lo que sea 2');

console.log(chores); /* [ 'wash dishes', 'do laundry', 'take out trash', 'Lo que sea', 'Lo que sea 2' ] */