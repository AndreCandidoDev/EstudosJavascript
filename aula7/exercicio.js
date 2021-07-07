const nome = 'teste';
const sobrenome = 'teste@@';
const anoNascimento = '1996'
const idade = 20;
let peso;
let altura;
peso = 70;
altura = 1.70;
let imc = peso/(altura*altura);

//forma convencional
// console.log(nome, sobrenome, 'nascido em', anoNascimento, 'possui', idade, 'anos');
// console.log('tem', altura, 'm de altura, pesa',peso, 'kg', 'e possui IMC de', imc);

//uso de template strings
console.log(`${nome} ${sobrenome} nascido em ${anoNascimento} possui ${idade} anos`);
console.log(`tem ${altura} m de altura pesa ${peso} kg e possui IMC de ${imc}`);