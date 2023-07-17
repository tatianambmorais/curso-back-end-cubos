function filtraCPF(){
const cpf = "011.022.033-44";
const cpfFiltrado=cpf.replaceAll(".","")
const cpfFiltradoFinal=cpfFiltrado.replaceAll("-","")
console.log (cpfFiltradoFinal)
}
filtraCPF();