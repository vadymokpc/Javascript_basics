/* En el código anterior, tenemos una serie de condiciones que buscan un valor que coincida con una 
groceryItemvariable. 
Nuestro código funciona bien, ¡pero imagina si tuviéramos que verificar 100 valores diferentes! 
¡ Tener que escribir tantas else ifdeclaraciones suena como un dolor!

Una switchdeclaración proporciona una sintaxis alternativa que es más fácil de leer y escribir. 
Una switchdeclaración se ve así: */
let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}
// Prints 'Papayas are $1.29'

/* La switchpalabra clave inicia la declaración y es seguida por ( ... ), que contiene el valor 
que cada uno casecomparará. En el ejemplo, el valor o expresión de la switchsentencia es groceryItem.
Dentro del bloque, { ... }hay múltiples cases. La casepalabra clave comprueba si la expresión coincide 
con el valor especificado que viene después. El valor que sigue al primero casees 'tomato'. 
Si el valor de igualado groceryItem, 'tomato'eso correría.caseconsole.log()
El valor de groceryItemes 'papaya', por lo que la tercera caseejecución— 
Papayas are $1.29se registra en la consola.
La breakpalabra clave le dice a la computadora que salga del bloque y no ejecute más código
 ni verifique ningún otro caso dentro del bloque de código. Nota: Sin breakpalabras clave, 
 se ejecutará el primer caso coincidente, pero también lo harán todos los casos subsiguientes, 
 independientemente de si coincide o no, incluido el predeterminado. Este comportamiento es diferente
  de las declaraciones condicionales if/ elseque ejecutan solo un bloque de código.
Al final de cada switchdeclaración, hay una defaultdeclaración. Si ninguno de los cases es verdadero,
 entonces se ejecutará el código en la defaultinstrucción. */