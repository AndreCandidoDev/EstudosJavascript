//tipos primitivos: string, number, boolean, null, undefined
const nome = 'teste'; //string
const nome1 = "teste1"; //string
const nome2 = `teste2`; //string  (crase permite uso de template strings)

const num = 10; //number
const num1 = 10.15; //number
let algo; //undefined
const algo2 = null; //null é diferente de undefined
const algo3 = true; //boolean, true ou false

const a = [1, 2];
const b = a; 
b.push(3);

const c = 2;
const d = c;
console.log(c, d);

console.log(typeof(nome), nome);
console.log(typeof(num), num);
console.log(typeof(algo), algo);
console.log(typeof(algo2), algo2);
console.log(typeof(algo3), algo3);
console.log(typeof(a), a, typeof(b), b);