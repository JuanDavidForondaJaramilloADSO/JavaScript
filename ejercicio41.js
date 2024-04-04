// Pedimos al usuario que ingrese una frase
let frase = prompt("Por favor, ingresa una frase que te identifique como programador de software:");

// Función para invertir una cadena de texto
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// Invertimos la frase ingresada por el usuario
let fraseInvertida = invertirCadena(frase);

// Mostramos la frase invertida en una alerta
alert("La frase invertida es: " + fraseInvertida);
