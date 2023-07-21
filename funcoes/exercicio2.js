const carro = {
    ligado: false,
    velocidade: 0,
    devolveStatusTexto: function () {
        return this.ligado ? 'ligado' : 'desligado';
    },
    imprimeStatusEVelocidade: function () {
        console.log(`Carro ${this.devolveStatusTexto()}. Velocidade: ${this.velocidade}.`);
    },
    ligar: function () {
        if (this.ligado) {
            console.log('Este carro já está ligado.');
        } else {
            this.ligado = true;
            this.imprimeStatusEVelocidade();
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log('Este carro já está desligado.');
        } else {
            if (this.velocidade > 0) {
                console.log('Não é possível desligar um carro em movimento.');
            } else {
                this.ligado = false;
                this.velocidade = 0;
                this.imprimeStatusEVelocidade();
            }
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log ("Não é possível acelerar um carro desligado")
        }

        this.velocidade += 10;
        this.imprimeStatusEVelocidade();
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log('Não é possível desacelerar um carro desligado.');
        } else {
            this.velocidade -= 10;
            if (this.velocidade === 0) {
                this.ligado = false;
            }
            this.imprimeStatusEVelocidade();
        }
    },
}
	

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
