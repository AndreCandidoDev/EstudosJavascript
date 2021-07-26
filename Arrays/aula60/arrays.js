//                 0         1        2
// const nomes = ['teste1', 'teste2', 'teste3']; //forma literal
const nomes = new Array('teste1', 'teste2', 'teste3'); //forma por construtor

nomes[2] = 'algo';
console.log(nomes);
delete nomes[2]; //remove o item mas nao altera indices do arrays
console.log(nomes);

// const novo = nomes;
const novo = [...nomes] //declarando dessa forma, ao alterar novo não iremos alterar nomes
novo.pop(); //retira alterando o indice tanto de novo quanto de nomes
console.log(nomes);

console.log(nomes.length); //indice != tamanho
const removido = nomes.pop(); //alem de remover retorna o valor removido
console.log(nomes, removido);

const removido2 = nomes.shift(); //remove o primeiro elemento do array e retorna seu valor
console.log(nomes, removido2);

nomes.push('algo');
nomes.push('algo1'); //adiciona elemento no final do array
console.log(nomes);

nomes.unshift('algo2');
nomes.unshift('algo3'); //adiciona no começo, desloca todos os indices em uma posição
console.log(nomes);

const novo2 = nomes.slice(1, 3); //fatia o array [inicio, fim[ ou (inicio, fim+1)
console.log(novo2);

const novo3 = nomes.slice(0, -1); //novo3 recebe nomes sem o ultimo elemento
console.log(novo3);

const novo4 = nomes.slice(1, -2);
console.log(novo4);

const nome = 'teste teste algo';
const nomes1 = nome.split(' '); //converte string para array
console.log(nomes1);

const nome1 = 'teste, teste, algo';
const nomes2 = nome1.split(', ');
console.log(nomes2);

const nomes3 = ['@@@', 'aaaa', 'sadasd'];
const nome2 = nomes3.join(' '); //converte array para string, o parametro é o atributo que une cada elemento
console.log(nome2);