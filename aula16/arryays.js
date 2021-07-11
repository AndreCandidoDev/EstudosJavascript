const nome = 'alguma coisa';
const alunos = ['nome1', 'nome2', 'nome3', 1, true, null]; //em js é possivel misturar os tipos de dados (não recomendavel)
const alunos1 = ['nome1', 'nome2', 'nome3'];
console.log(alunos);
console.log(nome[0]);
console.log(alunos1[0]);

alunos1[0] = 'teste'; //substitui valor de indice 0
alunos1[3] = 'teste2';
console.log(alunos1);

console.log(alunos1.length); //exibe comprimento do vetor

alunos1[alunos1.length] = 'teste3' //adiciona valor no fim do vetor sem função
alunos1[alunos1.length] = 'teste4'
alunos1[alunos1.length] = 'teste5'
console.log(alunos1);

alunos1.push('algo'); //faz o mesmo porem com função
console.log(alunos1);

alunos1.unshift('@@@@'); //adiciona elemento no inicio do vetor e faz alocação dos demais indices
alunos1.unshift('@@@1');
console.log(alunos1);

alunos1.pop(); //remove o ultimo elemento do array e retorna o valor do elemento removido
const removido = alunos1.pop();
console.log(removido);
console.log(alunos1);

alunos1.shift(); //remove o primeiro elemento do array e retorna seu valor
const removido1 = alunos1.shift()
console.log(removido1);
console.log(alunos1);

delete alunos1[0]; //apaga o valor do indice passado porém não remove area do vetor
console.log(alunos1[0]) //indice com valor vazio retorna undefined
console.log(alunos1);

console.log(alunos1[50]); //ao acessar valor de indice que não existe há o retorno de undefined

//alunos1 = [ <1 empty item>, 'nome2', 'nome3', 'teste2', 'teste3', 'teste4' ]
console.log(alunos1.slice(0,2)); //similar as strings, fatia o array a partir de (origem, fim)
console.log(alunos1.slice(0, -1)); // [ <1 empty item>, 'nome2', 'nome3', 'teste2', 'teste3' ]

console.log(typeof(alunos1)); //em js arrays são do tipo object
console.log(alunos1 instanceof Array); //verifica se variavel é array


//ao declarar uma constante como arry, o conteudo do array pode ser alterado
//não podemos mudar o valor da variavel ex const a =[1,2]; a='@@' ---> ira dar erro
const array = [1,2,3];
array.push(4);
array[0] = 10;
array[1] = '@@';
console.log(array);