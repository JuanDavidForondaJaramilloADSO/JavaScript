let calificacion1 = parseFloat(prompt("Ingrese la calificación 1:"));
let calificacion2 = parseFloat(prompt("Ingrese la calificación 2:"));
let calificacion3 = parseFloat(prompt("Ingrese la calificación 3:"));
let calificacion4 = parseFloat(prompt("Ingrese la calificación 4:"));
let calificacion5 = parseFloat(prompt("Ingrese la calificación 5:"));

let mensaje = "";

function asignarCalificacion(calificacion) {
    if (calificacion >= 9.1 && calificacion <= 10) {
        return "A (Excelente)";
    } else if (calificacion >= 8.1 && calificacion < 9) {
        return "A (Muy bien)";
    } else if (calificacion >= 7.5 && calificacion < 8) {
        return "A (Bien)";
    } else {
        return "NA (No Aprobado)";
    }
}

mensaje += "Calificación 1: " + asignarCalificacion(calificacion1) + "\n";
mensaje += "Calificación 2: " + asignarCalificacion(calificacion2) + "\n";
mensaje += "Calificación 3: " + asignarCalificacion(calificacion3) + "\n";
mensaje += "Calificación 4: " + asignarCalificacion(calificacion4) + "\n";
mensaje += "Calificación 5: " + asignarCalificacion(calificacion5) + "\n";

alert(mensaje);
