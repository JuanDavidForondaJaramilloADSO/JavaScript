// Función para calcular la edad
function calcularEdad(añoNacimiento) {
    // Obtenemos el año actual
    let añoActual = new Date().getFullYear();
    
    // Calculamos la edad restando el año actual al año de nacimiento
    let edad = añoActual - añoNacimiento;

    // Devolvemos la edad
    return edad;
}

// Pedimos al usuario que ingrese su año de nacimiento
let añoNacimiento = prompt("Por favor, ingresa tu año de nacimiento:");

// Convertimos el año de nacimiento ingresado a un número entero
añoNacimiento = parseInt(añoNacimiento);

// Verificamos si el año de nacimiento es válido
if (isNaN(añoNacimiento)) {
    alert("El año de nacimiento ingresado no es válido.");
} else {
    // Calculamos la edad llamando a la función calcularEdad
    let edad = calcularEdad(añoNacimiento);

    // Mostramos la edad en una alerta
    alert("Tu edad es: " + edad + " años.");
}
