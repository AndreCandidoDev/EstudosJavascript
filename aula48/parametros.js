//ao declarar função como function temos disponivel arguments
//argumentos que sustenta todos argumentos enviados
function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}

function funcao2(a, b, c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c);
}

function funcao3(a, b, c, d, e, f){
    console.log(a,b,c,d,e,f);
}

function funcao4(a, b=2, c=4){ 
    // b = b || 0;
    console.log(a+b+c);
}

function funcao5({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

function funcao6([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}

funcao(1,2,3,4,5,6); 
funcao2(1,2,3,4,5,6); 
funcao3(1,2,3,4,5,6); 
funcao3(1,2,3); //em js função com parametro nao enviado recebe undefined ao inves de erro
funcao4(2);
funcao4(2, '', 20); //para pular valor, nao usar string vazia
funcao4(2, undefined, 20); //unica forma de pular valor para parametro assumir valor padrão
funcao5({nome:'teste', sobrenome:'algo', idade:25});
let obj = {nome:'teste', sobrenome:'algo', idade:25};
funcao5(obj);
funcao6(['teste', 'algo', 20]);


//parametro rest sempre deve ser o ultimo
function conta(operador, acumulador, ...numeros){ //todos os outros parametros serão considerados como o parametro numero
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

const conta2 = function(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};

conta2('+', 0, 50, 60, 70);

// const conta3 = function(operador, acumulador, ...numeros){
//     console.log(arguments);
// }

// const conta3 = (operador, acumulador, ...numeros) => { //em arrowfunction nao temos o arguments
//     // console.log(arguments);
//     console.log(operador, acumulador, numeros);
// }

const conta3 = (...args) => { 
    // console.log(arguments);
    console.log(args);
}


conta3('+', 0 ,10, 20, 30, 40, 50);