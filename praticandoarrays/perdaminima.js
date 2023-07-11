
function solucao(precos) {
	// seu codigo aqui
  }
  
  function processData(input) {
	  const precos = input.split(" ").map(x => parseInt(x));
		solucao(precos);
  }
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  _input = "";
  process.stdin.on("data", function (input) {
	  _input += input;
  });
  
  process.stdin.on("end", function () {
	 processData(_input);
  });