// Función para calcular la velocidad de un proyectil
function calcularVelocidadProyectil() {
    // Definir las constantes
    let distanciaEnKm = 2;
    let tiempoEnMinutos = 5;
  
    // Convertir la distancia a metros y el tiempo a segundos
    let distanciaEnMetros = distanciaEnKm * 1000;
    let tiempoEnSegundos = tiempoEnMinutos * 60;
  
    // Calcular la velocidad
    let velocidad = distanciaEnMetros / tiempoEnSegundos;
  
    // Mostrar la velocidad del proyectil en una alerta
    alert("La velocidad del proyectil es: " + velocidad.toFixed(2) + " metros por segundo");
  }
  
  // Llamar a la función para calcular la velocidad del proyectil
  calcularVelocidadProyectil();
  