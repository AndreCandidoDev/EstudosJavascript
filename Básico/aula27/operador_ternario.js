// (condição) ? valor para verdadeiro : valor para falso ---> operador ternario

const pontuacaoUsuario = 999;

//verifica o nivel do usuario em apenas uma linha
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'Comum';
console.log(nivelUsuario);

//equivale as seguintes instruções
if(pontuacaoUsuario >= 1000){
    console.log('VIP');
}else{
    console.log('Comum');
}

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);