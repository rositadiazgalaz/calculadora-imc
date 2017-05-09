// se define la funcion
function calculaIMC(){
	// se declaran las variables 
	var peso, altura, imc, leyenda;
	//se hacen las llamadas a los datos introducidos "valores"
	peso=document.getElementById("peso").value;
	altura=document.getElementById("altura").value/100;
	//calculo del imc
	imc=peso/(altura*altura);
	// se envia el resultado a la caja que corresponda y se 
	// a 2 decimales con toFixed
	document.getElementById("imc").value=imc.toFixed(2);
	// con if se compara el resultado para ver si esta dentro de 
	//los rangos de salud
	if(imc <=20.5){
		leyenda="Estas bajos el promedio de un peso saludable,"+
		"<br>"+
		" se recomienda subir "+(peso-altura*altura*25.5).toFixed(1)
		+" kilos";
	}else if(imc >=25.5){
		// determina el exceso de peso 
		leyenda="Tienes sobrepeso. Se recomienda bajar "+(peso-altura*altura*25.5).toFixed(1)+" kilos";

	}else{
		leyenda="Estas en tu peso ideal";
	}
	//se envia el comentario a caja correspondiente
	document.getElementById("leyenda").value=leyenda;
}