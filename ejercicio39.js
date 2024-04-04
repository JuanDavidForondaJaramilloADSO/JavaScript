// Función para calcular el presupuesto
function calcularPresupuesto(area, precioPorMetroCuadrado) {
    return area * precioPorMetroCuadrado;
}

// Ejemplo de uso de la función
let areaTrabajo = 100; // en metros cuadrados
let precioPorMetroCuadrado = 20; // precio por metro cuadrado en la moneda deseada

let presupuesto = calcularPresupuesto(areaTrabajo, precioPorMetroCuadrado);

// Mostramos el presupuesto en una alerta
alert("El presupuesto para el trabajo de pintura es: " + presupuesto + " unidades monetarias.");
