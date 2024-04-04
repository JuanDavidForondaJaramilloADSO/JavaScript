// Función para comprobar la fortaleza de una contraseña
function comprobarFortaleza(contrasena) {
    // Longitud de la contraseña
    let longitud = contrasena.length;

    // Verificar que la contraseña tenga entre 8 y 12 caracteres
    if (longitud < 8 || longitud > 12) {
        alert("La contraseña debe tener entre 8 y 12 caracteres.");
        return;
    }

    // Verificar si la contraseña contiene al menos una mayúscula, una minúscula y un dígito
    let contieneMayuscula = false;
    let contieneMinuscula = false;
    let contieneDigito = false;

    for (let i = 0; i < longitud; i++) {
        let caracter = contrasena.charAt(i);
        if (caracter >= 'A' && caracter <= 'Z') {
            contieneMayuscula = true;
        } else if (caracter >= 'a' && caracter <= 'z') {
            contieneMinuscula = true;
        } else if (caracter >= '0' && caracter <= '9') {
            contieneDigito = true;
        }
    }

    if (!contieneMayuscula || !contieneMinuscula || !contieneDigito) {
        alert("La contraseña debe contener al menos una mayúscula, una minúscula y un dígito.");
        return;
    }

    // Si pasa todas las verificaciones, la contraseña es válida
    alert("La contraseña es fuerte y válida.");
}

// Solicitar al usuario que ingrese la contraseña
let contrasena = prompt("Ingrese su contraseña:");

// Llamar a la función para comprobar la fortaleza de la contraseña
comprobarFortaleza(contrasena);
