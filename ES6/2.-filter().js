// Filtrado de un array de objetos
const kickballPlayers = [{
        name: 'Jim',
        team: 'Red'
    },
    {
        name: 'Bob',
        team: 'Red'
    },
    {
        name: 'Sarah',
        team: 'Blue'
    },
    {
        name: 'Alex',
        team: 'Red'
    },
    {
        name: 'James',
        team: 'Blue'
    },
    {
        name: 'Sam',
        team: 'Blue'
    },
    {
        name: 'Peter',
        team: 'Red'
    },
    {
        name: 'Michael',
        team: 'Red'
    },
    {
        name: 'Kenny',
        team: 'Blue'
    },
    {
        name: 'Matt',
        team: 'Blue'
    },
];

const redTeam = kickballPlayers.filter((player) => player.team === 'Red');

console.log(redTeam);
/* [ { name: 'Jim', team: 'Red' },
{ name: 'Bob', team: 'Red' },
{ name: 'Alex', team: 'Red' },
{ name: 'Peter', team: 'Red' },
{ name: 'Michael', team: 'Red' } ] */