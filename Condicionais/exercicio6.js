const alturaEmCm = 199;
const alturaMinima= 180;

if (alturaEmCm <alturaMinima ) {
	console.log ("Reprovado");
} else if (alturaEmCm<=185) {
	console.log ("Líbero");
} else if (alturaEmCm<=195) {
console.log ("Ponteiro");
} else if (alturaEmCm<=205) {
	console.log ("Oposto");
} else {
	console.log ("Central");
}
