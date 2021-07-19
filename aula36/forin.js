//For in --> le os indices ou chaves do objeto

const frutas = ['maça', 'pera', 'uva'];

const pessoa = {
    nome: 'teste',
    sobrenome: 'teste_s',
    idade: 25
};

for(let i=0; i<frutas.length; i++){ //declaração similar do java
    console.log(frutas[i]); 
}

for(let index in frutas){  //declaração similar do python
    // console.log(index);  //exibe os indices do array
    console.log(frutas[index]);
}

for (let chaves in pessoa){
    console.log(chaves); //exibe as chaves do objeto
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

const chave = 'nome';
console.log(pessoa[chave]);


for(let key in pessoa){
    console.log(key, pessoa[key]);
}
