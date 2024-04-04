let saldo = parseFloat(prompt("Ingrese el saldo de su cuenta bancaria:"));
let interes;

if (saldo < 100000) {
    interes = saldo * 0.03;
} else {
    interes = saldo * 0.04;
}

let saldoFinal = saldo + interes;
alert("Saldo final: $" + saldoFinal.toFixed(2) + "\nInterés pagado: $" + interes.toFixed(2));
