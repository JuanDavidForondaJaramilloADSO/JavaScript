let precioHelado = parseFloat(prompt("Ingrese el precio del helado:"));
let cantidadComprada = parseInt(prompt("Ingrese la cantidad de helados comprados:"));
let tipoMembresia = prompt("Ingrese su tipo de membresía (A, B o C):").toUpperCase();
let descuento = 0;
let totalCompra;

switch (tipoMembresia) {
    case "A":
        descuento = 0.1;
        break;
    case "B":
        descuento = 0.15;
        break;
    case "C":
        descuento = 0.20;
        break;
    default:
        alert("Tipo de membresía no válido.");
}

if (descuento > 0) {
    totalCompra = precioHelado * cantidadComprada * (1 - descuento);
    alert("El total de la compra con descuento es: $" + totalCompra.toFixed(2));
}
