//return --> retorna o valor e encerra a função

function soma(a, b){
    return a + b;
}

function soma2(a, b){
    console.log(a+b);
}

console.log(soma(5,2));
soma2(5,2);

function criaPessoa(nome, sobrenome){
    // return {nome: nome, sobrenome: sobrenome};
    return {nome, sobrenome};
}

const p1 = criaPessoa('teste', 'algo');
const p2 = {
    nome: 'teste2',
    sobrenome: 'teste'
}

console.log(p1);
console.log(p2);

//##########################################################################################
function falaFrase(comeco){
    function falaResto(resto){
        return comeco+' '+resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Ola');
const resto = olaMundo('mundo!');
console.log(resto);

// ##########################################################################################

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador; 
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(10));