const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
/*a) Organize o array na ordem inversa e transforme em uma única string 
separada por vírgulas de forma q seja impresso:*/
function inverteLista(){
frutas.reverse()
frutas.join(",")
console.log(frutas)
}
inverteLista()

/*b) Remova o primeiro e último item do array original 
e adicione a fruta Melão ao novo array da seguinte forma:*/
function alteraLista(){
frutas.splice(0, 1);
frutas.splice(-1, 1);
frutas.splice(frutas.length, 0, "Melão")
console.log (frutas)}
alteraLista()