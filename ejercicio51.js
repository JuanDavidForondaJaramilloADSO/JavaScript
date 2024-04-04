let totalPagos = 0;

// Solicitamos al usuario que ingrese el valor de cada pago
while (true) {
    let pago = parseFloat(prompt("Ingrese el valor del pago (escriba '0' para finalizar):"));
    if (isNaN(pago)) {
        alert("Por favor, ingrese un número válido.");
    } else if (pago === 0) {
        break;
    } else {
        totalPagos += pago;
    }
}

// Verificamos si el consumo total excede los $130,000 para aplicar el descuento
if (totalPagos > 130000) {
    let descuento = totalPagos * 0.15;
    let totalAPagar = totalPagos - descuento;
    console.log("El consumo total es: $" + totalPagos.toFixed(2));
    console.log("Se aplicó un descuento del 15% ($" + descuento.toFixed(2) + ")");
    console.log("El total a pagar con descuento es: $" + totalAPagar.toFixed(2));
} else {
    console.log("El consumo total es: $" + totalPagos.toFixed(2));
    console.log("No se aplicó ningún descuento.");
    console.log("El total a pagar es: $" + totalPagos.toFixed(2));
}
