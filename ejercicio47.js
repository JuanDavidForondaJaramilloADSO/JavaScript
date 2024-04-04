// Pedimos al usuario que ingrese tres números diferentes
let numero1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
let numero2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Por favor, ingresa el tercer número:"));

// Verificamos si los tres números son iguales
if (numero1 === numero2 && numero2 === numero3) {
    alert("Los tres números son iguales.");
} else if (numero1 > numero2 && numero1 > numero3) { // Comprobamos si el primer número es el mayor
    alert("El mayor número es: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) { // Comprobamos si el segundo número es el mayor
    alert("El mayor número es: " + numero2);
} else { // Si no es ninguno de los anteriores, entonces el tercer número es el mayor
    alert("El mayor número es: " + numero3);
}
