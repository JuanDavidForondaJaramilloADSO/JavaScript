
function edadHijo() {
    let añosHijo = parseFloat(prompt("Ingrese la edad del hijo"))
    let añosMama = parseFloat(prompt("Ingrese la edad de la madre"))

    let edadMama =  añosMama - añosHijo

    if( edadMama >= 14 && edadMama <= 45 ) {
        alert(`La edad de la madre en el momento del parto es: ${edadMama}`)
    } else{
        alert("no tiene sentido XD")
    }     
}; edadHijo()

