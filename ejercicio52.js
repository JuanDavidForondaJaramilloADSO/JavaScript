// Solicitamos al usuario que ingrese el tipo de empleado y el número de horas trabajadas
let tipoEmpleado = prompt("Ingrese el tipo de empleado (Planta o Administrativo):").toLowerCase();
let horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas:"));

// Definimos las tarifas por hora para cada tipo de empleado
let tarifaPorHora;
let mensaje = "";

if (tipoEmpleado === "planta") {
    tarifaPorHora = 20000;
} else if (tipoEmpleado === "administrativo") {
    tarifaPorHora = 10000;
} else {
    alert("Tipo de empleado no válido.");
}

// Calculamos el pago total
if (tarifaPorHora) {
    let pagoTotal = tarifaPorHora * horasTrabajadas;
    mensaje += "El empleado trabajó " + horasTrabajadas + " horas.\n";
    mensaje += "El tipo de empleado es: " + tipoEmpleado + "\n";
    mensaje += "El pago total es: $" + pagoTotal.toFixed(2);
    alert(mensaje);
}
