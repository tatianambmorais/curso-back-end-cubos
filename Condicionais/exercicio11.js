const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

/* 
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada,
pois já quitou a dívida.
*/
const totalJaPagoPeloAluno = 1000000;
const parcelaMensalEmReais=(0.18*(rendaMensalEmCentavos/100))

if (rendaMensalEmCentavos<200000) {
console.log ("O valor da parcela desse mês é R$ 0 reais, pois o estudante tem renda inferior ao mínimo para pagamento");
} else if (rendaMensalEmCentavos>=200000 && mesesDecorridos<60){
console.log (`O valor da parcela este mês será R$${parcelaMensalEmReais}`);
} else if (mesesDecorridos>60 && totalJaPagoPeloAluno<1800000){
console.log ("O valor da parcela desse mês é R$ 0 reais, pois o prazo para pagamento já expirou");
} else if (totalJaPagoPeloAluno>=1800000){
	console.log ("O valor da parcela desse mês é R$ 0 reais, pois o financiamento já foi quitado");

}


