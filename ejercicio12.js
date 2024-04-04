// Función para calcular el área de un rectángulo
function calcularAreaRectangulo() {
    // Solicitar al usuario la base y la altura del rectángulo
    let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
  
    // Calcular el área del rectángulo
    let area = base * altura;
  
    // Mostrar el área del rectángulo en una alerta
    alert("El área del rectángulo es: " + area);
  }
  
  // Llamar a la función para calcular el área del rectángulo
  calcularAreaRectangulo();
  