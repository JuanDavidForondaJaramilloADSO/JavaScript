// Función para calcular la distancia entre dos puntos
function calculaDistancia(x1, y1, x2, y2){
    // Fórmula para calcular la distancia entre dos puntos en un plano cartesiano
    let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distancia;
}

// Solicitar las coordenadas al usuario
let x1 = parseFloat(prompt("Ingrese la coordenada x1: "));
let y1 = parseFloat(prompt("Ingrese la coordenada y1: "));
let x2 = parseFloat(prompt("Ingrese la coordenada x2: "));
let y2 = parseFloat(prompt("Ingrese la coordenada y2: "));

// Calcular la distancia utilizando la función definida anteriormente
let distancia = calculaDistancia(x1, y1, x2, y2);

// Mostrar el resultado en un cuadro de diálogo de alerta
alert("La distancia entre los puntos (" + x1 + ", " + y1 + ") y (" + x2 + ", " + y2 + ") es: " + distancia.toFixed(2));
