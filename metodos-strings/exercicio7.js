/*Faça um sistema que verifique se um e-mail é válido
Dicas:
Sempre tem que ter @
Sempre tem que ter pelo menos um .
Nunca pode começar com .
Nunca pode terminar com .*/

const email="emailemail.com";
function verificaEmail(){
	let inicio=email.slice(0,1);
	let fim=email.slice(-1)
	if (inicio=="."){
		console.log("Email inválido")
	} 	
	else if (fim=="."){
	
		console.log("Email inválido")
	} else if (!(email.includes("@") && email.includes ("."))) {
		console.log("Email inválido")
	}
	else {
		console.log ("Email válido!")
	}
}
verificaEmail()