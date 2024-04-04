// Función para calcular el precio con descuento
function calcularPrecioConDescuento(precio, descuento) {
    return precio * (1 - descuento);
}

// Solicitar al usuario los precios de los 5 productos
const precioProductos = [];
for (let i = 0; i < 5; i++) {
    let precio = parseFloat(prompt("Ingrese el precio del producto " + (i + 1) + ":"));
    precioProductos.push(precio);
}

// Descuento para los dos primeros productos (5%)
const descuento5Porciento = 0.05;

// Descuento para los dos últimos productos (2%)
const descuento2Porciento = 0.02;

// Calcular precios de los productos con descuento
const preciosConDescuento = precioProductos.map((precio, index) => {
    if (index < 2) {
        return calcularPrecioConDescuento(precio, descuento5Porciento);
    } else {
        return calcularPrecioConDescuento(precio, descuento2Porciento);
    }
});

// Calcular el total de la compra
const totalCompra = preciosConDescuento.reduce((total, precio) => total + precio, 0);

// Construir el mensaje para mostrar en el alert
let mensaje = "Precio de los productos con descuento:\n";
preciosConDescuento.forEach((precio, index) => {
    mensaje += "Producto " + (index + 1) + ": $" + precio.toFixed(2) + "\n";
});
mensaje += "\nTotal de la compra: $" + totalCompra.toFixed(2);

// Mostrar resultados en alert
alert(mensaje);
