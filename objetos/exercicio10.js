// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }


//José 
jose.carrinho.item=(tv)
jose.carrinho.quantidade=1
jose.carrinho.item2=(caboUsb)
jose.carrinho.quantidade2=2
jose.carrinho.item3=(webcam)
jose.carrinho.quantidade3=1
console.log(jose)

// carlos

carlos.carrinho.item=(notebook)
carlos.carrinho.quantidade=2
console.log(carlos)

//patricia 
carrinho.item=(teclado)
patricia.carrinho.quantidade=1
patricia.carrinho.item2=(caboUsb)
patricia.carrinho.quantidade2=2
patricia.carrinho.item3=(carregador)
patricia.carrinho.quantidade3=1
patricia.carrinho.item4=(mouse)
patricia.carrinho.quantidade4=1
patricia.carrinho.item5=(monitor)
patricia.carrinho.quantidade=1
console.log(patricia)

//Renato
renato.carrinho.item=(webcam)
renato.carrinho.quantidade=5
console.log(renato)

//Roberto
roberto.carrinho.item=(webcam)
roberto.carrinho.quantidade=1
roberto.carrinho.item2=(caboUsb)
roberto.carrinho.quantidade2=2
roberto.carrinho.item3=(monitor)
roberto.carrinho.quantidade3=1
console.log(roberto)