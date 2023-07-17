const celular = String(7199918888)
const DDD=celular.slice(0,2)


const restoNumeroParte1=celular.slice(2,6)
const restoNumeroParte2=celular.slice(6)

function imprimeNumero(){
	console.log(`(${DDD}) 9${restoNumeroParte1}-${restoNumeroParte2}`)
}
imprimeNumero()
