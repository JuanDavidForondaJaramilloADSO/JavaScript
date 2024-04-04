// Función para realizar la división
function dividirNumeros() {
    // Obtener los números ingresados por el usuario
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
  
    // Verificar si el divisor es cero
    if (numero2 === 0 || isNaN(numero1) || isNaN(numero2)) {
      alert("Error: No se puede dividir por cero y ambos números deben ser válidos.");
      return;
    }
  
    // Calcular la división y mostrar el resultado
    let resultado = numero1 / numero2;
    alert("La división es: " + resultado);
  }
  
  // Llamar a la función para realizar la división
  dividirNumeros();
  