// IIFE --> immediately invoked function expression

(function(idade, peso, altura){  //função fora do escopo global
    console.log(1234560);
    const nome = 'algo';
    console.log(nome);

    const sobrenome = 'teste';
    
    function criaNome(nome){
        return nome +' '+ sobrenome;
    }

    function falaNome(){
        console.log(criaNome('teste2222'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(20,10,2);

const nome = 'algo2'; //variavel no escopo global
console.log(nome);