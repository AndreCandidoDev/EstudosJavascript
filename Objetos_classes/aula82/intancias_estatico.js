teste = () => console.log('teste');

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste(); //executa a função ao intanciar novo objeto
    }

    //metodo de instancia
    aumentarVolume(){
        this.volume += 2;
    }

    //metodo de instancia
    diminuirVolume(){
        this.volume -= 2;
    }

    // metodo estatico --- metodo que nao é possivel acessar pela instancia
    // nao possuem acesso aos dados da intancia
    static trocaPilha(){
        console.log('trocar');
    }

    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('teste');
controle1.aumentarVolume();
console.log(controle1);
controle1.diminuirVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(2,2));