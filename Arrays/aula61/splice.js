//              -5        -4         -3        -2        -1
//               0         1          2         3         4
const nomes = ['teste', 'teste1', 'teste2', 'teste3', 'teste4'];
console.log(nomes);

// splice(inicio, delete, elementos a adicionar separados por virgula)

const elem = nomes.splice(4, 1); //no indice 4 remove o elemento a partir dessa posição
console.log(elem); //ao remover elemento a função retorna um array dos elementos removidos
console.log(nomes);

const elem2 = nomes.splice(-2, 2); //a partir de -2 remove os dois ultimos elementos
console.log(elem2);
console.log(nomes);

const nomes1 = ['teste', 'teste1', 'teste2', 'teste3', 'teste4'];
const elem3 = nomes1.splice(-2, Number.MAX_VALUE); //vai do inicio parametro ate a ultima posição possivel
console.log(elem3);

const nomes2 = ['teste', 'teste1', 'teste2', 'teste3', 'teste4'];
const elem4 = nomes2.splice(3, 0, '@@@'); //no indice 3 adiciona o valor e aloca os proximos indices em uma posição
const elem5 = nomes2.splice(3, 1, 'aaaa'); //remove o elemento do indice 3 e adiciona o valor no mesmo
console.log(nomes2);

const nomes3 = ['teste', 'teste1', 'teste2', 'teste3', 'teste4'];
const elem6 = nomes3.splice(3, 2, 'sasas'); //adiciona elemento no indice 3 e remove os dois ultimos alem de substituir o que tava em 3
console.log(nomes3); 

const nomes4 = ['teste', 'teste1', 'teste2', 'teste3', 'teste4'];
const elem7 = nomes4.splice(3, 2, 'asdasd', 'adsaggg');
console.log(nomes4);

//simulando o pop
const nomes5 = ['teste', 'teste1', 'teste2', 'teste3', 'teste4'];
const elem8 = nomes5.splice(-1, 1);
console.log(nomes5);

//simulando o shift
const nomes6 = ['teste', 'teste1', 'teste2', 'teste3', 'teste4'];
const elem9 = nomes6.splice(0, 1);
console.log(nomes6);

//simulando o push
const nomes7 = ['teste', 'teste1', 'teste2', 'teste3', 'teste4'];
const elem10 = nomes7.splice(nomes7.length, 0, 'algo');
console.log(nomes7);

//simulando o unshift
const nomes8 = ['teste', 'teste1', 'teste2', 'teste3', 'teste4'];
const elem11 = nomes8.splice(0, 0, 'dsads');
console.log(nomes8);

//splice(indice atual, delete, elem1, elem2, ...)
