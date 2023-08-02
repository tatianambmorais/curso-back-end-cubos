function solucao(min, km){
    let valorCorridaKm=Math.floor(70*10);
    let valorCorridaMin=Math.floor(20*50);
    let valorCorridaMais10Km=Math.floor(10*70+50*(km-10));
    let valorCorridaMais20Min=Math.floor(20*50+30*(min-20));
    if (min>20){
		console.log(valorCorridaKm+valorCorridaMais20Min)
	} else if (min<20) {
			console.log(valorCorridaKm+valorCorridaMin)
	} else {
	if (km>10){
		console.log (valorCorridaMais10Km+valorCorridaMin)
	} else {
		console.log (valorCorridaKm+valorCorridaMin)
	}}

	if (km>10 && min>20){
	console.log (valorCorridaMais10Km+valorCorridaMais20Min)}

}
