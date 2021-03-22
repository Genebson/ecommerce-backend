//EJERCICIO 1

let numero1 = 5;
let numero2 = 8;

if (numero1 <= numero2) {
	console.log("numero1 no es mayor que numero2");
}

if (numero2 >= 0) {
	console.log("numero2 es positivo");
}

if (numero1 < 0 || numero1 != 0) {
	console.log("numero1 es negativo o distinto de cero");

}

if (++numero1 < numero2) {
	console.log(
		"Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
}

//EJERCICIO 2

let valores = [true, 5, false, "hola", "adios", 2];

function masCaracteres() {
	let textoMayor = valores[3] > valores[4]
	alert(masCaracteres);
}



function posicionFalse() {
	let valorFalse = valores[2]
	console.log(posicionFalse)
}

//EJERCICIO 3


const mostrarMeses = () => {
	const meses = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"];
}

console.log("Este es el mes ", mostrarMeses.meses[0])