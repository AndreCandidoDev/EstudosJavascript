//            01234
const nome = 'teste';

for(let i=0; i<nome.length; i++){ //for classico e "editavel"
    console.log(nome[i]);
}

console.log('');

for(let i in nome){ //permite acesso ao numero do indice, recomendavel usar em objetos
    console.log(nome[i]);
}

console.log('');

for(let valor of nome){ //possui comportamento semelhante ao for do python
    console.log(valor);
}

console.log('');

const nomes = ['teste', 'teste1', 'teste2']
for(let valor of nomes){ //acesso somente ao valor, não serve para objetos, apenas strings e arrays
    console.log(valor);
}

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

const pessoa ={
    nome: 'teste',
    sobrenmome: 'teste_s',
    idade: 23
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

//for classico; usar em iteraveis (arrays ou strings)
//for in; retorna o indice ou chave (strings, arrays ou objetos)
//for of; retorna o valor em si (iteraveis arrys ou strings)