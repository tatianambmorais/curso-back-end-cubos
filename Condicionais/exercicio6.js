const alturaEmCm = 187;
const alturaMinima= 180;

if (alturaEmCm <alturaMinima ) {
	console.log ("Reprovado");
} else if (alturaEmCm>=180 && alturaEmCm<=185) {
	console.log ("Líbero");
} else if (alturaEmCm>=186 && alturaEmCm<=195) {
console.log ("Ponteiro");
} else if (alturaEmCm>=196 && alturaEmCm<=205) {
	console.log ("Oposto");
} else {
	console.log ("Central");
}
