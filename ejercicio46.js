// Pedimos al usuario que ingrese tres números
let numero1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
let numero2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Por favor, ingresa el tercer número:"));

// Verificamos cuál es el mayor de los tres números
let mayor;

if (numero1 > numero2 && numero1 > numero3) {
    mayor = numero1;
} else if (numero2 > numero1 && numero2 > numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

// Mostramos el resultado en una alerta
alert("El mayor de los tres números ingresados es: " + mayor);
