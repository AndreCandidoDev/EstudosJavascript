const produto = {nome:'teste', preco:10};
// const outraCoisa = produto;

// Object.freeze(produto); //impede alterações no objeto
// produto.nome = '@@@@';
// console.log(produto); //parametro nome não é alterado


// const outraCoisa = {
//     ...produto, //copia o objeto porem garante independencia entre os valores
//     material: 'madeira',
// };

// const caneca = Object.assign({}, produto, {material: 'vidro'}); //copia objeto utilizando função assing(), garante independencia de valores do objeto copiado

// const caneca2 = {nome: produto.nome, preco: produto.preco };

console.log(Object.keys(produto)) //retorna array com as chaves

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //retorna as propriedades do atributo

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = '@@@@@@';
console.log(produto); //nome não sera alterado

console.log(Object.values(produto)); //retorna os valores das chaves do objeto em um array

console.log(Object.entries(produto)); //retorna os pares chave,valor em array dentro de um array

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}

for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}