function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);  //mostra a hora durante o intervalo de 1seg

setTimeout(function(){
    clearInterval(timer);
}, 3000); //apos 3 segs de execução do programa interrompe a execução do setInterval

setTimeout(function(){
    console.log('Ola mundo');
}, 5000); //apos 5 segs exibe a mensagem