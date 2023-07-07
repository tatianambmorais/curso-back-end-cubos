const valorDoProduto=1000;
const quantidadeDoParcelamento=10;
const valorPago=300;
//const valorDaParcela=(valordoProduto/quantidadeDoParcelamento)
// VALOR RESTANTE
const valorRestante=valorDoProduto-valorPago

const valorDaParcela=valorDoProduto/quantidadeDoParcelamento
const parcelasPagas=valorPago/valorDaParcela
console.log (parcelasPagas)
const parcelasrestante=quantidadeDoParcelamento-parcelasPagas
console.log(`O valor restante a ser pago é de R$${valorRestante} em ${parcelasrestante} parcelas restantes, cada parcela custando R$${valorDaParcela} `)