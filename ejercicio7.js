// Función para determinar el tipo de impuesto sobre la renta
function determinarImpuesto() {
    // Solicitar la renta anual al usuario
    let rentaAnual = parseFloat(prompt("Ingresa tu renta anual en euros:"));
  
    // Determinar el tipo de impuesto sobre la renta correspondiente
    if (rentaAnual <= 10000) {
      alert("Tu tipo de impuesto sobre la renta es del 0%.");
    } else if (rentaAnual <= 20000) {
      alert("Tu tipo de impuesto sobre la renta es del 5%.");
    } else if (rentaAnual <= 35000) {
      alert("Tu tipo de impuesto sobre la renta es del 10%.");
    } else if (rentaAnual <= 60000) {
      alert("Tu tipo de impuesto sobre la renta es del 20%.");
    } else {
      alert("Tu tipo de impuesto sobre la renta es del 45%.");
    }
  }
  
  // Llamar a la función para determinar el tipo de impuesto sobre la renta
  determinarImpuesto();
  