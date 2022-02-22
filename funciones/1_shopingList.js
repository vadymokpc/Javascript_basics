/* 1 . La función makeShoppingList()crea una lista de compras basada en los elementos que se pasan a la función como argumentos.
Imagine que siempre compra leche, pan y huevos cada vez que va de compras. Para facilitar la creación de una lista de compras, 
asignemos valores predeterminados a los parámetros en makeShoppingList().
Cambie los parámetros de makeShoppingList()a parámetros predeterminados:

Asigne 'leche' como el valor predeterminado de item1.
Asigne 'pan' como el valor predeterminado de item2.
Asigne 'huevos' como el valor predeterminado de item3. */
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
makeShoppingList();