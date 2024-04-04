let entrada = "";

while (entrada !== "salir") {
    entrada = prompt("Escriba algo (escriba 'salir' para terminar):");
    if (entrada !== "salir") {
        alert(entrada);
    }
}
