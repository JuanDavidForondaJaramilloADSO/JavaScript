// Función para calcular la longitud y el área de una circunferencia
function calcularCircunferencia() {
    // Solicitar al usuario el radio de la circunferencia
    let radio = parseFloat(prompt("Ingresa el radio de la circunferencia:"));
  
    // Calcular la longitud de la circunferencia
    let longitud = 2 * Math.PI * radio;
  
    // Calcular el área de la circunferencia
    let area = Math.PI * radio * radio;
  
    // Mostrar la longitud y el área de la circunferencia en una alerta
    alert("La longitud de la circunferencia es: " + longitud.toFixed(2) + "\nEl área de la circunferencia es: " + area.toFixed(2));
  }
  
  // Llamar a la función para calcular la longitud y el área de la circunferencia
  calcularCircunferencia();
  