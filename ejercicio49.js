let lado1 = parseFloat(prompt("Por favor, ingrese el primer lado del rectángulo:"));
let lado2 = parseFloat(prompt("Por favor, ingrese el segundo lado del rectángulo:"));

if (lado1 > 0 && lado2 > 0) {
    let areaRectangulo = lado1 * lado2;
    alert("El área del rectángulo es: " + areaRectangulo.toFixed(2));
} else {
    alert("Los lados del rectángulo deben ser números positivos.");
}
