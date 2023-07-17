const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

// criar uma nova array de quantidade de elementos de tamanhoDoGrupo, restante dos elementos em outra array
let i=0;
let grupo1="";
let grupo2="";
function criaGrupos(){
if (nomes[i]>tamanhoDoGrupo-1){
	grupo1=nomes.slice(0, tamanhoDoGrupo)
	grupo2=nomes.slice(tamanhoDoGrupo, tamanhoDoGrupo*2)
	console.log(grupo1, grupo2)
}}
criaGrupos();
