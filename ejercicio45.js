// Pedimos al usuario que ingrese un número
let numero = parseFloat(prompt("Por favor, ingresa un número:"));

// Verificamos si el número es positivo y menor que 100
if (numero > 0 && numero < 100) {
    alert("El número ingresado es positivo y menor que 100.");
} else {
    alert("El número ingresado no es positivo o no es menor que 100.");
}
