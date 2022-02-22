/* Recientemente, Kelvin comenzó a publicar sus pronósticos del tiempo en su sitio web. Sin embargo, hay un problema: 
todos sus pronósticos describen la temperatura en Kelvin .

Con nuestro conocimiento de JavaScript, convirtamos Kelvin a Celsius, luego a Fahrenheit.

Termómetros Kelvin, Celsius y Fahrenheit
Por ejemplo, 283 K se convierte en 10 °C, que se convierte en 50 °F. */



// Creamos una varible que sera constante
const kelvin = 293;
/* Convirtamos Kelvin a Celsius restando 273 de la variable kelvin. Almacene el resultado en otra variable, llamada celsius. */
const celcius = kelvin - 273;

/* Usa esta ecuación para calcular Fahrenheit, luego almacena la respuesta en una variable llamada Fahrenheit.
Fahrenheit = Celsius * (9/5) + 32
 */
let fahrenheit = celcius * (9 / 5) + 32;

/* Use el método .floor() del objeto matemático integrado para redondear hacia abajo la temperatura Fahrenheit. 
Guarde el resultado en la variable Fahrenheit.
 */

fahrenheit = Math.floor(fahrenheit);

/* Use console.log y la interpolación de cadenas para registrar la temperatura en Fahrenheit en la consola de la siguiente manera:

La temperatura es TEMPERATURA grados Fahrenheit.
Utilice la interpolación de cadenas para reemplazar TEMPERATURA con el valor guardado en Fahrenheit. */

//console.log(`La temperatura es de ${fahrenheit} grados Fahrenheit.`);

/* Si desea practicar más, intente esto:

Convierta grados Celsius a la escala de Newton usando la siguiente ecuación
Newton = Celsius * (33/100)

Redondea hacia abajo la temperatura de Newton usando el método .floor()
Use console.log y la interpolación de cadenas para registrar la temperatura en newton en la consola */

let newton = celcius * (33 / 100);
newton = Math.floor(newton);

console.log(`La temperatura es ${newton} grados Newton`);

//-----------------------------------------------------

//Lo he modificado para que se calcule de la base celcius, no esta igual que el enunciado

const celcius = 20;

const kelvin = celcius + 273;


console.log(`La temperatura es ${celcius} grados Celcius`)

let fahrenheit = celcius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit); //Redondea a la baja decimales

console.log(`La temperatura es ${fahrenheit} grados Fahrenheit.`);

let newton = celcius * (33 / 100);
newton = Math.floor(newton); //Redondea a la baja decimales

console.log(`La temperatura es ${newton} grados Newton`);