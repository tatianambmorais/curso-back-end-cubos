const endereços = [
	{ cep: 1111222, rua: "Rua dos Artistas" },
	{ cep: 11111333, rua: "Rua Augusta" },
	{ cep: 22222444, rua: "Avenida Paralela" },
	{ cep: 11222333, rua: "Rua Carlos Gomes" },
  ]

  const encontraCEP = endereços.find((endereço) => {
return endereço.cep==22222444
  })
  console.log (encontraCEP);