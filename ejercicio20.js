// Función para obtener las raíces reales de una ecuación cuadrática
function obtenerRaices(a, b, c) {
    // Calcular el discriminante
    let discriminante = Math.pow(b, 2) - 4 * a * c;
  
    // Inicializar las letiables para las raíces
    let raiz1;
    let raiz2;
  
    // Verificar si el discriminante es negativo
    if (discriminante < 0) {
      // Si el discriminante es negativo, las raíces son complejas
      alert("Las raíces son complejas.");
    } else if (discriminante === 0) {
      // Si el discriminante es igual a cero, hay una raíz real
      raiz1 = -b / (2 * a);
      alert("La única raíz real es: " + raiz1.toFixed(2));
    } else {
      // Si el discriminante es positivo, hay dos raíces reales
      raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      alert("Las raíces reales son: " + raiz1.toFixed(2) + " y " + raiz2.toFixed(2));
    }
  }
  
  // Llamar a la función para obtener las raíces reales de la ecuación cuadrática
  let a = parseFloat(prompt("Ingresa el coeficiente a:"));
  let b = parseFloat(prompt("Ingresa el coeficiente b:"));
  let c = parseFloat(prompt("Ingresa el coeficiente c:"));
  obtenerRaices(a, b, c);
  