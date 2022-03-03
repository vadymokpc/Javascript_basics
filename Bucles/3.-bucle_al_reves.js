/* Bucle en reversa

¿Qué pasa si queremos que el forciclo registre 3, 2, 1y luego 0? ¡Con simples modificaciones a las expresiones, 
podemos hacer que nuestro ciclo se ejecute hacia atrás!

Para ejecutar un forbucle hacia atrás, debemos:

Establezca la variable del iterador en el valor deseado más alto en la expresión de inicialización.
Establezca la condición de parada para cuando la variable del iterador sea menor que la cantidad deseada.
El iterador debe disminuir en intervalos después de cada iteración.
Practicaremos cambiando lo forque escribimos anteriormente para que ahora vaya al revés. Al escribir/cambiar bucles, 
existe la posibilidad de que nuestra condición de parada no se cumpla y obtengamos un temido bucle infinito que 
esencialmente impide que nuestra programación ejecute cualquier otra cosa. Para salir de un ciclo infinito en un ejercicio,
 actualice la página y luego corrija el código para su ciclo. */

/* 1 . Haga un forbucle que retroceda imprimiendo 3a 0la consola. Use el >=operador de comparación en su condición 
de parada y el --operador en su declaración de iteración. */
for (let counter = 3; counter >= 0; counter--) {
    console.log(counter); // 3 2 1 0
};