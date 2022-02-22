/* Actualizar elementos

En el ejercicio anterior, aprendió cómo acceder a los elementos dentro de una matriz o una cadena mediante el uso 
de un índice. Una vez que tenga acceso a un elemento en una matriz, puede actualizar su valor. */
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons);
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

/* En el ejemplo anterior, la seasonsmatriz contenía los nombres de las cuatro estaciones.

Sin embargo, decidimos que preferíamos decir 'Autumn'en lugar de 'Fall'.

La línea seasons[3] = 'Autumn';le dice a nuestro programa que cambie el elemento en el índice 3 de la seasonsmatriz 
en 'Autumn'lugar de lo que ya está allí. */

/* 1 . Cambie el segundo elemento de la matriz groceryLista 'avocados'. */
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

console.log(groceryList); //[ 'bread', 'avocados', 'milk' ]