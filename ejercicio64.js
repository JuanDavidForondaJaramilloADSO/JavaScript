let numero = parseInt(prompt("Ingrese un número entero positivo:"));
let impares = "";

for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        impares += i + ",";
    }
}

impares = impares.slice(0, -1); // Eliminar la última coma

alert("Números impares hasta " + numero + ":\n" + impares);
