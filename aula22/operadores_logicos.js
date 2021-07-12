/* Operadores lógicos
&& --> and
|| --> or
!  --> not
*/

console.log(true && true && true && true);
console.log(true && true && false && true);
const expressaoAnd = true && true && true;
console.log(expressaoAnd);

console.log(true || false || false);
console.log(false || false || false);
const expressaoOr = false || false;
console.log(expressaoOr);

console.log(!true && !false);
console.log(!(false && false));