// Función para calcular el sueldo de un empleado
function calcularSueldo() {
    // Solicitar al usuario el nombre, horas de trabajo y pago por hora
    let nombre = prompt("Ingrese el nombre del empleado:");
    let horasTrabajo = parseFloat(prompt("Ingrese las horas trabajadas por el empleado:"));
    let pagoPorHora = parseFloat(prompt("Ingrese el pago por hora del empleado:"));

    // Calcular el sueldo del empleado
    let sueldo = horasTrabajo * pagoPorHora;

    // Mostrar el sueldo del empleado en una alerta
    alert("El sueldo de " + nombre + " es: $" + sueldo.toFixed(2));
}

// Llamar a la función para calcular el sueldo del empleado
calcularSueldo();
