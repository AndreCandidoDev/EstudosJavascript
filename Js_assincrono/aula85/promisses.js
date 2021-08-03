function aleatorio(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

//sem callback executara as funções em ordem aleatoria
// function espera(msg, tempo){
//     setTimeout(() => {
//         console.log(msg);
//     }, tempo)
// }

//executa as funções conforme as ordens no callback --- não recomendável
// function espera(msg, tempo, cb){
//     setTimeout(() => {
//         console.log(msg);
//         if (cb) cb();
//     }, tempo)
// }

function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('error'));
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

//as promisses são executadas em paralelo (código assincrono)
espera('Conexão com o Bd', aleatorio(1, 3))
.then((resposta) => { //captura o que esta sendo enviado no resolve
    console.log(resposta);
    return espera('Buscando os dados', aleatorio(1, 3));
})
.then(resposta => {
    console.log(resposta)
    // return espera('Tratando os dados', aleatorio(1, 3));
    return espera(21235456465, aleatorio(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.then(() => {
    console.log('Exibe os dados da tela')
}) //executa apos a execução do resolve
.catch(e => {
    console.log('ERRO ', e);
}); //executa apos a execução do reject, usar para tratar erro

console.log('Exibe isso antes de tudo')

// espera('algo1', aleatorio(1, 3));
// espera('algo2', aleatorio(1, 3));
// espera('algo3', aleatorio(1, 3));

// espera('algo1', aleatorio(1, 3), function(){
//     espera('algo2', aleatorio(1, 3), function(){
//         espera('algo3', aleatorio(1, 3));
//     });
// });