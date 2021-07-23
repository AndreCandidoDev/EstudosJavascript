const numero = 10;

//a partir do momento que uma condição verdadeira é encontrada o ponteiro sai das condicionais
if (numero < 11){
    console.log('O numero é menor que 11'); //será executado pois está fora do outro bloco if
} // se estivesse dentro do outro if e antes de uma condição verdadeira, seria executada

if (numero >= 0 && numero <= 5){
    console.log('Sim o numero está entre 0 e 5');
}else if (numero >= 6 && numero <= 8){
    console.log('O numero está entre 6 e 8');
}else if (numero >= 9 && numero <= 11){
    console.log('O numero está entre 9 e 11');
}else {
    console.log('O numero não está entre 0 e 11');
}