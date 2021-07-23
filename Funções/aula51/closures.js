function retornaFuncao(nome){
    // const nome = 'teste';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('teste');
const funcao2 = retornaFuncao('teste2');
// console.log(funcao);
console.dir(funcao); //util apenas no console do navegador
console.dir(funcao2);
console.log(funcao(), funcao2());