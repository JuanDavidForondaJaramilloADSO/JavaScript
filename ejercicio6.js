// Función para verificar el grupo al que corresponde el alumno
function verificarGrupo() {
    // Solicitar el nombre y sexo del usuario
    let nombre = prompt("Ingresa tu nombre:");
    let sexo = prompt("Ingresa tu sexo (M para mujer, H para hombre):").toUpperCase();
  
    // Verificar el grupo al que corresponde el alumno
    if ((sexo === "M" && nombre.toLowerCase() < 'm') || (sexo === "H" && nombre.toLowerCase() > 'n')) {
      alert("Perteneces al grupo A.");
    } else {
      alert("Perteneces al grupo B.");
    }
  }
  
  // Llamar a la función para verificar el grupo al que corresponde
  verificarGrupo();
  