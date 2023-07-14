const comentario="Este comentário fala sobre coisas belas"
function verificaComentario(){
	if (comentario.includes("covid" || "COVID" || "pandemia" | "PANDEMIA")) {
		console.log("Comentário bloqueado por conter palavras proibidas");
 	} else {
		console.log (comentario)}

}
verificaComentario(comentario)