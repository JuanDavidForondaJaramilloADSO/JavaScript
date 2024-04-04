// Función para determinar el nivel de rendimiento y los beneficios correspondientes
function determinarRendimiento() {
    // Solicitar la puntuación al usuario
    let puntuacion = parseFloat(prompt("Ingresa tu puntuación (0.0, 0.4, 0.6 o más):"));
  
    // Verificar el nivel de rendimiento y calcular los beneficios correspondientes
    let nivel;
    let beneficios;
    if (puntuacion === 0.0) {
      nivel = "Inaceptable";
      beneficios = 0;
    } else if (puntuacion === 0.4) {
      nivel = "Aceptable";
      beneficios = 2400 * 0.4;
    } else if (puntuacion >= 0.6) {
      nivel = "Meritorio";
      beneficios = 2400 * puntuacion;
    } else {
      alert("La puntuación ingresada no es válida.");
      return;
    }
  
    // Mostrar el nivel de rendimiento y los beneficios correspondientes en una alerta
    alert("Tu nivel de rendimiento es: " + nivel + "\nY recibirás " + beneficios + "€ en beneficios.");
  }
  
  // Llamar a la función para determinar el nivel de rendimiento y los beneficios correspondientes
  determinarRendimiento();
  