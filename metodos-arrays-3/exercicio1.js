// ordem crescente
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
numeros.sort((a,b) => {
	return a-b;})
console.log (numeros)

// ordem decrescente
numeros.sort((a,b) => {
	return b-a;})
console.log (numeros)

// crescente em Unicode
numeros.sort();
console.log(numeros)

// alfabética 
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutas.sort((a,b) => {
	return a.localeCompare(b);

})
console.log (frutas)

// alfabética decrescente
frutas.sort((a,b) => {
	return b.localeCompare(a);

})
// ordem crescente de quantidade de caracteres

console.log (frutas)
frutas.sort((a,b) => {
	return a.length-b.length;

})
console.log (frutas)

