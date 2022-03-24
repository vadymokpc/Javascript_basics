// Ejemplo 1
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];

const numero_caracteres = nombres.map(function (nombre) {
    console.log(`${nombre} tiene ${nombre.length} letras`);
});

//Ejemplo 2

const movies = [{
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
    },
    {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
    },
    {
        title: 'Dead Poets Society',
        year: 1989,
        director: 'Peter Weir',

    }
]

const directors = movies.map((getAllDirectors) => {
    return `${getAllDirectors.director}`;
});

console.log(directors); //[ 'Frank Darabont', 'Francis Ford Coppola', 'Peter Weir' ]


//Ejempplo 3

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((value) => value * 2);

console.log(doubled);
// Output: [2, 4, 6, 8, 10]