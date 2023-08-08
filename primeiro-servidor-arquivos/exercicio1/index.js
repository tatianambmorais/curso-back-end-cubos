const express = require('express');
const app = express();
const port = 3000;

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indiceAtual = 0;

app.get('/', (req, res) => {
    const jogadorAtual = jogadores[indiceAtual];
    const mensagem = `É a vez de ${jogadorAtual} jogar!`;
    
    indiceAtual = (indiceAtual + 1) % jogadores.length;
    
    res.send(mensagem);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
