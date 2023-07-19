const pessoas = [
	{
	  nome: "Antonio",
	  idade: 30,
	  profissao: "Jornalista",
	},
	{
	  nome: "Maria",
	  idade: 30,
	  profissao: "Jornalista",
	},
	{
	  nome: "Ana",
	  idade: 21,
	  profissao: "Programador",
	},
	{
	  nome: "Beatriz",
	  idade: 20,
	  profissao: "Programador",
	},
	{
	  nome: "José",
	  idade: 32,
	  profissao: "Jornalista",
	},
	{
	  nome: "Marcos",
	  idade: 30,
	  profissao: "Programador",
	},
  ];

  const programadorMaiorQue20 = pessoas.filter((profissional) => {
	return (profissional.profissao=="Programador"  && profissional.idade>20)
  }) 
  console.log (programadorMaiorQue20)


  const jornalistaMaiorQue30 = pessoas.filter((profissional) => {
	return (profissional.profissao=="Jornalista"  && profissional.idade>30)
  }) 
  console.log (jornalistaMaiorQue30)


const jovens = pessoas.filter((profissional) => {
	return (profissional.idade<30)
  }) 
  console.log (jovens)


  
  
  
 