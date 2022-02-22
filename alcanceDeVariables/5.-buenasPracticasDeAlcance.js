/* Practique un buen alcance

Dados los desafíos con las variables globales y la contaminación del alcance, debemos seguir las mejores 
prácticas para definir el alcance de nuestras variables con la mayor precisión posible utilizando el alcance
 de bloque.

El alcance estricto de sus variables mejorará en gran medida su código de varias maneras:

Hará que su código sea más legible ya que los bloques organizarán su código en secciones discretas.
¡Hace que su código sea más comprensible ya que aclara qué variables están asociadas con diferentes 
partes del programa en lugar de tener que realizar un seguimiento de ellas línea tras línea!
Es más fácil mantener su código, ya que su código será modular.
Ahorrará memoria en su código porque dejará de existir una vez que el bloque termine de ejecutarse. */

/* Aquí hay otro ejemplo de cómo usar el alcance del bloque, como se define dentro de un if bloque:
 */
const logSkyColor = () => {
    const dusk = true;
    let color = 'blue';
    if (dusk) {
        let color = 'pink';
        console.log(color); // pink
    }
    console.log(color); // blue 
};

console.log(color); // ReferenceError

/* Aquí, notarás:

Creamos una variable duskdentro de la logSkyColor()función.
Después de la ifdeclaración, definimos un nuevo bloque de código con las {}llaves. 
Aquí asignamos un nuevo valor a la variable colorsi la ifdeclaración es verdadera.
Dentro del ifbloque, la colorvariable contiene el valor 'pink', aunque fuera del ifbloque,
 en el cuerpo de la función, la colorvariable contiene el valor 'blue'.
Si bien usamos el alcance del bloque, todavía contaminamos nuestro espacio de nombres al reutilizar
 el mismo nombre de variable dos veces. Una mejor práctica sería cambiar el nombre de la variable 
 dentro del bloque. */


/*  Block scope es una herramienta poderosa en JavaScript, ya que nos permite definir variables con precisión
  y no contaminar el espacio de nombres global. 

  Si una variable no necesita existir fuera de un bloque, ¡no debería! */


/*  1 . Dentro del cuerpo de la función de logVisibleLightWaves(), debajo de la regionvariable y antes
  de la console.log()declaración proporcionada, cree una ifdeclaración que verifique si regiones el 'The Arctic'. */
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic') {

    }
    console.log(lightWaves);
};

/* 2 .
Dentro del ifbloque, defina una nueva letvariable lightWavesy establézcala igual a 'Northern Lights'. */
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
    }
    console.log(lightWaves);
};

logVisibleLightWaves();

/* 3 .
Debajo de la variable en el ifbloque, use console.log()para registrar el valor de la variable del bloque dentro del 
ifbloque.

Ejecute su código y observe el resultado. Dentro del ifbloque se console.log(lightWaves)registra el valor Northern 
Lightsen la consola. Fuera del ifbloque, pero aún dentro de la función, la misma declaración se registra Moonlighten 
la consola. */
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }
    console.log(lightWaves);
};

logVisibleLightWaves();