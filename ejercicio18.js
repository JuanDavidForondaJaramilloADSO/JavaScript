// Función para evaluar la expresión (a+7*c) / (b+2-a) + 2*b
function evaluarExpresion() {
    // Solicitar al usuario los valores de a, b y c
    let a = parseFloat(prompt("Ingresa el valor de a:"));
    let b = parseFloat(prompt("Ingresa el valor de b:"));
    let c = parseFloat(prompt("Ingresa el valor de c:"));
  
    // Evaluar la expresión
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
  
    // Mostrar el resultado en una alerta
    alert("El resultado de la expresión es: " + resultado);
  }
  
  // Llamar a la función para evaluar la expresión
  evaluarExpresion();
  