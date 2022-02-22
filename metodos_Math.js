/* Imprime un número aleatorio entre 0 y 1 (1 no incluido)*/
console.log(Math.random());

/* En este caso:
Math.randomgenera un número aleatorio entre 0 y 1.
Luego multiplicamos ese número por 50, así que ahora tenemos un número entre 0 y 50.
Luego, Math.floor()redondea el número hacia abajo al número entero más cercano. */
console.log(Math.floor(Math.random() * 50));

/* Devuelve el entero más pequeño mayor o igual que 43.8 (Redondea acia arriba al numero entero mascercano). */
console.log(Math.ceil(43.8));