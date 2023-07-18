const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const palavrasInvalidas = palavras.some((palavra) => {
return palavra.length>5
})
if (palavrasInvalidas){
	console.log("existe palavra inválida")
} else {
	console.log("não existe palavra inválida")
}