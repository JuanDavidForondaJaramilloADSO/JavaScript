// Función para calcular el precio de la entrada
function calcularPrecioEntrada() {
    // Solicitar la edad al usuario
    let edad = parseInt(prompt("Ingresa tu edad:"));
  
    // Calcular el precio de la entrada según la edad
    let precioEntrada;
    if (edad < 4) {
      precioEntrada = 0;
    } else if (edad <= 18) {
      precioEntrada = 5;
    } else {
      precioEntrada = 10;
    }
  
    // Mostrar el precio de la entrada en una alerta
    alert("El precio de la entrada es: " + precioEntrada + "€");
  }
  
  // Llamar a la función para calcular el precio de la entrada
  calcularPrecioEntrada();
  