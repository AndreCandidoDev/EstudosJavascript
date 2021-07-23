//construtora sempre inicia com letra maiuscula

function Pessoa(nome, sobrenome){
    
    //atributos privados (nao sao acessados fora do objeto)
    const ID = 123456;
    const metodoInterno = function(){
        console.log('metodo interno');
    };


    //atributos publicos (podem ser acessados fora do objeto)
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome} metodo 1`);
    };

    this.metodo2 = function(){
        console.log(`${this.nome} metodo 2`);
    };
}

const p1 = new Pessoa('teste', 'algo');
const p2 = new Pessoa('teste2', 'algo2');

console.log(p1.nome);
p1.metodo();
p2.metodo2();