// Función para calcular el volumen de un elipsoide
function calcularVolumenElipsoide() {
    // Solicitar al usuario los semiejes del elipsoide
    let semiejeA = parseFloat(prompt("Ingresa el semieje 'a' del elipsoide:"));
    let semiejeB = parseFloat(prompt("Ingresa el semieje 'b' del elipsoide:"));
    let semiejeC = parseFloat(prompt("Ingresa el semieje 'c' del elipsoide:"));
  
    // Calcular el volumen del elipsoide
    let volumen = (4 / 3) * Math.PI * semiejeA * semiejeB * semiejeC;
  
    // Mostrar el volumen del elipsoide en una alerta
    alert("El volumen del elipsoide es: " + volumen.toFixed(2));
  }
  
  // Llamar a la función para calcular el volumen del elipsoide
  calcularVolumenElipsoide();
  