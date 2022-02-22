/* Funciones de flecha
ES6 introdujo la sintaxis de función de flecha() => , una forma más corta de escribir funciones 
mediante el uso de la notación especial de "flecha gruesa". Las funciones de flecha eliminan la necesidad de escribir 
la palabra clave function cada vez que necesita crear una función. 
En su lugar, primero incluye los parámetros dentro de ( )y luego agrega una flecha =>que apunta al cuerpo de la función
 rodeado de { }esta manera: */
const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};

//Misma funcion NO arrow function
const plantNeedsWater = function (day) {

    if (day === 'Wednesday') {
        return true
    } else {
        return false
    }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));


/* 1 . Cambie plantNeedsWater()para usar la sintaxis de la función de flecha. */
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));