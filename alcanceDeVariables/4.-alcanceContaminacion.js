/* Alcance Contaminación

Puede parecer una gran idea hacer siempre accesibles sus variables, pero tener demasiadas variables globales 
puede causar problemas en un programa.

Cuando declara variables globales, van al espacio de nombres global . El espacio de nombres global permite que
 las variables sean accesibles desde cualquier parte del programa. Estas variables permanecen allí 
 hasta que finaliza el programa, lo que significa que nuestro espacio de nombres global puede llenarse muy rápido.

La contaminación del alcance es cuando tenemos demasiadas variables globales que existen en el espacio de nombres
 global, o cuando reutilizamos variables en diferentes alcances. La contaminación del alcance dificulta 
 el seguimiento de nuestras diferentes variables y nos prepara para posibles accidentes. Por ejemplo, 
 las variables de alcance global pueden colisionar con otras variables que tienen un alcance más local, 
 lo que provoca un comportamiento inesperado en nuestro código.

Veamos un ejemplo de contaminación de alcance en la práctica para que sepamos cómo evitarlo: */
let num = 50;

const logNum = () => {
    num = 100; // Take note of this line of code
    console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

/* Notarás:

Tenemos una variable num.
Dentro del cuerpo de la función de logNum(), queremos declarar una nueva variable pero olvidamos usar la letpalabra 
clave.
Cuando llamamos logNum(), numse reasigna a 100.
La reasignación interna logNum()afecta a la variable global num.
Aunque la reasignación está permitida y no obtendremos un error, si decidimos usar nummás tarde, sin saberlo, 
usaremos el nuevo valor de num.
Si bien es importante saber qué es el alcance global, es una buena práctica no definir variables 
en el alcance global. */

/* 1 . Veamos qué sucede si creamos una variable que sobrescribe una variable global.

Dentro de la callMyNightSky()función, en la primera línea del cuerpo de la función, asigne la variable 
stars a 'Sirius'como tal:

stars = 'Sirius'; */
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
    stars = 'Sirius';
    return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());

/* 2 .Fuera de la función, bajo la console.log()declaración actual, agregue otra console.log()declaración para 
iniciar sesión starsen la consola.

Notará que la variable global starsse reasignó a 'Sirius'. En otras palabras, cambiamos el valor de la starsvariable
 global pero no es fácil leer qué sucedió exactamente. Esta es una mala práctica en la mantenibilidad 
 del código y podría afectar nuestro programa de maneras que no pretendemos. */
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
    stars = 'Sirius';
    return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);