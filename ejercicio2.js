function verificarContrasena() {
    // Definir la contraseña
    let contrasenaAlmacenada = "juanda1";
  
    // Obtener la contraseña ingresada por el usuario
    let contrasenaInput = prompt("Ingresa la contraseña:");
  
    // Valida si la contraseña ingresada es alfanumérica
    if (!/^[a-zA-Z0-9]+$/.test(contrasenaInput)) { // La vuelta que explico john del alfanumerico
      alert("Por favor, ingresa solo valores alfanuméricos.");
      return;
    }
  
    // Verificar si la contraseña ingresada coincide con la contraseña almacenada (sin diferenciar entre mayúsculas y minúsculas)
    if (contrasenaInput.toLowerCase() === contrasenaAlmacenada.toLowerCase()) {
      alert("¡Contraseña correcta!");
    } else {
      alert("Contraseña incorrecta. Intenta de nuevo.");
    }
  }
  