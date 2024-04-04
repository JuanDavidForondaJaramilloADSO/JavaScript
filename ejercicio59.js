let edad = parseInt(prompt("Ingrese la edad del postulante:"));
let estatura = parseInt(prompt("Ingrese la estatura del postulante en centímetros:"));
let peso = parseInt(prompt("Ingrese el peso del postulante en kilogramos:"));

if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
    alert("El postulante cumple con los requisitos y puede formar parte del equipo de basquetbol.");
} else {
    alert("El postulante no cumple con los requisitos para formar parte del equipo de basquetbol.");
}
