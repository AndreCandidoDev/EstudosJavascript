function aleatorio(min=0, max=3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
             reject('Erro');
             return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' -passou na promise');
        }, tempo)
    });
}

// espera('fase 1', aleatorio(0, 3))
// .then(valor => {
//     console.log(valor);
//     return espera('fase 2', aleatorio(0, 3))
// })
// .then(fase => {
//     console.log(fase);
//     return espera('fase 3', aleatorio())
// })
// .then(fase => {
//     console.log(fase);
//     return fase;
// })
// .then(fase => console.log('terminou na fase:', fase))
// .catch(e => console.log(e));

// ################################################################################################
// faz o mesmo do código acima 
// async permite o uso de await que espera uma promise ser executada
// await espera o codigo da promise ser executado para prosseguir com a execução

// as promises (similares as threads) possuem os seguintes estados:
// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada

async function executa(){
    try{
        const fase_pending = espera('@@@@', 1000);
        console.log(fase_pending);

        setTimeout(function(){
            console.log('estava pendente',fase_pending);
        }, 1100);

        const fase1 = await espera('fase 1', aleatorio());
        console.log(fase1);

        const fase2 = await espera('fase 2', aleatorio());
        console.log(fase2);
        
        const fase3 = await espera('fase 3', aleatorio());
        console.log(fase3);
        
        console.log('terminamos na fase', fase3);

        const fase4 = await espera(4545, aleatorio());
        console.log(fase4);
    }
    catch(e){
        console.log(e)
    }
}

executa();