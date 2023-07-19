nomes=["Maria", "José", "João", "Pilar", "Onofre", "Guido", "Adalberto"]
nomesComA=[];
for (nome of nomes){
const inicial = nome[0];
 if (inicial==="a" || inicial ==="A"){
	nomesComA.push(nome)
 }
}console.log(nomesComA)
