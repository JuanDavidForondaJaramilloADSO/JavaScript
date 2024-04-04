let numero = parseInt(prompt("Ingrese un número entero positivo:"));
let cuentaAtras = "";

for (let i = numero; i >= 0; i--) {
    cuentaAtras += i + ",";
}

cuentaAtras = cuentaAtras.slice(0, -1); // Eliminar la última coma

alert("Cuenta atrás desde " + numero + " hasta 0:\n" + cuentaAtras);
