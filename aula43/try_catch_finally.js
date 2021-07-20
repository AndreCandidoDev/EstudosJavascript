try{
    //executa quando não ha erros
    console.log('@@@@@');
    // console.log(a);
    try{
        console.log(b);
    }catch(e){
        console.log('error');
    }finally{
        console.log('Outro finally');
    }
}catch(e){
    //executa quando ocorre erro
    console.log('error');
}finally{
    //sempre é executado (pode ser omitido)
    console.log('Finally: Sempre é executado')
}

// #################################################################################

function retornaHora(data){
    if(data && !(data instanceof Date)){ //verifica se é instancia de um determinado objeto
        throw new TypeError('Esperando instância de Date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const hora = retornaHora();
    console.log(hora);    
    const data = new Date('01-01-1970 12:58:12');
    console.log(retornaHora(data));
    console.log(retornaHora(1));
}catch(e){
    //tratar erro
}finally{
    console.log('Tenha um bom dia')
}