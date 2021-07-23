let num1 = 1;
let num2 = 2.5;
console.log(num1.toString() + num2);
console.log(typeof(num1)); //exibe number
num1 = num1.toString() //converte para string num1
console.log(typeof(num1));

num1 = 1500;
console.log(num1.toString(2)); //o valor 2 em toString converte para o numero para binario

num1 = 10.5687845454;
console.log(num1.toFixed(2)); //retorna o valor de um numero decimal arredondado para 2 casas decimais

num1 = 10;
console.log(Number.isInteger(num1)); //verifica se o numero é inteiro retornando true ou false

let temp = 10 * 'ola';
console.log(Number.isNaN(temp)); //verifica se a variavel possui valor NaN retornando true ou false

num1 = 0.7;
num2 = 0.1;
console.log(num1+num2); //esperado:0.8; resultado:0.7999999999999999
num1 += num2;
num1 += num2;
num1 += num2;
console.log(num1); //esperado:1; resultado:0.9999999999999999
num1 = num1.toFixed(2)
console.log(num1); //num1 é string por isso o false do isInteger mesmo para valor inteiro
console.log(typeof(num1));
console.log(Number.isInteger(num1)); //num1 é do tipo string logo retornara false
console.log(Number.isInteger(1.00)); //retorna true

num3 = 0.7;
num4 = 0.1;
num3 += num4;
num3 += num4;
num3 += num4;
num3 = Number(num3.toFixed(2)); 
console.log(typeof(num3)); //num3 é tipo number
console.log(num3);  
console.log(Number.isInteger(num3));

let num5 = 0.7;
let num6 = 0.1;
num5 = ((num5*100)+(num6*100))/100; //da o resultado preciso de 0.8
num5 = ((num5*100)+(num6*100))/100; 
num5 = ((num5*100)+(num6*100))/100; 
console.log(num5); 
console.log(Number.isInteger(num5));
