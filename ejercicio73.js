let frase = prompt("Ingrese una frase:");
let letra = prompt("Ingrese una letra:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        contador++;
    }
}

alert("La letra '" + letra + "' aparece " + contador + " veces en la frase.");
