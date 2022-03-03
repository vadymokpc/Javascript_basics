/* El ciclo while

¡Lo estás haciendo genial! Te vamos a enseñar sobre un tipo diferente de bucle: el whilebucle. Para empezar, 
vamos a convertir un forbucle en un whilebucle: */
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
    console.log(counterOne);
};

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
};

/* Analicemos lo que sucede con nuestra whilesintaxis de bucle:

La counterTwovariable se declara antes del bucle. Podemos acceder a él dentro de nuestro whileciclo ya que está
 en el ámbito global.
Comenzamos nuestro bucle con la palabra clave whileseguida de nuestra condición de parada o condición de prueba . 
Esto se evaluará antes de cada ronda del ciclo. Mientras la condición se evalúa como true, el bloque seguirá ejecutándose. 
Una vez que se evalúe, falseel ciclo se detendrá.
A continuación, tenemos el bloque de código de nuestro ciclo que se imprime counterTwoen la consola y se incrementa 
counterTwo.
¿Qué pasaría si no incrementamos counterTwodentro de nuestro bloque? Si no incluyéramos esto, counterTwosiempre
tendría su valor inicial, 1. ¡Eso significaría que la condición de prueba counterTwo < 4siempre se evaluaría true 
y nuestro ciclo nunca dejaría de ejecutarse! Recuerde, esto se llama bucle infinito y es algo que siempre queremos evitar .
 Los bucles infinitos pueden consumir toda la potencia de procesamiento de su computadora y potencialmente congelar 
 su computadora.

¡Entonces puede que se pregunte cuándo usar un whilebucle! La sintaxis de un forbucle es ideal cuando sabemos cuántas
 veces debe ejecutarse el bucle, pero no siempre lo sabemos de antemano. Piensa en comer como un whilebucle: cuando 
 empiezas a dar bocados, no sabes el número exacto que necesitarás para llenarte. Más bien vas a comer while 
 que tienes hambre. En situaciones en las que queremos que un bucle se ejecute un número indeterminado de veces,
  whilelos bucles son la mejor opción. */


/*   1 . Debajo de la cardsmatriz, declare una variable, currentCardcon la letpalabra clave pero no le asigne un valor. */
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

/* 2 . Crea un whilebucle con una condición que compruebe si currentCardno tiene ese valor 'spade'.

Dentro del bloque de tu whileciclo, agrega la siguiente línea de código: */

currentCard = cards[Math.floor(Math.random() * 4)];
Math.floor(Math.random() * 4)
/* nos dará un número aleatorio de 0 a 3 . Usaremos este número para indexar la cardsmatriz 
y asignar el valor de currentCard a un elemento aleatorio de esa matriz. */

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
};

/* 3 .¡Increíble! Su ciclo se está ejecutando, pero no puede saberlo porque no genera nada. 
Agreguemos una console.log()declaración a nuestro while bloque. Dentro del bloque, 
después de asignar currentCardun nuevo valor, inicie sesión currentCarden la consola.

¡Por diversión, puede ejecutar su código varias veces y ver cómo cambia la salida! */
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
};