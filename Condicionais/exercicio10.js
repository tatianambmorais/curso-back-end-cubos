let signo=8
let vogaisMaiusculas = ["A", "E", "I", "O", "U"]
let vogaisMinusculas=["a", "e", "i", "o", "u"]
let numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

if (vogaisMaiusculas.includes(signo)) {
	console.log ("Vogal maiúscula");
} else if (vogaisMinusculas.includes(signo)) {
	console.log ("Vogal minúscula");
} else if (numero.includes(Number(signo))) {
	console.log ("Número");
} else {
	console.log ("Consoante")
}