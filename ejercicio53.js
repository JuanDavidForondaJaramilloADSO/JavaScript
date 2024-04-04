// Solicitamos al usuario que ingrese el precio de cada producto
let producto1 = parseFloat(prompt("Ingrese el precio del primer producto:"));
let producto2 = parseFloat(prompt("Ingrese el precio del segundo producto:"));
let producto3 = parseFloat(prompt("Ingrese el precio del tercer producto:"));
let producto4 = parseFloat(prompt("Ingrese el precio del cuarto producto:"));
let producto5 = parseFloat(prompt("Ingrese el precio del quinto producto:"));

// Calculamos el subtotal y el IVA
let subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
let iva = subtotal * 0.19;

// Calculamos el total de la compra
let totalCompra = subtotal + iva;

// Mostramos los resultados al usuario
alert("Subtotal: $" + subtotal.toFixed(2) + "\n" +
      "IVA: $" + iva.toFixed(2) + "\n" +
      "Total de la compra: $" + totalCompra.toFixed(2));
