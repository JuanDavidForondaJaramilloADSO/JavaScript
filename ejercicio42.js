// Solicitamos al usuario que ingrese la cantidad de ventas para cada artículo
let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
let cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
let cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));

// Definimos los precios de cada artículo
const precioLibro = 10000;
const precioCuaderno = 7550;
const precioLapicero = 5550;

// Calculamos el monto total de la venta
let montoTotalVenta = (cantidadLibros * precioLibro) + (cantidadCuadernos * precioCuaderno) + (cantidadLapiceros * precioLapicero);

// Mostramos el monto total de la venta en una alerta
alert("El monto total de la venta es: $" + montoTotalVenta);
