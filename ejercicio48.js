let figura = prompt("¿Qué figura geométrica desea calcular? (Escriba 'T' para triángulo o 'C' para círculo):").toUpperCase();

if (figura === 'T') {
    let base = parseFloat(prompt("Por favor, ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Por favor, ingrese la altura del triángulo:"));
    
    let areaTriangulo = (base * altura) / 2;
    
    alert("El área del triángulo es: " + areaTriangulo.toFixed(2));
} else if (figura === 'C') {
    const PI = Math.PI;
    let radio = parseFloat(prompt("Por favor, ingrese el radio del círculo:"));
    
    let areaCirculo = PI * radio * radio;
    
    alert("El área del círculo es: " + areaCirculo.toFixed(2));
} else {
    alert("Opción no válida. Por favor, escriba 'T' o 'C'.");
}
