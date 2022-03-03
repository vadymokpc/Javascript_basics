/* Bucles anidados

Cuando tenemos un bucle ejecutándose dentro de otro bucle, lo llamamos bucle anidado . Un uso de un for bucle anidado
 es comparar los elementos de dos matrices. Para cada ronda del ciclo externo for, el ciclo interno forse ejecutará 
 por completo.

Veamos un ejemplo de un forbucle anidado: */
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Ambos bucles tienen el número: ' + yourArray[j])
        }
    }
};

/* Pensemos en lo que sucede en el bucle anidado de nuestro ejemplo. Para cada elemento de la matriz de bucle exterior
 myArray, el bucle interior se ejecutará en su totalidad comparando el elemento actual de la matriz exterior myArray[i],
  con cada elemento de la matriz interior, yourArray[j]. Cuando encuentra una coincidencia, 
  imprime una cadena en la consola. */


/*  1 . ¡Imagínate que eres un programador importante para una plataforma de redes sociales! Se le ha encomendado 
 la tarea de crear un prototipo para un programa de seguidores mutuos. Necesitará dos conjuntos de "amigos" 
 de dos usuarios simulados para poder extraer los nombres de los seguidores que existen en ambas listas. 
 Cree una variable llamada bobsFollowersy configúrela igual a una matriz con cuatro cadenas que representan 
 los nombres de los amigos de Bob. */
const bobsFollowers = ['Omar', 'Cristian', 'Victor', 'Imad'];

/*   2 . Cree una variable llamada tinasFollowersy configúrela igual a una matriz con tres cadenas que representan
   los nombres de los amigos de Tina. Haga exactamente dos de estos iguales a dos de los amigos en la bobsFollowersmatriz. */
const bobsFollowers = ['Omar', 'Cristian', 'Victor', 'Imad'];

const tinasFollowers = ['Cristian', 'Carlos', 'Omar'];

/* 3 . Cree una tercera variable nombrada mutualFollowersy configúrela en una matriz vacía. */
const bobsFollowers = ['Omar', 'Cristian', 'Victor', 'Imad'];

const tinasFollowers = ['Cristian', 'Carlos', 'Omar'];

const mutualFollowers = [];

/* 4 . Cree un bucle anidado que itere bobsFollowerscomo matriz para el bucle externo y tinasFollowerscomo matriz 
para el bucle interno. Si el elemento actual del ciclo externo es el mismo que el elemento actual del ciclo interno, 
inserte ese elemento en la mutualFollowersmatriz. */
const bobsFollowers = ['Omar', 'Cristian', 'Victor', 'Imad'];

const tinasFollowers = ['Cristian', 'Carlos', 'Omar'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let a = 0; a < tinasFollowers.length; a++) {
        if (bobsFollowers[i] === tinasFollowers[a]) {
            mutualFollowers.push(tinasFollowers[a]);
        }
    }
};
console.log(mutualFollowers); // [ 'Omar', 'Cristian' ]