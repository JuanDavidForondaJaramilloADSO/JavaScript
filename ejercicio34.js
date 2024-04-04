
let radio = parseInt(prompt("Ingresa el readio del desposito"))
let altura = parseInt(prompt("Ingresa la altura del deposito en metros"))
let caudal =parseInt(prompt("Ingrese el caudal(en litros por segundo)"))

const PI = Math.PI
let volumen = PI * Math.pow(radio, 2) * altura;

volumen *= 1000
let tiempo = volumen/caudal
tiempo /= 60


alert("el tiempo estimado para el llenado del deposito es de aproximadamente " + tiempo.toFixed(2)  + " minutos.") 