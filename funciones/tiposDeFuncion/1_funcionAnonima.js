/* Otra forma de definir una función es usar una expresión de función . Para definir una función dentro de una expresión,
 podemos usar la functionpalabra clave. En una expresión de función, el nombre de la función generalmente se omite.
  Una función sin nombre se llama función anónima . 
  Una expresión de función a menudo se almacena en una variable para hacer referencia a ella. */

/*   A diferencia de las declaraciones de funciones, las expresiones de funciones no se elevan, 
  por lo que no se pueden llamar antes de definirlas.

Definamos una nueva función usando una expresión de función.

1 .
Digamos que tenemos una planta que necesitamos regar una vez a la semana los miércoles.
Podríamos definir una expresión de función que nos ayude a verificar el día de la semana y la planta necesita ser regada:

Cree una variable nombrada plantNeedsWaterusando la constpalabra clave variable.
Asigne una función anónima que tome un parámetro de daya plantNeedsWater. */
const plantNeedsWater = function (day) {

};

/* 2 .Ahora necesitamos agregar algo de código al cuerpo de la función de plantNeedsWater():
En el cuerpo de la función, agregue un if condicional que verifique day === 'Wednesday'.
Si el condicional es verdadero, dentro del ifbloque de código, use la returnpalabra clave para devolver true. */
const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true
    }
};

/* 3 .En los días que no están 'Wednesday', plantNeedsWater()debe regresar false:
Agregue una else declaración después de la if declaración.
Dentro de la elsedeclaración, use la returnpalabra clave para volver false. */
const plantNeedsWater = function (day) {

    if (day === 'Wednesday') {
        return true
    } else {
        return false
    }
};

/* 4 . Llame al plantNeedsWater()y páselo 'Tuesday'como un argumento. */
const plantNeedsWater = function (day) {

    if (day === 'Wednesday') {
        return true
    } else {
        return false
    }
};
plantNeedsWater('Tuesday');

/* 5 .Comprobemos que plantNeedsWater()devolvió el valor esperado. Inicie sesión plantNeedsWater('Tuesday')en la consola. 
Si funcionó correctamente, debería ver false logueado en la consola. */

/* ___________________________________________CODIGO COMPLETO_________________________________________________ */

const plantNeedsWater = function (day) {

    if (day === 'Wednesday') {
        return true
    } else {
        return false
    }
};
plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday')); //Imprime false