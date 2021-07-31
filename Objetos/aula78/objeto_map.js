const pessoas = [
    {id:3, nome:'teste3'},
    {id:2, nome:'teste2'},
    {id:1, nome:'teste1'},
];

const novasPessoas = {};
for(const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa};
}

// alterou a ordem do array na transformação para objeto podendo causar erros em ooutro sistema
console.log(novasPessoas);

// ############################################################################################

const pessoas2 = [
    {id:3, nome:'teste3'},
    {id:2, nome:'teste2'},
    {id:1, nome:'teste1'},
];

const novasPessoas2 = new Map();
for(const pessoa of pessoas2){
    const {id} = pessoa; //chave id de pessoas2[pessoa]
    novasPessoas2.set(id, {...pessoa}); //monta o set do map id => {pessoa}
}

console.log(novasPessoas2);
console.log(novasPessoas2.get(2)); //forma de se obter valor de um objeto map

console.log('--------------------------------------------');
for(const pessoa of novasPessoas2){
    console.log(pessoa); //para cada iteração retorna um array [valor_chave, objeto]
}
console.log('--------------------------------------------');
for(const [identifier, {id, nome}] of novasPessoas2){
    console.log(identifier, id, nome);
}
console.log('--------------------------------------------');
for(const chave of novasPessoas2.keys()){
    console.log(chave); //obtem as chaves de novasPessoas2
}
console.log('--------------------------------------------');
for(const value of novasPessoas2.values()){
    console.log(value); //obtem os valores de novasPessoas2
}
console.log('--------------------------------------------');
novasPessoas2.delete(2); //deleta a chave 2
console.log(novasPessoas2);