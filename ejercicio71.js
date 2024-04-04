let numero = parseInt(prompt("Ingrese un número entero positivo mayor que 1:"));
let esPrimo = true;

if (numero <= 1 || !Number.isInteger(numero)) {
    alert("Debe ingresar un número entero positivo mayor que 1.");
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        alert(numero + " es un número primo.");
    } else {
        alert(numero + " no es un número primo.");
    }
}
