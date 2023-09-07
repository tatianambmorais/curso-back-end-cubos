let carro= {nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020}
let percentual_desconto=5;
for (let propriedade in carro){
if (propriedade=="preco"){
	let preco=propriedade;
	let desconto=(carro[preco]*percentual_desconto)/100;
	let novo_preco=carro[preco]-desconto;
	console.log("novo preço:", novo_preco)
}
else {
	console.log(propriedade+":"+carro[propriedade])
}}