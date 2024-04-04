let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas de los alumnos:"));
let notaAlta = -Infinity;
let notaBaja = Infinity;
let cantidadMaximasNotas = 0;
let cantidadA = 0;
let cantidadB = 0;
let cantidadC = 0;
let cantidadD = 0;

for (let i = 0; i < cantidadNotas; i++) {
    let nota = parseFloat(prompt("Ingrese la nota del alumno " + (i + 1) + ":"));

    if (nota > notaAlta) {
        notaAlta = nota;
    }

    if (nota < notaBaja) {
        notaBaja = nota;
    }

    if (nota === 100) {
        cantidadMaximasNotas++;
    } else if (nota >= 90) {
        cantidadA++;
    } else if (nota >= 80) {
        cantidadB++;
    } else if (nota >= 70) {
        cantidadC++;
    } else if (nota >= 60) {
        cantidadD++;
    }
}

alert("Nota más alta: " + notaAlta.toFixed(2) +
      "\nNota más baja: " + notaBaja.toFixed(2) +
      "\nCantidad de alumnos con nota máxima (100): " + cantidadMaximasNotas +
      "\nCantidad de alumnos con calificación 'A': " + cantidadA +
      "\nCantidad de alumnos con calificación 'B': " + cantidadB +
      "\nCantidad de alumnos con calificación 'C': " + cantidadC +
      "\nCantidad de alumnos con calificación 'D': " + cantidadD);
