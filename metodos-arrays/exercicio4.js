const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let operacao="atender";
let nomeDoPaciente="Tatiana";


function clinicaMedica (){
	if (operacao=="atender"){
		pacientes.shift()
	}
	if (operacao==="agendar"){
		pacientes.push(nomeDoPaciente)
	}
	console.log (pacientes)
}
clinicaMedica()