/* El bucle For

En lugar de escribir el mismo código una y otra vez, los bucles nos permiten decirle a las computadoras que repitan 
un bloque de código determinado por sí solo. Una forma de dar a las computadoras estas instrucciones es con un for bucle.

for El bucle típico incluye una variable iteradora que suele aparecer en las tres expresiones. 
La variable del iterador se inicializa, se compara con la condición de parada y se le asigna un nuevo valor 
en cada iteración del ciclo. Las variables de iterador pueden tener cualquier nombre, pero se recomienda utilizar
 un nombre de variable descriptivo.

Un for bucle contiene tres expresiones separadas ;entre paréntesis:

1. Una inicialización inicia el ciclo y también se puede usar para declarar la variable del iterador.

2. Una condición de parada es la condición con la que se evalúa la variable del iterador: 
si la condición se evalúa como trueel bloque de código se ejecutará y si se evalúa como falseel código se detendrá.

3. Se utiliza una declaración de iteración para actualizar la variable del iterador en cada bucle.
La forsintaxis del bucle se ve así: */
for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
}; //0 1 2 3

/*  Desglosemos el ejemplo:

La inicialización es let counter = 0, por lo que el ciclo comenzará a contar en 0.

La condición de parada es counter < 4, lo que significa que el bucle se ejecutará siempre que la variable del 
iterador countersea menor que 4.

La sentencia de iteración es counter++. Esto significa que después de cada bucle, el valor de counteraumentará en 1. 
Para la primera iteración counterserá igual 0a , para la segunda iteración counterserá igual a 1, y así sucesivamente.

El bloque de código está dentro de las llaves, console.log(counter)se ejecutará hasta que la condición se evalúe 
como false. La condición será falsa cuando countersea mayor o igual a 4;
 el punto en el que la condición se vuelve falsa a veces se denomina condición de parada .

Este forbucle hace posible escribir 0, 1, 2y 3programáticamente. */


/* 1 .¡Ahora, haz el tuyo propio! Cree un programa que recorra del 5 al 10 y registre cada número en la consola. */
for (let counter = 5; counter <= 10; counter++) {
    console.log(counter);
}; // 5 6 7 8 9 10