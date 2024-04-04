// Definimos las variables con let
let totalTapas = 1; // El total de tapas de gaseosas, asumimos que es 1 para simplificar los cálculos

// Martín toma 2/3 del total
let parteMartin = (2/3) * totalTapas;

// Jairo toma 1/4 del total
let parteJairo = (1/4) * totalTapas;

// Lorena se queda con el resto
let parteLorena = totalTapas - parteMartin - parteJairo;

// Mostramos la parte de Lorena en una alerta
alert("A Lorena le corresponde " + parteLorena + " partes de tapas de gaseosas.");
