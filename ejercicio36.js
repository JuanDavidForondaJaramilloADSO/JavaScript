// Definimos las variables
const cacaoOriginal = 10; // gramos de cacao por cada 100 gramos de harina en la receta original
const cacaoDeseado = 20; // gramos de cacao que deseamos agregar

// Calculamos la cantidad de harina necesaria
const harinaNecesaria = (cacaoDeseado * 100) / cacaoOriginal;

// Mostramos la cantidad de harina necesaria en una alerta
alert("La cantidad de harina necesaria para hacer el bizcocho con " + cacaoDeseado + " gramos de cacao es: " + harinaNecesaria + " gramos.");
