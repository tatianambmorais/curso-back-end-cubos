const letras = ['A', 'b', 'E', 'e', 'F', 'g', 'h', 'E'];

let contador = 0;

for (letra of letras) {
  if (letra === 'E' || letra === 'e') {
    contador++;
  }
}

if (contador === 0) {
  console.log("Nenhuma letra 'E' ou 'e' encontrada no array.");
} else {
  console.log(`Encontrada(s) ${contador} letra(s) 'E' ou 'e' no array.`);
}
