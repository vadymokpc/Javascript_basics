/* El método .pop()

Otro método de matriz .pop(), elimina el último elemento de una matriz. */

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

/* En el ejemplo anterior, llamar .pop()a la newItemTrackermatriz eliminada item 2del final.

.pop()no toma ningún argumento, simplemente elimina el último elemento de newItemTracker.

.pop()devuelve el valor del último elemento. En el ejemplo, almacenamos el valor devuelto en una variable removed 
para usarlo más adelante.

.pop()es un método que muta la matriz inicial.

Cuando necesite mutar una matriz eliminando el último elemento, use .pop(). */


/* 1 . Utilice el .pop()método para eliminar el último elemento de chores. En una línea después de llamar chores.pop(), 
inicie sesión choresen la consola para asegurarse de que funcionó. */
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores); /* [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ] */