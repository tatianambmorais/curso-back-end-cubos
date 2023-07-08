nomes=["Maria", "José", "João", "Pilar", "Onofre", "Guido"]
nomesComA=[];
for (item of nomes){
if (item.includes("a") || item.includes("A") || item.includes("ã")){
nomesComA.push(item)
}
} console.log(nomesComA)