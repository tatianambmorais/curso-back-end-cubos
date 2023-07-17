/*Crie uma função que receba um nome e gere um nickname seguindo o padrão a seguir.

O nickname deve conter, no máximo, 13 caracteres;
Deve começar sempre com "@";
Não deve existir espaços em branco;
São permitidos apenas caracteres minúsculos.*/

const nome = 'Guido Cerqueira';
nomeNovo=nome.split(" ")

function geraNickname(){
const nickname1=nomeNovo[0].toLowerCase()
const nickname2=nomeNovo [1].toLowerCase()
const nickname=nickname1+nickname2
const nicknameFinal=nickname.slice(0,13)

	console.log(`@${nicknameFinal}`)
}
geraNickname();