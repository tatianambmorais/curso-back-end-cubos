let numeros = [1, 2, 4, 6, 8, 10]

let maior = numeros [0]
let menor = numeros [0]
for (let i=0; i<numeros.length; i++)
if (numeros[i]>maior) {
	maior=numeros[i]
	console.log(maior)
}

for (let i=0; i<numeros.length; i++)
if (numeros[i]<menor) {
	menor=numeros[i]
	console.log(menor)
}
	


