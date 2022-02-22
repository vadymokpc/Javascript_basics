/* Accediendo a Elementos

Cada elemento de una matriz tiene una posición numerada conocida como su índice . Podemos acceder a elementos
 individuales utilizando su índice, que es similar a hacer referencia a un elemento en una lista según la posición
  del elemento.

Las matrices en JavaScript están indexadas a cero , lo que significa que las posiciones comienzan a contar desde 0
en lugar de desde 1. Por lo tanto, el primer elemento de una matriz estará en la posición 0. 
Veamos cómo podríamos acceder a un elemento en una matriz: */
let cities = ['New York', 'Beijing', 'Nairobi'];
console.log(cities[0]); //New York

/* cities es una matriz que tiene tres elementos.

Usamos la notación de corchetes, []con el índice después del nombre de la matriz para acceder al elemento.

cities[0]accederá al elemento en el índice 0de la matriz cities. Puede pensar cities[0]en acceder al espacio
 en la memoria que contiene la cadena 'New York'. */

/* También puede acceder a caracteres individuales en una cadena usando la notación de paréntesis y el índice. 
Por ejemplo, puedes escribir: */
const hello = 'Hello World';
console.log(hello[6]);
// Output: W

/* 1 . Los elementos individuales en matrices también se pueden almacenar en variables.

Cree una variable nombrada listItemy establézcala igual que el primer elemento de la famousSayingsmatriz utilizando
 la notación de corchetes ( []).

Luego use console.log()para imprimir la listItemvariable en la consola. */
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = ['Fortune favors the brave.'];
console.log(listItem);

/* 2 .Ahora, console.log()el tercer elemento de la famousSayingsmatriz utiliza la notación de corchetes para acceder al 
elemento.

No guarde el elemento en una nueva variable antes de registrarlo. */
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = ['Fortune favors the brave.'];
console.log(listItem);

console.log(famousSayings[2]);

/* 3 . Impresionante, puede acceder a cada elemento en una matriz usando el índice. Pero, ¿qué sucede si intenta acceder
 a un índice que está más allá del último elemento?

Intente registrar el elemento en el índice [3]de famousSayingsla consola. ¿Qué se registra en la consola? */
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = ['Fortune favors the brave.'];
console.log(listItem); //[ 'Fortune favors the brave.' ]

console.log(famousSayings[2]); //Where there is love there is life.
console.log(famousSayings[3]); //undefined