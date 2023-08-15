const express=require('express');
const rotas=require('./src/roteador');
const { somar, subtrair, multiplicar, dividir } = require('./src/controladores/calculadora');
const app=express();

app.use(rotas)
app.get('/somar', somar)
app.get('/subtrair', subtrair)
app.get('/multiplicar', multiplicar)
app.get('/dividir', dividir)



app.listen(3000,() => {
    console.log(`Servidor rodando em http://localhost:3000`)
})
