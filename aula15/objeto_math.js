let num1 = 9.785642;
let num2 = Math.floor(num1); //arredonda num1 para baixo excluindo a parte decimal
console.log(num2);
num2 = Math.ceil(num1); //arredonda para cima excluindo parte decimal
console.log(num2);
num1 = 9.4523;
num2 = Math.round(num1);
console.log(num2); //apos a virgula <= 5 ----> arredonda para baixo
num1 = 9.785642;
num2 = Math.round(num1); //função round() arredonda para cima ou para baixo conforme regra de arredondamento
console.log(num2); //apos virgula >= 5 ----> arredonda para cima

console.log(Math.max(1,2,3,5,4,10,20,7,8,9)); //metodo max retorna o maior numero de uma sequencia (array)
console.log(Math.min(1,2,3,5,4,10,20,7,8,9)); //metodo min retorna o menor numero de uma sequencia (array)

const aleatorio = Math.random(); //gera numero aleatorio entre 0 e 1 (não inclui o 1)
console.log(aleatorio);

const aleatorio1 = Math.round(Math.random() * (10 - 5) + 5); //arredonda numero aleatorio entre 5 e 10
console.log(aleatorio1);

console.log(9**(1/2));
console.log(9**0.5);

console.log(100/0); //em js gera indeterminação ao inves de erro, dado tipo Infinity
