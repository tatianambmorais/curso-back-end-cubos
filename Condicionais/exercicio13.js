/* credito=5%
cheque=3%
debito ou dinheiro=10% */ 

const tipoDePagamento = "credito";
const valorDoProduto = 13000;

let desconto;
let valorFinal;

if (tipoDePagamento === "credito") {
  desconto = 0.05;
} else if (tipoDePagamento === "cheque") {
  desconto = 0.03;
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  desconto = 0.1;
} else {
  console.log("Forma de pagamento inválida. Por favor, escolha uma forma de pagamento válida.");
}

valorFinal = valorDoProduto - (valorDoProduto * desconto);
valorFinal = valorFinal.toFixed(2); // Limitando para duas casas decimais
console.log("Valor final do produto após o desconto: R$" + valorFinal);
