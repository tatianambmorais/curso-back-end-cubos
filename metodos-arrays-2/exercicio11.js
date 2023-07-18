const nomes = [
	"Maria",
	"João",
	"José",
	"Antonio",
	"Beatriz",
	"Camila",
	"amanda",
  ];
  const comecaLetraA=nomes.filter((nome) => {
	return (nome.charAt(0)=="a") || (nome.charAt(0)=="A")
  })
  console.log(comecaLetraA)