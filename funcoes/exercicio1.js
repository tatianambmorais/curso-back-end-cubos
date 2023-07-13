const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}
let somaDasQuestoesCorretas=0;
for (i=0; i<prova.questoes.length; i++){
	if (prova.questoes[i].resposta==prova.questoes[i].correta){
		somaDasQuestoesCorretas++
		}
}	let nota=somaDasQuestoesCorretas*2
function corrigirProva(prova){
	console.log(`O aluno ${prova.aluno} acertou ${somaDasQuestoesCorretas} e tirou nota ${nota}`)
}
corrigirProva(prova)