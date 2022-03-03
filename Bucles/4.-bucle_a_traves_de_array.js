/* Bucle a través de matrices

forlos bucles son muy útiles para iterar sobre estructuras de datos. Por ejemplo, podemos usar un forciclo para realizar
 la misma operación en cada elemento de una matriz. Las matrices contienen listas de datos, como nombres de clientes 
 o información de productos. Imagina que tenemos una tienda y queremos aumentar el precio de todos los productos de nuestro
  catálogo. Eso podría ser una gran cantidad de código repetitivo, pero al usar un forciclo para iterar a través 
  de la matriz, podríamos realizar esta tarea fácilmente.

Para recorrer cada elemento de una matriz, un forbucle debe usar la .lengthpropiedad de la matriz en su condición.

Consulte el siguiente ejemplo para ver cómo foriteran los bucles en las matrices: */
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]); //Grizzly Bear Sloth Sea Lion
};

/* En el ciclo anterior, hemos nombrado nuestra variable iteradora i. Esta es una convención de nomenclatura de variables
 que verá en muchos bucles. Cuando usamos ipara iterar a través de matrices, podemos pensar que es una forma abreviada
  de la palabra i ndex. Observe cómo nuestra condición de parada comprueba que ies menor que animals.length. 
  Recuerde que los arreglos tienen un índice cero, el índice del último elemento de un arreglo es equivalente 
  a la longitud de ese arreglo menos 1. ¡Si intentamos acceder a un elemento en el índice de animals.lengthhabremos
   ido demasiado lejos!

Con for los bucles, nos resulta más fácil trabajar con elementos en matrices. */



/* 1 . Escriba un forciclo que itere a través de nuestra vacationSpotsmatriz usando icomo variable iteradora.

Dentro del bloque del forciclo, use console.log()para registrar cada elemento en la vacationSpotsmatriz 
después de la cadena 'I would love to visit '. Por ejemplo, la primera ronda del bucle 
debería imprimirse 'I would love to visit Bali'en la consola. */
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i]); // I would love to visit Bali I would love to visit Paris I would love to visit Tulum
};