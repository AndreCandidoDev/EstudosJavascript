// 705.484.450-52   070.987.720-03

// pegar todos os digitos excluindos os dois ultimos e multiplicar cada um
// por uma sequencia que vai de 10 a 2 e somar tudo o que der

// 7x  0x  5x  4x  8x  4x  4x  5x  0x 
// 10  9   8   7   6   5   4   3   2  
// 70  0   40  28  48  20  16  15  0  = 237

// apos isso realizar a operação: 11 - valor%11 = primeiro digito pós -

// 11 - (237%11) = 5 (primeiro digito pós traço) --> cpf valido
// se o numero for maior que 9 o valor atribuido deve ser 0

// apos esse processo incluir o primeiro digito pós traço
// realizar a mesma operação anterior para pegar o segundo digito pós traço, iniciando
// dessa vez em 11 a sequencia de multiplicadores

// 7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
// 11  10  9   8   7   6   5   4   3   2 = 284

// 11 - (284%11) = 2 (segundo digito pós traço) (se maior que 9 atribuir 0)

// após as operações concatenar os dois digitos obtidos
// se for igual ao cpf passado o mesmo é valido

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); //todos elementos que não sejam numeros sao substituidos por ''
console.log(cpfLimpo);
console.log(Array.from(cpfLimpo));
let cpfArray = Array.from(cpfLimpo);
// let soma = cpfArray.reduce((acumulador, valor) => acumulador + Number(valor), 0)
// console.log(soma);