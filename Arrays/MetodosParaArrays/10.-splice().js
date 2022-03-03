/* El método splice() cambia el contenido de un array eliminando elementos existentes y / o agregando nuevos elementos.
 */
let cart = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    }
]
console.log(cart);
/* [ { id: 1, name: 'cooking oil', price: 10.5, type: 'grocery' },
                       { id: 2, name: 'Pasta', price: 6.25, type: 'grocery' },
                       { id: 3, name: 'Instant cupcake mixture', price: 5, type: 'grocery' } ] */


//En este caso vamos a vaciar el array de objetos cart

function cleanCart() {
    cart.splice(0, cart.length)
};

cleanCart(cart);
console.log(cart); // []