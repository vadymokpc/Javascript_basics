/* Matrices y Funciones

A lo largo de la lección, repasamos que las matrices son mutables o modificables. Bueno, ¿qué sucede si tratamos 
de cambiar una matriz dentro de una función? ¿La matriz mantiene el cambio después de la llamada a la función o está
 dentro de la función?

Eche un vistazo al siguiente ejemplo donde llamamos .push()a una matriz dentro de una función. Recuerde,
 el .push()método muta o cambia una matriz: */
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
    arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

/* Repasemos lo que sucedió en el ejemplo:

La flowersmatriz que tiene 3 elementos.

La función addFlower()tiene un parámetro de arrusos .push()para agregar un 'lily'elemento en arr.

Lo llamamos addFlower()con un argumento del flowerscual se ejecutará el código que contiene addFlower.

¡Comprobamos el valor de flowersy ahora incluye el 'lily'elemento! ¡La matriz fue mutada!

Entonces, cuando pasa una matriz a una función, si la matriz se muta dentro de la función, 
ese cambio también se mantendrá fuera de la función. También puede ver este concepto explicado como paso por referencia, 
ya que lo que en realidad estamos pasando a la función es una referencia a dónde se almacena la memoria variable 
y cambia la memoria. */


/* 1 . En main.js , hay una matriz concept. También hay una función changeArrque asignará el elemento en el índice 3 
de una matriz a 'MUTATED'. La función changeArrfue llamada con un argumento de concept.

Debajo de la llamada a la función, inicie sesión concepten la consola para verificar si esta reasignación mutó la matriz. */
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept); // [ 'arrays', 'can', 'be', 'MUTATED' ]

/* 2 . Verifiquemos dos veces qué sucede si mutamos una matriz usando un método integrado dentro de una función.

Debajo de la console.log()declaración, defina otra función llamada removeElementque tome un parámetro de newArr. 
Dentro del cuerpo de la función llama .pop()a newArr. */
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
};

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
    newArr.pop();
};

/* 3 . Llamada removeElement()con un argumento de concept. */
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
};

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
    newArr.pop();
};
removeElement(concept);

/* 4 . Después de llamar removeElement(concept), verifique el valor de conceptregistrándolo en la consola.

¡Observe que en ambos casos, el cambio a la matriz se mantuvo fuera de la función! */
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
};

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
    newArr.pop();
};
removeElement(concept);
console.log(concept);