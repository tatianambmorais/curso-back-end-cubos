const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];

function separarGrupos(lista,tamanho){
    let numeroGrupo = 1;

    for (let i = 0; i < lista.length; i += tamanho) {
        const grupo = `n ${numeroGrupo}: ${lista.slice(i, (i + tamanho)).join(', ')}`;
        console.log(grupo);
        numeroGrupo++
    }
}

separarGrupos(nomes, 4);