class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) return;
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) return;
        this.ligado = false;
    }
}

// extends cria herança de classes, no caso smartphone herda dispositivoeletronico
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi
    }

    ligar(){
        console.log('metodo ligar alterado');
    }

    falaOi(){
        console.log('Oi');
    }
}

const s1 = new Smartphone('teste', 'branco', 'S10');
console.log(s1);

const t1 = new Tablet('testeT', true)
console.log(t1);
console.log(t1.ligado);
t1.ligar();
t1.falaOi();
