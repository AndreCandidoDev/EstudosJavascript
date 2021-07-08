let string1 = 'uma "coisa"'; //aspas simples permite texto com aspas duplas
let string2 = "um \"texto\""; //maneira de inserir aspas duplas com aspas duplas
let string3 = "um \texto"; //da espaço de tabulação
let string4 = "um \\texto"; //maneira de inserir barra invertida no texto
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

let string5 = 'abcdefg';
console.log(string5.charAt(5)); //retorna valor do indice passado ou vazio se estiver fora do range da string
console.log(string5.concat('h','i',' ','j')); //concatena strings passadas na função
console.log(string5+'h'+'i'+' '+'j');
console.log(`${string5}hi j`);

let string6 = 'Um texto';
console.log(string6.indexOf('texto')); //retorna o indice que inicia determinada palavra na string
console.log(string6.indexOf('texto', 0)); //retorna -1 se caractere ou palavra não forem encontrados
console.log(string6.lastIndexOf('o', 7)); //similar ao indexOf porem a busca inicia a partir do fim da string
console.log(string6.match(/[a-z]/g)); //metodo para usar expressões regulares em strings, retorna array com todas letras minusculas (flag g)
console.log(string6.match(/[a-z]/)); //retorna a primeira letra minuscula da string
console.log(string6.search(/[a-z]/)); //retorna o indice da primeira letra minuscula
console.log(string6.replace('Um', 'esse')); //substitui determinado trecho da string pelo segundo parametro

let string7 = 'O rato roeu a roupa do rei de roma.';
console.log(string7.replace(/r/g, '#')); //substitui todos caracteres r por #
console.log(string7.length); //exibe o tamanho da string
console.log(string7.slice(2,5)); //exibe o trecho da string do indice inicial passado ate o indice final
console.log(string7.slice(-5)); 
console.log(string7.slice(-5, string7.length - 1)); 
console.log(string7.slice(-5, -1)); 
console.log(string7.substring(string7.length-5, string7.length-1)); //pega a substring a partir da origem passada ate o final passado
console.log(string7.split(' ')); //divide a string a partir da entrada passada
console.log(string7.split(' ', 2));
console.log(string7.toUpperCase());
console.log(string7.toLowerCase());