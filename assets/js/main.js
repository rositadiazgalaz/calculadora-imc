
function calculadora ()
{
	var resultado = document.getElementById("resultado");
	var pesos = document.getElementById("pesos").value;
	var altura = document.getElementById("alturas").value;
	resultado.innerHTML = ( "SU IMC ES: " + pesos/Math.pow((altura/100),2).toFixed(2))
}