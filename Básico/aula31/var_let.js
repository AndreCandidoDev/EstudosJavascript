const verdadeira = true;

let nome = 'teste';
var nome2 = 'teste';

console.log(nome, nome2);

// let nome = 'teste'; //da erro
var nome2 = 'teste2'; //funciona normalmente

console.log(nome, nome2);

//let tem escopo de bloco {...}
//var só tem escopo de função

if(verdadeira){
    let nome = 'algo';
    var nome2 = 'teste3'; //redeclara
    console.log(nome, nome2);
    if (verdadeira){
        let nome = 'algo2';
        var nome2 = 'teste4' //redeclara
        console.log(nome, nome2);
    }
}

console.log(nome, nome2); //exibe teste teste4


var sobrenome = '@@@@@'

function falaOi(){ //em js é possivel acessar variaveis declaradas fora da função na função
    var nome3 = 'algo';
    console.log(nome3);
    console.log(sobrenome);  
    console.log(verdadeira);
    console.log(nome);
    if(verdadeira){
        let nome = 'asdda';
        console.log(sobrenome);
        var sobrenome = 'fdgfg'
    }
    console.log(nome); // nome declarado no bloco não é acessado
    console.log(sobrenome);
}
// console.log(nome3); //da erro, nome3 esta protegido e é exclusivo da função
falaOi()

console.log(sobrenome2); //exibe undefined
var sobrenome2 = 'sdasdasdasd'; //se for usado let havera erro