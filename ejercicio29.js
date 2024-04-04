// Función para calcular el promedio de las calificaciones de un estudiante
function calcularPromedio() {
    // Solicitar al usuario las calificaciones de los exámenes
    let examen1 = parseFloat(prompt("Ingrese la calificación del primer examen (1 a 5 puntos):"));
    let examen2 = parseFloat(prompt("Ingrese la calificación del segundo examen (1 a 5 puntos):"));
    let examen3 = parseFloat(prompt("Ingrese la calificación del tercer examen (1 a 5 puntos):"));
    let examen4 = parseFloat(prompt("Ingrese la calificación del cuarto examen (1 a 5 puntos):"));

    // Calcular el promedio de las calificaciones
    let promedio = (examen1 + examen2 + examen3 + examen4) / 4;

    // Mostrar el promedio de las calificaciones en una alerta
    alert("El promedio de las calificaciones es: " + promedio.toFixed(2));
}

// Llamar a la función para calcular el promedio de las calificaciones
calcularPromedio();
