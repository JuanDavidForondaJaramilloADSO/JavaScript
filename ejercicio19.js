// Función para calcular el área y el volumen de un cilindro
function calcularAreaVolumenCilindro() {
    // Solicitar al usuario el radio y la altura del cilindro
    let radio = parseFloat(prompt("Ingresa el radio del cilindro:"));
    let altura = parseFloat(prompt("Ingresa la altura del cilindro:"));
  
    // Calcular el área de la base del cilindro
    let areaBase = Math.PI * Math.pow(radio, 2);
  
    // Calcular el volumen del cilindro
    let volumen = areaBase * altura;
  
    // Calcular el área lateral del cilindro
    let areaLateral = 2 * Math.PI * radio * altura;
  
    // Calcular el área total del cilindro
    let areaTotal = 2 * areaBase + areaLateral;
  
    // Mostrar el área y el volumen del cilindro en una alerta
    alert("El área de la base del cilindro es: " + areaBase.toFixed(2) + "\nEl volumen del cilindro es: " + volumen.toFixed(2));
  }
  
  // Llamar a la función para calcular el área y el volumen del cilindro
  calcularAreaVolumenCilindro();
  