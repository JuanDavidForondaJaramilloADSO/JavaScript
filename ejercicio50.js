// Pedimos al usuario que ingrese la temperatura y la presión
let temperatura = parseFloat(prompt("Por favor, ingrese la temperatura:"));
let presion = parseFloat(prompt("Por favor, ingrese la presión:"));

// Verificamos si la presión es mayor a 200 o si la temperatura es mayor a 100
if (presion > 200 || temperatura > 100) {
    console.log("Alarma");
} else {
    console.log("Normal");
}
