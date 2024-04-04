// Función para calcular el descuento y el precio final en una farmacia
function calcularDescuentoYPrecioFinal(costoMedicamentos) {
    // Calcular el descuento
    let descuento = costoMedicamentos * 0.1;
  
    // Calcular el precio final después del descuento
    let precioFinal = costoMedicamentos - descuento;
  
    // Mostrar el descuento y el precio final en una alerta
    alert("Descuento aplicado: $" + descuento.toFixed(2) + "\nPrecio final: $" + precioFinal.toFixed(2));
  }
  
  // Solicitar al usuario el costo de los medicamentos
  let costoMedicamentos = parseFloat(prompt("Ingresa el costo de los medicamentos:"));
  
  // Llamar a la función para calcular el descuento y el precio final
  calcularDescuentoYPrecioFinal(costoMedicamentos);
  