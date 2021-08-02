class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // em classes os metodos são diretamente incluidos no prototype
    falar(){
        console.log(`${this.nome} está falando.`);
    }

    comer(){
        console.log(`${this.nome} está comendo.`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('teste', 'teste');
console.log(p1);

// #############################################################################################
// funcionamento identico a de uma função construtora divergindo apenas no constrtutor
// e na maneira de passar metodos para o prototype

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando.`);
}

p2 = new Pessoa2('teste2', 'asasdsad');
console.log(p2);