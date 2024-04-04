let altura = parseInt(prompt("Ingrese la altura del triángulo:"));
let triangulo = "";

for (let i = 1; i <= altura; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "* ";
    }
    triangulo += linea + "\n";
}

alert(triangulo);
