/* Años del perro
Los perros maduran a un ritmo más rápido que los seres humanos. 
A menudo decimos que la edad de un perro se puede calcular en "años de perro" 
para tener en cuenta su crecimiento en comparación con un humano de la misma edad. 
En cierto modo, podríamos decir que el tiempo pasa rápido para los perros: 
8 años en la vida de un ser humano equivalen a 45 años en la vida de un perro. 
¿Qué edad tendrías si fueras un perro?

Así es como convierte su edad de "años humanos" a "años de perro":

Los dos primeros años de vida de un perro cuentan como 10,5 años de perro cada uno.
Cada año siguiente equivale a 4 años de perro. */

//Mi edad real
const miEdad = 30;
//Guardamos el valor 2 q luego cambiara
let primerosDosAños = 2;
//Multiplicamos el valor guardado en primerosAños por 10,5 y lo reasignamos a primerosAños.
primerosDosAños *= 10.5;
/* Como ya contabilizamos los primeros dos años, tome la variable miEdad y reste 2 de ella.
Establezca el resultado igual a una variable llamada proximosAños.  */
let proximosAños = miEdad - 2;

proximosAños *= 4;
//Agregue primerosAños y proximosAños juntos, y guárdelos en una variable llamada miEdadEnAñosDePerro.
let miEdadEnAñosDePerro = primerosDosAños + proximosAños;
/* Escriba su nombre como una cadena, llame a su método incorporado .toLowerCase() y almacene el resultado en una variable llamada miNombre.

El método toLowerCase devuelve una cadena con todas las letras en minúsculas. */
miNombre = 'Vadym Ostapchuk'.toLowerCase();

console.log(`My name is ${miNombre}. I am ${miEdad} years old in human years which is ${miEdadEnAñosDePerro} years old in dog years.`)