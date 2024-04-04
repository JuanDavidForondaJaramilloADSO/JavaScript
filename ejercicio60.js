let cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));
let pago;

if (cantidadCursos <= 6) {
    pago = cantidadCursos * 2000000;
} else {
    pago = 1200000;
}

alert("El pago total es: $" + pago.toFixed(2));
