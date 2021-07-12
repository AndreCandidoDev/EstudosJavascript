console.log('algo' && 0 && 'teste'); //a comparação retorna o 0 (unico valor falso)
console.log('@@' && '@@@' && '@@@@'); //comparação retorna ultimo valor ja que todos valores são verdadeiros

//valores que avaliam em false nas expressoes (FALSY values): 
//0, '', "", ``, null, undefined, NaN

console.log('asdasd' && 85 && 'adasd' && true); //retorna o ultimo valor
console.log('asdasd' && 85 && '' && true); //retorna a string vazia


function falaOi(){
    return 'oi';
}

vaiExecutar = false;
console.log(vaiExecutar && falaOi());

vaiExecutar = true
console.log(vaiExecutar && falaOi());


console.log('dads'||null||0||undefined); //operador || retorna o primeiro valor true em uma expressao
console.log(false || 0 || 0); //se todos forem false, retorna o ultimo valor da expressao

let corUsuario = null;
corUsuario = 'verde';
let corPadrao = corUsuario || 'preto';
console.log(corPadrao);