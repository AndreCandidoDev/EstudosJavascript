let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b,c,a];
[a,b,c] = letras //atribuição via desestruturação usando array
console.log(a,b,c);


const numeros = [152, 24545, 312121, 454545, 787954, 63132, 7565, 888, 21219];
console.log(numeros[0]);

// ... rest operaotor, spread operator
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; // ... pega o resto do vetor
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto); 

const [um, ,tres, ,cinco, ,sete] = numeros;
console.log(um, tres, cinco, sete);

//                     0        1       2
//                  0 1 2    0 1 2    0 1 2
const numeros2 = [ [1,2,3], [4,5,6], [7,8,9] ];
console.log(numeros2[1][2]);

const [,[,,seis]] = numeros2;
console.log(seis);