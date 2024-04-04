let cantidadInvertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interesAnual = parseFloat(prompt("Ingrese el interés anual (en porcentaje):"));
let años = parseInt(prompt("Ingrese el número de años:"));

for (let i = 1; i <= años; i++) {
    let capitalObtenido = cantidadInvertir * (1 + interesAnual / 100) ** i;
    alert("Año " + i + ": $" + capitalObtenido.toFixed(2));
}
