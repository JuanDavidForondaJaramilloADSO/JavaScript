// Función para calcular el promedio final de la materia de algoritmos
function calcularPromedioFinal() {
    // Solicitar al usuario las calificaciones de los parciales, examen final y trabajo final
    let parcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial:"));
    let parcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial:"));
    let parcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial:"));
    let examenFinal = parseFloat(prompt("Ingrese la calificación del examen final:"));
    let trabajoFinal = parseFloat(prompt("Ingrese la calificación del trabajo final:"));

    // Calcular el promedio de los parciales
    let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

    // Calcular el promedio final
    let promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    // Mostrar el promedio final en una alerta
    alert("El promedio final de la materia de Algoritmos es: " + promedioFinal.toFixed(2));
}

// Llamar a la función para calcular el promedio final
calcularPromedioFinal();
