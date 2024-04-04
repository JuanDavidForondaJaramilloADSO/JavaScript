let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
    let resta = num1 - num2;
    alert("La resta de " + num1 + " menos " + num2 + " es: " + resta);
} else {
    alert("La resta no es posible porque el primer número no es mayor que el segundo.");
}
