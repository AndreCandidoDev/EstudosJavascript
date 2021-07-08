const num1 = 1;
const num2 = 4;
const num3 = 3;
console.log(num1+num2); //adição / concatenação
console.log(num1-num2); //subtração
console.log(num1*num2); //multiplicação
console.log(num1/num2); //divisão
console.log(num2**3); //potenciação
console.log(num2%num3); //resto
const num1s = '1';
const num2s = '4';
console.log(num1s+num2s);

let contador = 1;
contador++; //pós incremento de valor unico
console.log(contador);
console.log(contador++); //exibiu antes de somar
console.log(contador); //exibiu antes de somar
console.log(++contador); //somou antes de exibir

contador = contador + 5;
console.log(contador);
contador += 5;
console.log(contador);
contador -= 1;
console.log(contador);
contador *= 2;
console.log(contador);
contador **= 2;
console.log(contador);
contador /= 2;
console.log(contador);
console.log(contador--);
console.log(contador);
console.log(--contador);

const ns = 5;
const ns1 = '10';
const ns2 = '10.2';
const ns3 = '10.5';
console.log(ns + ns1);
console.log(ns + parseInt(ns1));  //converte string para inteiro
console.log(ns + parseFloat(ns2)); //converte string para float
console.log(ns + Number(ns3)); //converte string para numero independente se é float ou não

/*
Precedencia dos operadores
()
** --> potenciação
* / %
+ -
*/