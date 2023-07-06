//Menores de 12 anos
//Maiores de 65 anos
//Que possuam qualquer patologia cardíaca
//Menores de 150cm de altura

let idadeMinima=19
let idadeMaxima=65
let patologia=false
let alturaMinima=150
let estudante=false


if (idadeMinima<12 || idadeMaxima>65 || patologia || alturaMinima<150){
	console.log("ACESSO NEGADO");
} else if (estudante || idadeMinima<18){
	console.log("10 reais");
} else {
	console.log("20 reais")
}