function imprimirResumoDoCarrinho(carrinho){
console.log (carrinho.nomeDoCliente);
console.log("Total de itens:"+ totalDeItens)
}
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
    ]
}
let totalDeItens=0
for (let i=0, i>carrinho.produtos.length; i++){
totalDeItens=carrinho.produtos[i].qtd++}
imprimirResumoDoCarrinho(carrinho)