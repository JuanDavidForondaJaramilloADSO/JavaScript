// Función para calcular el volumen de una esfera
function calcularVolumenEsfera() {
    // Solicitar al usuario el radio de la esfera
    let radio = parseFloat(prompt("Ingresa el radio de la esfera:"));
  
    // Calcular el volumen de la esfera
    let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
  
    // Mostrar el volumen de la esfera en una alerta
    alert("El volumen de la esfera es: " + volumen.toFixed(2));
  }
  
  // Llamar a la función para calcular el volumen de la esfera
  calcularVolumenEsfera();
  