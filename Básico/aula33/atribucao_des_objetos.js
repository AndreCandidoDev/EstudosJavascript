const pessoa = {
    nome: 'teste',
    sobrenome: 'teste_sobrenome',
    idade: 20,
    endereco:{
        rua: 'rua teste',
        numero: 321
    }
};


//atribuição via desestruturação
// const {nome: n='', sobrenome, idade} = pessoa
// const {nome, sobrenome, idade, endereco: {rua:r, numero:num=1236}, endereco} = pessoa
// const nome = pessoa.nome;
// console.log(nome, sobrenome, idade);
// console.log(n, sobrenome, idade);

// console.log(endereco);
// console.log(rua, numero);
// console.log(r, num);

const {nome, ...resto} = pessoa;
console.log(nome);
console.log(resto);