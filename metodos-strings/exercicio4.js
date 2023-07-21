let identificador = "123";
let nome = "José silva costa";
let arrayDeNome=nome.split(" ");
let email = "      jose@email.com  ";

//O padrão do identificador são seis dígitos e caso o número não possua essa quantidade, 
//complete com zero a esquerda; padStart
//O nome e sobrenome precisam sempre começar com letra maiúscula; - toUpperCase
//O e-mail não pode ter espaços em branco; trim
//Para testar, use o console.log() para imprimir cada 

function verificaIdentificador (){
	if (identificador.length<6){
		identificadorRefatorado=identificador.padStart(6,"0")
	}console.log(identificadorRefatorado)
} 
verificaIdentificador()


let nomeFormatado = "";
function formataNome(){
for (let item of arrayDeNome){
	let primeiraLetra=item.slice(0,1);
	let restanteDoNome=item.slice(1)

	nomeFormatado+=primeiraLetra.toUpperCase() + restanteDoNome + " ";
}console.log (nomeFormatado)}
formataNome()


const emailFormatado=email.trim()
console.log(emailFormatado)



