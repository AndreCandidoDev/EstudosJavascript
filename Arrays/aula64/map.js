//Dobre os numeros
const numeros = [5, 1, 2, 32, 69, 87, 45, 6, 0, 3, 4, 7, 80, 74];

//sem map
const aux = []
for(let i of numeros){
    aux.push(i*2);
}
console.log(aux);

//#########################################################################################
const numerosTeste = numeros.map(function(valor){
    return `teste ${valor}`
})
console.log(numerosTeste); //cada valor recebe a palavra teste antes do valor

//##########################################################################################
const numerosEmDobro = numeros.map(valor => valor*2) //dobra cada valor e retorna array
console.log(numerosEmDobro);

//###########################################################################################

const pessoas = [
    {nome: 'teste', idade:62},
    {nome: 'asd', idade:12},
    {nome: 'xcvvcxa', idade:56},
    {nome: 'gfdgfdg', idade:41},
    {nome: 'dasdaa', idade:23},
];

const nomes = pessoas.map(obj => obj['nome']);
console.log(nomes);

const idades = pessoas.map(obj => {
    const newObj = {...obj} 
    delete newObj.nome;
    return newObj;
});
console.log(idades);

const idades2 = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades2);

const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice + 1;
    return newObj;
});
console.log(comIds);
console.log(pessoas);
