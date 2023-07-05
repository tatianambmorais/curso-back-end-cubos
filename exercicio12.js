
/*let M=90000
let n=24
let C=60000
let i=((Math.pow(M, 1/n))/C)-1
let j=((M**(1/n))/C)-1
console.log (`A taxa de juros foi de ${i} `)
console.log (`A taxa de juros foi de ${j} `)*/

const montante = 90000;
const capital = 60000;
const tempo = 24;

const taxaJuros = (montante / capital)**(1/tempo) - 1
console.log (`O seu financiamento de ${capital} reais teve uma taxa de juros de ${(taxaJuros*100).toFixed(3)}%, pois após ${tempo} meses você teve que pagar ${montante} reais`)