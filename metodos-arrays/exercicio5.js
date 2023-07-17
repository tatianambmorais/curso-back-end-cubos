const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
nomeDoPaciente="TJosé"
function agendarPaciente (){
pacientes.push(nomeDoPaciente)
console.log (pacientes)
}
agendarPaciente()

function atenderPaciente (){
pacientes.shift()
console.log (pacientes)
}
atenderPaciente()

function cancelarAgendamento(){
	let indice=pacientes.indexOf(nomeDoPaciente);
	pacientes.splice(indice, 1)
	console.log(pacientes)
}
cancelarAgendamento()