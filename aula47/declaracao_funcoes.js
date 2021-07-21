//Declaração de função (function hoisting)
falaOi();

function falaOi(){
    console.log('oi');
}


//First-class objects (objetos de primeira classe)
//Function expression
const dado = function(){
    console.log('Alguma coisa');
};

// dado();

function executaFuncao(funcao){
    console.log('Executa a função abaixo:');
    funcao();
}

executaFuncao(dado);

//Arrow function
const funcaoArrow = () => {
    console.log('Função arrow');
};
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Ola');
    },
    falar2(){
        console.log('Ola denovo');
    }
};
obj.falar();
obj.falar2();