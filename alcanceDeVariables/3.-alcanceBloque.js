/* Ámbito de bloque

El siguiente contexto que cubriremos es el alcance del bloque . Cuando una variable se define dentro de un bloque, 
solo es accesible para el código dentro de las llaves {}. Decimos que la variable tiene alcance de bloque porque 
solo es accesible para las líneas de código dentro de ese bloque.

Las variables que se declaran con alcance de bloque se conocen como variables locales porque solo están 
disponibles para el código que forma parte del mismo bloque.

El alcance del bloque funciona así: */
const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue 
};

logSkyColor(); // blue 
console.log(color); // ReferenceError

/* Notarás:

Definimos una función logSkyColor().
Dentro de la función, la colorvariable solo está disponible dentro de las llaves de la función.
Si intentamos registrar la misma variable fuera de la función, arroja un ReferenceError. */

/* 1 . En main.js , defina una función logVisibleLightWaves(). */
const logVisibleLightWaves = () => {

};

/* 2 . Dentro de la logVisibleLightWaves()función, usando const, crea una variable lightWavesy configúrala 
igual a 'Moonlight'. */
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
};

/* 3 .Dentro de la logVisibleLightWaves()función, debajo de la lightWavesvariable, agregue una 
console.log()declaración que registrará el valor de la lightWavesvariable cuando se ejecute la función. */
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
};

/* 4 . Llame a la logVisibleLightWaves()función desde fuera de la función. */
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
};
logVisibleLightWaves();

/* 5 .Debajo de la llamada a la función, registre el valor de lightWavesen la consola desde fuera de la función.

Notarás que registra un ReferenceErrorya que la variable está vinculada al alcance del bloque de la función. */

/* ___________________________________________CODIGO COMPLETO_________________________________________________ */

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
};
logVisibleLightWaves();

console.log(lightWaves);