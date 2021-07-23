//Primitivos (imutaveis): string, number, boolean, undefined, null, bigint, symbol
//Referencia (mutaveis): array, objects, functions --> passados por referencia
let nome = 'alguma';
nome = 'coisa';
nome[0] = '@'; //so funciona para array
console.log(nome);

let a = 'A';
let b = a; //cópia do valor de a
console.log(a, b);
a = 'alguma coisa';
console.log(a, b);

//para dados do tipo de referencia, não importa a sequencia do codigo haverá alteração
let c = [1,2,3];
// let d = c;
let d = [...c]; //ao ser declarado dessa forma o valor de c é copiado porem d independe de c
let e = c;
console.log(c, d);
console.log(c, d, e); //usando o mesmo metodo, não importa a qtd de variaveis elas receberão os mesmos valores

c.push(4); 
console.log(c, d); //adicionou 4 em c e tbm em d mesmo não sendo sequencial
console.log(c, d, e);
d.pop(4);
console.log(c, d); //removeu 4 em d e tbm em c
c.push('algo');
console.log(c, d, e);

const nomeA = {
    nome: 'teste nome',
    sobrenome: 'teste sobrenome'
};

// const nomeB = nomeA; //copia o objeto nomeA e os tornas dependentes a mudança (aponta para mesmo local de memoria)
const nomeB = {...nomeA} //com essa notação os objetos tornaram independentes nas mudanças de valores
nomeA.nome = '@@@@@';
console.log(nomeA);
console.log(nomeB);

