//Reduce -> reduzir array em um unico elemento
const numeros = [5, 1, 2, 32, 69, 87, 45, 6, 0, 3, 4, 7, 80, 74];

//retornar a soma dos itens do array
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    console.log(acumulador, valor);
    return acumulador;
}, 0);
console.log(total);

//retornar array com valores pares
const total2 = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total2);

const total2impares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 !== 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total2impares);

//retornar array com o dobro dos valores
const total3 = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador
}, []);
console.log(total3);

const total4 = numeros.reduce(function(acumulador, valor){
    if(valor %2 === 0) acumulador += valor;
    return acumulador
}, 0) //se nao for passado o inicio, o reduce pega o primeiro elemento do valor comovalor inicial
console.log(total4);

// #################################################################################################
const pessoas = [
    {nome: 'teste', idade:60},
    {nome: 'asd', idade:12},
    {nome: 'xcvvcxa', idade:56},
    {nome: 'gfdgfdg', idade:74},
    {nome: 'dasdaa', idade:23},
];

//Retorne a pessoa mais velha
const total5 = pessoas.reduce(function(acumuldor, valor){
    if(acumuldor.idade > valor.idade) return acumuldor;
    return valor;
}, 0)
console.log(total5);