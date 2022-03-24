// Ejemoplo 1
const movies = [{
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3
    },
    {
        title: 'The Green Mile',
        year: 1999,
        director: 'Frank Darabont',
        duration: '3h 9min',
        genre: ['Crime', 'Drama', 'Fantasy', 'Mystery'],
        score: 8.5
    },
    {
        title: 'City Lights',
        year: 1931,
        director: 'Charles Chaplin',
        duration: '1h 27min',
        genre: ['Comedy', 'Drama', 'Romance'],
        score: 8.6
    },
    {
        title: 'Modern Times',
        year: 1936,
        director: 'Charles Chaplin',
        duration: '1h 27min',
        genre: ['Comedy', 'Drama', 'Family', 'Romance'],
        score: 8.5
    }
]
// Primero recogemos las peliculas en una constante con .map()
const titles = movies.map((getAllTitles) => {
    return `${getAllTitles.title}`;
});
console.log(titles); // Array de peliculas sin ordenar 

/* [ 'The Shawshank Redemption',
  'The Green Mile',
  'City Lights',
  'Modern Times' ] */

// A continuacion las ordenamos alfabeticamente
const alphabeticalOrder = titles.sort();
console.log(alphabeticalOrder); // Array de peliculas ordenadas alfabeticamente

/* [ 'City Lights',
  'Modern Times',
  'The Green Mile',
  'The Shawshank Redemption' ] */


// Ejemplo 2
//Ordenar cadenas en un array alfabéticamente:

const letters = ['d', 'b', 'e', 'a', 'c'];
const alphabeticalOrder = letters.sort();

console.log(alphabeticalOrder);
// Output: ['a', 'b', 'c', 'd', 'e']


// Ejemplo 3 
// Ordenar números en valor ascendente
const values = [4, 3, 2, 1];
const ascendingValues = values.sort((a, b) => a - b);

console.log(ascendingValues);
// Output: [1, 2, 3, 4]


// Ejemplo 4
// Ordenar números en valor descendente
const values = [1, 2, 3, 4];
const descendingValues = values.sort((a, b) => b - a);

console.log(descendingValues);
// Output: [4, 3, 2, 1]