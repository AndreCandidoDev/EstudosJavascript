const pessoa1 = {  //objeto literal
    nome: 'teste',
    sobrenome: 'teste',
    idade: 20,

    exibeDados(){
        console.log(`${this.nome} ${this.sobrenome} ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

pessoa1.exibeDados();
pessoa1.incrementaIdade();
console.log(pessoa1.idade);


function criaPessoa(nome, sobrenome, idade){  //function factory
    return { nome, sobrenome, idade };
}

const pessoa2 = criaPessoa('teste2', 'teste2', 56);
const pessoa3 = criaPessoa('teste3', 'teste3', 21);
const pessoa4 = criaPessoa('teste4', 'teste4', 28);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);