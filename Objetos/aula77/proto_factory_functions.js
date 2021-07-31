// forma acoplada
function CriaPessoa(nome, sobrenome){

    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando.`);
        },

        comer(){
            console.log('comer');
        },

        beber(){
            console.log('beber');
        },
    };

    return Object.create(pessoaPrototype, {
        nome: {value: nome}, //nas chaves definir as propriedades dos atributos
        sobrenome: {value: sobrenome},
    });
}

const p1 = CriaPessoa('teste', 'teste');
const p2 = CriaPessoa('teste1', 'teste1');
console.log(p1);
console.log(p2);

// ################################################################################################
// forma desacoplada, os metodos podem ser utilizados em qualquer lugar fora do objeto

const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    },
};

// const pessoaPrototype1 = {...falar, ...comer, ...beber};
const pessoaPrototype1 = Object.assign({}, falar, comer, beber);

function CriaPessoa1(nome, sobrenome){
    return Object.create(pessoaPrototype1, {
        nome: {value: nome}, //nas chaves definir as propriedades dos atributos
        sobrenome: {value: sobrenome},
    });
}

const p3 = CriaPessoa1('@@@@@', '@@@@@@');
console.log(p3);