const carro={
	ligado: false,
	velocidade: 0,
	verificaCarroLigado: function (){ligado? console.log("Este carro está ligado") : true;},
	aceleraCarro: function (){	ligado? velocidade+=10 : console.log ("Não é possível acelerar um carro desligado")},
	desaceleraCarro: function (){ligado? velocidade-=10 : console.log ("Não é possível desacelerar um carro desligado")},
	 mostraStatus: function (){console.log (`Carro ${verificaCarroLigado}. Velocidade ${velocidade}`)},

	}

	verificaCarroLigado(false)



/*}

function aceleraCarro(){
	ligado? velocidade+=10 : console.log ("Não é possível acelerar um carro desligado")
}

function desaceleraCarro(){
	ligado? velocidade-=10 : console.log ("Não é possível desacelerar um carro desligado")
}

function mostraStatus(){
	if {}
	console.log (`Carro ${verificaCarroLigado}. Velocidade ${velocidade}`)
}

//monitoria*/
