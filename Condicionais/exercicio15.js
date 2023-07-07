const primeiroNome = "Mario";
const sobrenome = "Rodrigues";
const apelido = "maroca";

if (apelido) {
  console.log(apelido);
} else if (sobrenome) {
  console.log(primeiroNome + " " + sobrenome);
} else {
  console.log(primeiroNome);
}
