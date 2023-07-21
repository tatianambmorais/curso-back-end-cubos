const celular = "7199918888"

 
 const formatarCelular= (numero) =>  {
	let celularFormatado;
	if (numero.length==8){
		celularFormatado=`9 ${numero.slice(0,4)}-${numero.slice(4)}`;
	} else if (numero.length==9) {
		celularFormatado=` ${numero.slice(0,1)} ${numero.slice(2,5)}-${numero.slice(5)}`
	
 	} else if (numero.length==10){
		celularFormatado=` ${numero.slice(0,2)} 9${numero.slice(2,6)}-${numero.slice(6)}`

	} else if (numero.length ==11){
		celularFormatado=` ${numero.slice(0,2)} ${numero.slice(2,3)} ${numero.slice(3,7)}-${numero.slice(7)}`
}
	console.log (celularFormatado)}
 	
 formatarCelular(celular);