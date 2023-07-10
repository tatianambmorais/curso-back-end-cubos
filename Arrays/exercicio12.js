const filaDeDentro=["Jose", "Maria", "Joao"];
// max.length=5 items
const filaDeFora=["Joana", "Roberta", "Marcos", "Felipe"];
// quando filaDeDentro.lenght<0, adicionar filaDeFora[0] para filaDeDento

while (filaDeDentro.length<5)
	if (filaDeDentro.length<5){
	filaDeDentro.push(filaDeFora[0]);
	filaDeFora.shift(); 
	
   }
console.log(filaDeDentro);
	console.log(filaDeFora);	
