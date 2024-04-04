// Función para convertir grados Celsius a grados Fahrenheit
function convertir() {
    // Solicitar al usuario los grados Celsius
    let celsius = parseFloat(prompt("Ingrese los grados Celsius:"));

    // Calcular los grados Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;

    // Mostrar el resultado en una alerta
    alert("Grados Fahrenheit: " + fahrenheit.toFixed(2));
}

// Llamar a la función de conversión cuando se carga la página
convertir();
