const CPF="057879"
const primeiraParte=CPF.slice(0,3)
const segundaParte=CPF.slice(3,6)
const terceiraParte=CPF.slice(6,9)
const quartaParte=CPF.slice(9,11)

//Validar o tamanho (11 números)
//Imprimir o CPF formatado se for válido
function imprimeCPF(){
	if (CPF.length===11){
		console.log(`CPF: ${primeiraParte}.${segundaParte}.${terceiraParte}-${quartaParte}`)
	} else {
		console.log ("CPF inválido")
	}
}
imprimeCPF()