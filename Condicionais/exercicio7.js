// Pessoas portadores de alguma doença grave
//Pessoas que já estão aposentadas
// renda anual < R$ 28.559,70

const aposentada=false;
const pessoaComDeficiência=false;
const totalDeRendimentos=30000

if (aposentada || pessoaComDeficiência) {
	console.log("Isenta");
} else if (totalDeRendimentos<28559.70){
	console.log("VAZA LEÃO! JÁ TÁ DIFÍCIL SEM VOCÊ!");
} else if (totalDeRendimentos>28559.70) {
	console.log ("PEGA LEÃO!");
}