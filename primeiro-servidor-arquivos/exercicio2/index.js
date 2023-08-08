const express=require('express')
const app=express()
let segundos=0;
let minutos=0;
const timer = () => {
    segundos++
    if (segundos==60){
        segundos=0;
        minutos++
    }
    console.log(`Minutos: ${minutos} e segundos: ${segundos}`)
}
let cronometro;
app.get('/iniciar', (req, res)=> {
cronometro=setInterval(timer, 1000)
res.send(`Cronômetro iniciado!`)
})

app.get('/', (req, res) => {
    res.send(`O tempo atual do cronômetro é de ${minutos} e ${segundos}`)
})

app.get('/continuar', (req, res) => {
    setInterval(timer, 1000)
    res.send(`Cronômetro continuando!`)
})

app.get('/pausar', (req, res) => {
    clearInterval(cronometro)
    res.send(`Cronômetro pausado`)
})
app.get('/zerar', (req, res) => {
    minutos=0;
    segundos=0;
    res.send(`Cronômetro zerado!`)
})

app.listen(3000,() => {
    console.log(`Servidor rodando em http://localhost:3000`)
})

