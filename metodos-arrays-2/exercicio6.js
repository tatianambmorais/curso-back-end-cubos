const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const ate8Caracteres=cidades.filter((cidade) => {
return cidade.length<9
})
console.log (ate8Caracteres)