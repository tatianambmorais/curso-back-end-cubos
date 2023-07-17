/*Crie uma função que receba o nome do arquivo com sua extensão e 
faça a validação dos arquivos permitidos conforme a lista abaixo.

São permitidos arquivos: jpg, jpeg, gif e png;*/

function verificaArquivo(arquivo){
	const extensao = arquivo.slice(arquivo.lastIndexOf('.') + 1)
	if (!(extensao=="jpg") || (extensao=="jpeg") || (extensao=="gif" || extensao=="pgn")){
		console.log ("Arquivo inválido")
	} else {
		console.log ("Arquivo válido")
	}
}
verificaArquivo("casa.jpg")