const pessoa = {
    nome: 'teste',
    sobrenome: 'algo'
};

console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa['nome'], pessoa['sobrenome']);

const chave = 'nome';
console.log(pessoa[chave]);

// ##############################################################################################

const pessoa1 = new Object();
pessoa1.nome = 'algo';
pessoa1.sobrenome = 'algo1';
pessoa1.idade = 25;

console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa1['nome'], pessoa1['sobrenome']);

// delete pessoa1.nome;
// console.log(pessoa1);

pessoa1.falarNome = function(){
    return (`${this.nome} esta falando seu nome`);
}

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento())

for(let chave in pessoa1){
    // console.log(chave);
    console.log(pessoa1[chave]);
}

// ############################################################################################
//moldes de objetos: factory functions / constructor functions / classes

function criaPessoa(nome, sobrenome){   //factory function
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
} 

const p1 = criaPessoa('alguem', 'alguem');
console.log(p1.nomeCompleto);


// constructor function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); //impede que os parametros de objetos possam ser alterados ou deletados
}

const p2 = new Pessoa('algo2', 'algo2');
console.log(p2);