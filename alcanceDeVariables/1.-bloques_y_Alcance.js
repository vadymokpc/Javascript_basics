/* Bloques y Alcance
Antes de hablar más sobre el alcance, primero debemos hablar sobre los bloques .
Hemos visto bloques usados ​​antes en funciones y ifsentencias. Un bloque es el código que se encuentra 
dentro de un conjunto de llaves {}. Los bloques nos ayudan a agrupar una o más declaraciones y sirven 
como un marcador estructural importante para nuestro código.

Un bloque de código podría ser una función, como esta: */
const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue 
};

/* Observe que el cuerpo de la función es en realidad un bloque de código.
Observe el bloque en una if declaración: */
if (dusk) {
    let color = 'pink';
    console.log(color); // pink
};

/*   En los próximos ejercicios, veremos cómo los bloques definen el alcance de las variables. */

/* 1 . En la parte superior de main.js , declare una constvariable, denominada cityconjunto igual a 'New York City'. 
Esta variable existirá fuera del bloque. */
const city = 'New York City';

/* 2 . Debajo de la cityvariable, escribe una función llamada logCitySkyline. */
const logCitySkyline = () => {

};

/* 3 . Dentro del cuerpo de la función de logCitySkyline(), escriba otra variable usando letnamed skyscrapery
 configúrela igual a 'Empire State Building'. */
const city = 'New York City';
const logCitySkyline = () => {
    let skyscraper = 'Empire State Building';
}

/* 4 . Dentro de la función, incluya una declaración de retorno como esta:

return 'The stars over the ' + skyscraper + ' in ' + city; */
const city = 'New York City';
const logCitySkyline = () => {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
};

/* 5 .Debajo de la logCitySkyline()función, use console.log()para registrar el valor de logCitySkyline()en la consola.
Notarás que la logCitySkyline()función puede acceder a ambas variables sin ningún problema. 
En el próximo ejercicio consideraremos por qué sería preferible tener una variable fuera de un bloque
 y la otra dentro de un bloque. */
const city = 'New York City';
const logCitySkyline = () => {

    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());