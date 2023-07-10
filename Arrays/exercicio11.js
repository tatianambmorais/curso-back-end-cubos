const original = [5, 7, 13, 17, 26, 34, 118, 245];
const filtrada=[]

// Depois crie um novo array que contenha apenas os números do array original que estejam entre 10 e 20, incluindo esses números, ou que sejam maiores que 100. 

for (item of original)
	if ((item>=10 & item<=20) || (item>100)){
	filtrada.push(item);
	}
console.log (filtrada)