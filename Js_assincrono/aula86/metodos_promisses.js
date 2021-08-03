function aleatorio(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){ 
            reject(false);
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase()+'-passou na promise');
        }, tempo)
    });
}


// ################################################################################################
function baixaPagina(){
    const emCache = true;
    if(emCache){
        // return Promise.resolve('Pagina em cache'); //resolve imediatamente a prommise executando o then
        return Promise.reject('Pagina em cache'); //rejeita a promisse e executa o catch
    } else{
        return espera('Baixando', 3000);
    }
}

baixaPagina()
.then(dadosPagina => console.log(dadosPagina))
.catch(e => console.log('ERRO',e));

// Métodos uteis
// Promise.all  Promise.race  Promise.resolve  Promise.reject

// ##############################################################################################
const promises = [
    'primeiro valor',
    espera('promise 1', 3000),
    espera('promise 2', 500),
    espera('promise 3', 1000),
    // espera(100, 1000),  //se executada o retorno será false
    'outro valor'
];

Promise.all(promises)
.then(valor =>{ //resolve todas as promises e retorna os seus valores
    console.log(valor)
})
.catch(erro => { //se ocorrer algum erro, será retornado apenas o valor do erro rejeitando todas as promises
    console.log(erro);
});

// ###############################################################################################
const promises2 = [
    // 'primeiro valor', 
    //no metodo race valores que nao sao promises são considerados como resolvidos e retornados antes de resolver qualquer promise
    espera(100, aleatorio(1, 5)), 
    espera('promise 1', aleatorio(1, 5)),
    espera('promise 2', aleatorio(1, 5)),
    espera('promise 3', aleatorio(1, 5)),
    // 'outro valor'
];

Promise.race(promises2) //resolve a promise que executa mais rapido entregando seu valor
.then(valor =>{ 
    console.log(valor)
})
.catch(erro => { 
    console.log(erro);
});
// #################################################################################################

