class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método de estatico
    static soma(x, y) {
        return console.log(x + y);
    }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma(2, 4);