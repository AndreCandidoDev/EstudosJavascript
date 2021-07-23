function saudacao(nome){
    return `Olá ${nome}`;
}

//funções do tipo void em js retornam undefined
const variavel = saudacao('algo');
console.log(variavel);

function soma(x=1, y=1){  //se nao for enviado nenhum parametro, x sera 1 e y sera 1 
    return `A soma de ${x} + ${y} é igual a: ${x+y}`;
}

let teste = soma(2,2);
console.log(teste);
teste = soma(10,60);
console.log(teste);
teste = soma();
console.log(teste);

const raiz = function(numero){
    return numero ** (1/2);
};

let numero = 9
console.log(raiz(numero=numero));
console.log(`A raiz de ${numero} é: ${raiz(numero)}`);

const potencia_de_2 = n => 2**n; //usar para funções de apenas um parametro
console.log(potencia_de_2(2));