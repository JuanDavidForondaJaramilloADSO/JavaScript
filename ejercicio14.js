// Función para calcular el área de un triángulo
function calcularAreaTriangulo() {
    // Solicitar al usuario la base y la altura del triángulo
    let base = parseFloat(prompt("Ingresa la longitud de la base del triángulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
  
    // Calcular el área del triángulo
    let area = (base * altura) / 2;
  
    // Mostrar el área del triángulo en una alerta
    alert("El área del triángulo es: " + area);
  }
  
  // Llamar a la función para calcular el área del triángulo
  calcularAreaTriangulo();
  