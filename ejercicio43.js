// Definimos una cadena de texto que contiene cadenas entre comillas dobles y caracteres escapados
let texto = 'Este es un "texto" con algunas cadenas "entre comillas" y algunos caracteres \\\"escapados\\\".';

// Definimos la expresión regular para encontrar cadenas entre comillas dobles
let regex = /"(?:\\.|[^\\"])*"/g;

// Encontramos todas las coincidencias en la cadena de texto
let coincidencias = texto.match(regex);

// Mostramos las coincidencias encontradas
console.log("Coincidencias encontradas:");
coincidencias.forEach(coincidencia => {
    console.log(coincidencia);
});
