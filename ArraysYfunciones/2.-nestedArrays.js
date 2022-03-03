/* Matrices anidadas

Anteriormente mencionamos que los arreglos pueden almacenar otros arreglos. Cuando una matriz contiene otra matriz, 
se conoce como matriz anidada . Examina el siguiente ejemplo: */
const nestedArr = [
    [1],
    [2, 3]
];

/* Para acceder a las matrices anidadas, podemos usar la notación de corchetes con el valor del índice, tal como lo hicimos
 para acceder a cualquier otro elemento: */
const nestedArr = [
    [1],
    [2, 3]
];

console.log(nestedArr[1]); // Output: [2, 3]

/* Tenga en cuenta que nestedArr[1]tomará el elemento en el índice 1, que es la matriz [2, 3]. Luego, si quisiéramos acceder
 a los elementos dentro de la matriz anidada, podemos encadenar , o agregar, más notación de paréntesis con valores de 
 índice. */
const nestedArr = [
    [1],
    [2, 3]
];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

/* En la segunda console.log()declaración, tenemos dos notaciones de paréntesis encadenadas a nestedArr. 
Sabemos que esa nestedArr[1]es la matriz [2, 3]. Luego, para tomar el primer elemento de esa matriz, 
usamos nestedArr[1][0]y obtenemos el valor de 2. */

/* 1 . ¡Hagamos una matriz anidada! Crea una variable numberClusters. Asigne como su valor una matriz con tres elementos
 de matriz.

El primer elemento de la matriz debe contener los elementos 1y 2en ese orden.
El segundo elemento de la matriz debe contener los elementos 3y 4en ese orden.
El tercer elemento de la matriz debe contener los elementos 5y 6en ese orden. */
const numberClusters = [
    [1, 2],
    [3, 4],
    [5, 6]
];

/* 2 . ¡Impresionante, hiciste una matriz anidada! Ahora declare una variable nombrada targetusando la const palabra clave
 y asígnela para acceder al elemento 6dentro numberClusters. */
const numberClusters = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const target = numberClusters[2][1];

console.log(target);

/* Revisar arreglos

¡Buen trabajo! En esta lección, aprendimos estos conceptos con respecto a las matrices:

Los arreglos son listas que almacenan datos en JavaScript.
Las matrices se crean con corchetes [].
Cada elemento dentro de una matriz está en una posición numerada, o índice, que comienza en 0.
Podemos acceder a un elemento en una matriz usando su índice, con una sintaxis como: myArray[0].
También podemos cambiar un elemento en una matriz usando su índice, con una sintaxis como myArray[0] = 'new string';
Las matrices tienen una lengthpropiedad que le permite ver cuántos elementos hay en una matriz.
Los arreglos tienen sus propios métodos, incluidos .push()y .pop(), que agregan y eliminan elementos de un arreglo, respectivamente.
Las matrices tienen muchos métodos que realizan diferentes tareas, como .slice()y .shift(), puede encontrar documentación en el sitio web de Mozilla Developer Network .
Algunos métodos incorporados están mutando, lo que significa que el método cambiará la matriz, mientras que otros no están mutando. Siempre puedes consultar la documentación.
Las variables que contienen matrices se pueden declarar con leto const. Incluso cuando se declaran con const, las matrices siguen siendo mutables. Sin embargo, una variable declarada con constno se puede reasignar.
Las matrices mutadas dentro de una función mantendrán ese cambio incluso fuera de la función.
Los arreglos se pueden anidar dentro de otros arreglos.
Para acceder a elementos en matrices anidadas, encadene índices utilizando la notación de paréntesis. */