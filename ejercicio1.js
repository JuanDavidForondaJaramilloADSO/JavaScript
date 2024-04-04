function verificarEdad() {
    let edadInput;
    let edad;
  
    do {
      edadInput = prompt("Ingresa tu edad:");
      edad = parseInt(edadInput);
  
      if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingresa un número positivo válido.");
      }
    } while (isNaN(edad) || edad <= 0);
  
    if (edad >= 18) {
      alert("Eres mayor de edad.");
    } else {
      alert("Eres menor de edad.");
    }
  }
  