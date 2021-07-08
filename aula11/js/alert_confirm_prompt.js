alert('@@@@@@@@@@@@@'); //retorna undefined
const confirma = confirm('Apagar ?'); // retorna true ou false
console.log(confirma);
let mensagem = prompt('Digite algo'); // retorna valor digitado
console.log(mensagem);

let num1 = prompt('numero 1');
let num2 = prompt('numero 2');
console.log(num1+num2); //prompt retorna string
console.log(Number(num1)+Number(num2));

//exercicio
let num3 = Number(prompt('Digite um numero'));
let num4 = Number(prompt('Digite um numero'));
const resultado = num3 + num4;
alert('O resultado é: ' + resultado);
alert(`O resultado com template string é: ${resultado}`);
alert(`O resultado com template string e sem variável é: ${num3 + num4}`);
