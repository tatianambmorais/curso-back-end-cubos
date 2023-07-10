const jogada1 = "papel";
const jogada2 = "tesoura";

if (jogada1 === jogada2) {
  console.log("Empate");
} else 
if (jogada1 === "pedra")  {
	if (jogada2==="tesoura") {
		console.log ("Pedra ganhou");
	} else {
		console.log ("Papel ganhou")
	}

} else if (jogada1==="tesoura") {
	if (jogada2==="pedra"){
		console.log("Pedra ganhou")
	if (jogada2==="papel"){
		console.log("Tesoura ganhou")
	}
	}
  
} else { 
	if (jogada2==="tesoura"){
		console.log("Tesoura venceu")
	} else {
		console.log ("Papel venceu")
	}

}
