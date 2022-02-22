/* En este proyecto construiremos Magic Eight Ball utilizando flujo de control en JavaScript.
El usuario podrá ingresar una pregunta, luego nuestro programa generará una fortuna aleatoria. */

/* 1 .En la primera línea del programa, defina una variable llamada userNameque se establezca en una cadena vacía.
Si el usuario lo desea, puede ingresar su nombre entre comillas. */

/* 2 . Debajo de esta variable, cree una expresión ternaria que decida qué hacer 
si el usuario ingresa un nombre o no. Si el usuario ingresa un nombre, como 'Jane',
 use la interpolación de cadenas para iniciar sesión Hello, Jane!en la consola. 
 De lo contrario, simplemente inicie sesión Hello!. */
let userName = '';

userName === 'Jane' ? console.log('Hello ' + userName) : console.log('Hello');

/* 3 . Cree una variable llamada userQuestion. 
El valor de la variable debe ser una cadena que es la pregunta que el usuario quiere hacerle a Magic Eight Ball. */
let userName = 'Jane';

userName === 'Jane' ? console.log('Hello ' + userName) : console.log('Hello');

let userQuestion = 'Que edad tiene'


/* 4 . Escribe una console.log()para el userQuestion, indicando lo que se preguntó. 
¡Puede incluir el nombre del usuario en la console.log()declaración, si lo desea! */
console.log(`The user asked: ${userQuestion}`);

/* 5 .
Necesitamos generar un número aleatorio entre 0 y 7. Cree otra variable y asígnele el nombre randomNumber. 
Establézcalo igual a esta expresión, que usa dos métodos de la biblioteca Math.  

Math.random() devuelve un valor entre 0 (inclusive) y 1 (exclusivo).
Para hacer que este conjunto de números varíe de 0 (inclusive) a 8 (exclusivo), 
podemos multiplicar el valor devuelto por 8. Finalmente, 
para asegurarnos de que solo tenemos números enteros del 0 al 7, 
podemos redondear hacia abajo usando Math.floor().*/
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

/* 6 . Cree una variable más llamada eightBally configúrela como una cadena vacía. 
Guardaremos un valor para esta variable en los próximos pasos, dependiendo del valor de randomNumber. */
let eightBall = '';

/* 7 .
Necesitamos crear un flujo de control que tome lo randomNumberque hicimos en el paso 5, 
y luego asigne eightBalla una respuesta que devolvería una Magic Eight Ball. 
Piense en utilizar if/ elseo switchdeclaraciones.
 Aquí hay 8 frases de Magic Eight Ball que nos gustaría guardar en la variable eightBall:

'It is certain'
'It is decidedly so'
'Reply hazy try again'
'Cannot predict now'
'Do not count on it'
'My sources say no'
'Outlook not so good'
'Signs point to yes'

Si randomNumberes 0, guarde una respuesta a la eightBallvariable; si randomNumberes 1,
 guarde la siguiente respuesta, y así sucesivamente. Si te sientes creativo, ¡haz tus propias respuestas! */
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain'
        break;
    case 1:
        eightBall = 'It is decidedly so'
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        break;
    case 3:
        eightBall = 'Cannot predict now'
        break;
    case 4:
        eightBall = 'Do not count on it'
        break;
    case 5:
        eightBall = 'My sources say no'
        break;
    case 6:
        eightBall = 'Outlook not so good'
        break;
    case 7:
        eightBall = 'Signs point to yes'
        break;
}

/* 8 _ Escribe a console.log()para imprimir la respuesta de Magic Eight Ball, el valor de la eightBallvariable. */
console.log(`The eight ball answered: ${eightBall}`);

/* 9 _ ¡Ejecute su programa varias veces para ver resultados aleatorios en la consola! Si quieres práctica extra:
Si comenzó con una switchsentencia, conviértala en ifsentencias .else ifelse */
if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
}

console.log(`The eight ball answered: ${eightBall}`);