// Función para ordenar una pizza
function ordenarPizza() {
    // Preguntar al usuario si quiere una pizza vegetariana o no
    let esVegetariana = confirm("¿Quieres una pizza vegetariana?");
  
    // Definir los ingredientes disponibles
    let ingredientes;
    if (esVegetariana) {
      ingredientes = "Pimiento, Tofu";
    } else {
      ingredientes = "Pepperoni, Jamón, Salmón";
    }
  
    // Solicitar al usuario que elija un ingrediente
    let ingredienteElegido = prompt("Elige un ingrediente de los siguientes:\n" + ingredientes);
  
    // Mostrar por pantalla si la pizza es vegetariana o no y los ingredientes que lleva
    if (esVegetariana) {
      alert("Tu pizza es vegetariana y lleva: Mozzarella, Tomate, " + ingredienteElegido);
    } else {
      alert("Tu pizza no es vegetariana y lleva: Mozzarella, Tomate, " + ingredienteElegido);
    }
  }
  
  // Llamar a la función para ordenar una pizza
  ordenarPizza();
  