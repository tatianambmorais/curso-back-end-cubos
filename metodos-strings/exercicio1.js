const comentario="Este comentário fala sobre coisas belas"
const achouCovid=comentario.toLowerCase().includes("covid")
const achouPandemia=comentario.toLowerCase().includes("pandemia")
function verificaComentario(){
	if (achouCovid || achouPandemia) {
		console.log("Comentário bloqueado por conter palavras proibidas");
 	} else {
		console.log (comentario)}

}
verificaComentario(comentario)