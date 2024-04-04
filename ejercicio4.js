// Función para verificar si un número es par o impar
function verificarParImpar() {
    // Obtener el número ingresado por el usuario
    let numero = parseInt(prompt("Ingresa un número entero:"));
  
    // Verificar si el número es par o impar y mostrar el resultado en una alerta
    if (numero % 2 === 0) {
      alert(numero + " es un número par.");
    } else {
      alert(numero + " es un número impar.");
    }
  }
  
  // Llamar a la función para verificar par o impar
  verificarParImpar();
  