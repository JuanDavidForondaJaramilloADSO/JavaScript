// Función para convertir pesos a dólares
function pesosADolares(pesos, valorDolar) {
    return pesos / valorDolar;
}

// Función para convertir pesos a euros
function pesosAEuros(pesos, valorEuro) {
    return pesos / valorEuro;
}

// Ejemplo de uso de las funciones
let cantidadPesos = parseFloat(prompt("Ingrese la cantidad de pesos:")); // Cantidad de pesos a convertir
let cantidadDolares = parseFloat(prompt("Ingrese la cantidad de dólares:")); // Cantidad de dólares

const valorDolar = 75; // Valor de un dólar en pesos
const valorEuro = 88; // Valor de un euro en pesos

let dolaresEquivalentes = pesosADolares(cantidadPesos, valorDolar) + cantidadDolares;
let euros = pesosAEuros(cantidadPesos, valorEuro);

// Mostramos los resultados en una alerta
alert(`Cantidad de pesos: ${cantidadPesos.toFixed(2)}\nCantidad de dólares: ${cantidadDolares.toFixed(2)}\nDólares equivalentes (sumando los ingresados): ${dolaresEquivalentes.toFixed(2)}\nEuros equivalentes: ${euros.toFixed(2)}`);
