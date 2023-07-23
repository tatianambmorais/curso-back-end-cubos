


const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
 imprimirResumo: function () {
	let precoTotalItensTexto = `${this.calcularTotalAPagar() / 100}`;

console.log (`Cliente: ${carrinho.nomeDoCliente}`);
console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
console.log(`Total a pagar: R$${precoTotalItensTexto}`)
},
addProdutoAoCarrinho: function (produto){
let indiceProdutoExistente=-1;
for (let i=0; i<this.produtos.length; i++){
	if (this.produtos[i].id === produto.id){
		indiceProdutoExistente=i;
		break;
	}
}
if (indiceProdutoExistente===-1){
	this.produtos[this.produtos.length]=produto;
} else {
	this.produtos[indiceProdutoExistente].qtd += produto.qtd
}
},
imprimirDetalhes: function (){
	console.log(`Nome do cliente: ${carrinho.nomeDoCliente}`);
	console.log(" ");
	let qtdTotalDeItens=this.calcularTotalDeItens();
	let precoTotalDeItens=this.calcularTotalAPagar();

	for (let i=0; i<this.produtos.length; i++){
	let produto=this.produtos[i];
	console.log(`Item: ${i+1} - ${produto.nome} - ${produto.qtd} und - R$${produto.precoUnit/100}`)}
	let precoTotalDeItensTexto=`${precoTotalDeItens/100}`;
	console.log (" ");
	console.log(`Total de itens: ${qtdTotalDeItens} itens`);
	console.log(`Total a pagar: R$${precoTotalDeItensTexto}`);
},
calcularTotalDeItens: function (){
let qtdTotalDeItens=0;
for (const produto of this.produtos){
	qtdTotalDeItens+=produto.qtd;}
	return qtdTotalDeItens
}
,
calcularTotalAPagar: function(){
let precoTotalDeItens=0;
for (const produto of this.produtos){
	precoTotalDeItens+=produto.qtd*produto.precoUnit;
}
return precoTotalDeItens;
},	calcularDesconto: function (){
	let qtdTotalItens=this.calcularTotalDeItens();
	let precoTotalItens=this.calcularTotalAPagar();
	let descontoPorItens=0;
	let descontoPorTotal=0;
	
	if (qtdTotalItens>4){
		descontoPorItens=this.produtos[0].precoUnit;
		for (let i=1; i>this.produtos.length; i++){
			if (this.produtos[i].precoUnit<descontoPorItens){
				descontoPorItens=this.produtos[i].precoUnit
			}
		}
	}
	if (precoTotalItens>10000){
		descontoPorTotal=precoTotalItens*0.1;
		
	}
	return descontoPorItens>descontoPorTotal? descontoPorItens:descontoPorTotal
}
}
console.log (carrinho.calcularDesconto()/100);

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProdutoAoCarrinho(novaBermuda)
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProdutoAoCarrinho(novoTenis)
console.log (carrinho.calcularDesconto()/100);
carrinho.imprimirResumo()
carrinho.imprimirDetalhes()
