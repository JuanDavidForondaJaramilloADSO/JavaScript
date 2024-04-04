let edad = parseInt(prompt("Ingrese su edad:"));
let anosCumplidos = "";

for (let i = 1; i <= edad; i++) {
    anosCumplidos += i + "\n";
}

alert("Años cumplidos:\n" + anosCumplidos);
