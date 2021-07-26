//Retorne numeros maiores que 10
const numeros = [5, 1, 2, 32, 69, 87, 45, 6, 0, 3, 4, 7, 80, 74];
const maiores = [];

for(let i of numeros){
    if (i > 10) maiores.push(i);
}
console.log(maiores);

// ##########################################################################################

//Filter sempre vai retornar um array com a mesma quantidade de elementos ou menos
callbackFilter = (valor, indice, array) => {
    // console.log(valor, indice, array);
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

// ##########################################################################################

const numerosFiltrados2 = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados2);


// ##########################################################################################
// retorne as pessoas cujo nome tem mais de 5 letras
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termine em 'a'

const pessoas = [
    {nome: 'teste', idade:62},
    {nome: 'asd', idade:12},
    {nome: 'xcvvcxa', idade:56},
    {nome: 'gfdgfdg', idade:41},
    {nome: 'dasdaa', idade:23}
]

const pessoas2 = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoas2);

const pessoas3 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoas3);

// const pessoas4 = pessoas.filter(obj => obj.nome.charAt(obj.nome.length-1) == 'a');
const pessoas4 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoas4);