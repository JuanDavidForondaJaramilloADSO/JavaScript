// Función para calcular el pago de una llamada telefónica
function calcularPagoLlamada(duracion) {
    // Costo por minuto y porcentaje de IVA
    let costoMinuto = 355;
    let iva = 0.20;
  
    // Calcular el costo sin IVA
    let costoSinIva = duracion * costoMinuto;
  
    // Calcular el monto del IVA
    let montoIva = costoSinIva * iva;
  
    // Calcular el costo total incluyendo el IVA
    let costoTotal = costoSinIva + montoIva;
  
    // Mostrar el pago de la llamada telefónica en una alerta
    alert("El costo de la llamada telefónica es: $" + costoTotal.toFixed(2));
  }
  
  // Solicitar al usuario la duración de la llamada en minutos
  let duracionLlamada = parseFloat(prompt("Ingresa la duración de la llamada en minutos:"));
  
  // Llamar a la función para calcular el pago de la llamada telefónica
  calcularPagoLlamada(duracionLlamada);
  