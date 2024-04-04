// Función para verificar si el usuario debe tributar
function verificarTributacion() {
    // Solicitar la edad e ingresos mensuales al usuario
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let ingresos = parseFloat(prompt("Ingresa tus ingresos mensuales en euros:"));
  
    // Verificar si cumple con los requisitos para tributar
    if (edad > 16 && ingresos >= 1000) {
      alert("Debes tributar.");
    } else {
      alert("No debes tributar.");
    }
  }
  
  // Llamar a la función para verificar si debe tributar
  verificarTributacion();
  