const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

let pet="Max";
function encontraPet (){
 for (let i=0; i<usuarios.length; i++){
	if (pet==usuarios[i].pets){
		return (`O dono do ${pet} é o ${usuarios[i].nome}`)
	} else {
		return(`Que pena ${pet}, não conseguimos encontrar seu dono.`)
	}
	}
}
console.log (encontraPet())