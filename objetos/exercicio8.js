const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

/*a. Se a pessoa não tiver pets, a mensagem deve ser: Sou João e não tenho pets.

b. Se a pessoa tiver mais de um pet, a mensagem deve ser: Sou Ana e tenho 2 pets.

c. Se a pessoa tiver um pet, a mensagem deve ser: Sou Beatriz e tenho 1 pet.*/

const [nome, pets]= usuarios;
for (let i=0; i<usuarios.length; i++){
if (usuarios[i].pet==undefined || usuarios[i].pet==null){
console.log (`Olá, sou ${usuarios[i].nome} e não tenho pets`)
} else {
console.log (`Olá, sou ${usuarios[i].nome} e tenho ${usuarios[i].pets} pets`)}
}

	
