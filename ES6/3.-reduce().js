// Hacer la media de los numeros dados en el array
const array1 = [6, 8, 45, 9, 78];

const initialValue = 0;
// Sumamos todos los numeros en el array y el resultado lo dividimos entre el numero de numeros que hay en el array (5)
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue / array1.length,
    initialValue
);
//Solo imprimira resultados con 2 decimales
console.log(Math.floor(sumWithInitial));