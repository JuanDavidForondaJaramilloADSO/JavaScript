// Función para realizar operaciones aritméticas
function operacionesAritmeticas() {
    // Solicitar al usuario los dos números
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
  
    // Realizar las operaciones aritméticas
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;
  
    // Mostrar los resultados en una alerta
    alert("Suma: " + suma + "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivisión: " + division);
  }
  
  // Llamar a la función para realizar operaciones aritméticas
  operacionesAritmeticas();
  