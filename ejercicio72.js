let palabra = prompt("Ingrese una palabra:");
let letrasReversa = "";

for (let i = palabra.length - 1; i >= 0; i--) {
    letrasReversa += palabra[i] + "\n";
}

alert("Letras de la palabra en orden inverso:\n" + letrasReversa);
