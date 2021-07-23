//continue --> continua para a proxima iteração
//break --> sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

for(let numero of numeros){
    if(numero === 2 || numero === 5){
        console.log('Numero pulado');
        continue; //pula o numero 2 e continua a executar o for
    }
    if(numero === 8){
        console.log('Numero pulado');
        continue;
    }
    if(numero === 10){
        console.log('Numero 10 encontrado')
        break;
    }
    console.log(numero);
}

console.log('Loop while');
let i = 0;
while(i < numeros.length){
    let numero = numeros[i];
    if(numero === 2 || numero === 5){
        console.log('Numero pulado');
        i++;
        continue; //pula o numero 2 e continua a executar o for
    }
    if(numero === 8){
        console.log('Numero pulado');
        i++;
        continue;
    }
    console.log(numero);
    if(numero === 10){
        console.log('Numero 10 encontrado')
        break;
    }
    i++;
}

console.log('Do while');
i = 0;
do{
    let numero = numeros[i];
    if(numero === 2 || numero === 5){
        console.log('Numero pulado');
        i++;
        continue; //pula o numero 2 e continua a executar o for
    }
    if(numero === 8){
        console.log('Numero pulado');
        i++;
        continue;
    }
    console.log(numero);
    if(numero === 10){
        console.log('Numero 10 encontrado')
        break;
    }
    i++;
}while(i < numeros.length);