// Función para calcular la media de 4 números
function calcularMedia() {
    // Solicitar al usuario los 4 números
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    let numero3 = parseFloat(prompt("Ingresa el tercer número:"));
    let numero4 = parseFloat(prompt("Ingresa el cuarto número:"));
  
    // Calcular la media
    let media = (numero1 + numero2 + numero3 + numero4) / 4;
  
    // Mostrar la media en una alerta
    alert("La media de los números ingresados es: " + media);
  }
  
  // Llamar a la función para calcular la media de 4 números
  calcularMedia();
  