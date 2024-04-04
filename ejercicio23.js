// Función para convertir la velocidad de kilómetros por hora a metros por segundo
function convertirVelocidad(kilometrosPorHora) {
    // Calcular la velocidad en metros por segundo
    let metrosPorSegundo = kilometrosPorHora * (1000 / 3600);
  
    // Mostrar la velocidad en metros por segundo en una alerta
    alert(kilometrosPorHora + " km/h equivale a " + metrosPorSegundo.toFixed(2) + " m/s");
  }
  
  // Solicitar al usuario la velocidad en kilómetros por hora
  let velocidadKmh = parseFloat(prompt("Ingresa la velocidad en kilómetros por hora:"));
  
  // Llamar a la función para convertir la velocidad a metros por segundo
  convertirVelocidad(velocidadKmh);
  