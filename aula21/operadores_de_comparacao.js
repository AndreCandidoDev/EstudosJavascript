/* Operadores lógicos em JS (usados em comparações)
    >     maior que
    >=    maior ou igual que
    <     menor que
    <=    menor ou igual que
    ==    igualdade (valor)
    ===   igualdade estrita  (valor e tipo)
    !=    diferente que (valor)
    !==   diferente estrito (valor e tipo)
*/

console.log(10 > 5); //retorna true

const expressao = 10 > 5;
console.log(expressao);

const expressao1 = 10 >= 10;
console.log(expressao1);

const expressao2 = 10 < 11;
console.log(expressao2);

const expressao3 = 11 <= 11;
console.log(expressao3);

num1 = 11;
num2 = 12;
num3 = '12';
console.log(num1 == num2);
console.log(num2 == num3); //valores iguais so que de tipos diferentes, por ser == retorna true
console.log(num2 === num3); //retorna false pois são de tipos diferentes
console.log(num2 != num3); //valores iguais, não são diferentes logo retorna false
console.log(num2 !== num3); //valores iguais porem de tipos diferentes, retorna true