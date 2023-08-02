function processData(input) {
	for (let i=0; i<input.length; i++){
		if (input == input.charAt([i]).toUpperCase){
			console.log (input.toLowerCase)
		}
	}
	if (input === input.charAt(0).toLowerCase() + input.slice(1).toUpperCase()) {
	  		console.log (input.split('').map((letra) => (letra === letra.toLowerCase() ? letra.toUpperCase() : letra.toLowerCase())).join(''));

	} else if (input === input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()) {
		console.log (input)}

	else if (input===input.toLowerCase()){
		console.log(input)
	}
	else if (input===input.toUpperCase()){
		console.log(input.toLowerCase())
	}

  }

  
  // Exemplo de uso:

