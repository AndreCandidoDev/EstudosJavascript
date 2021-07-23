const nome = 'teste'; //variavel no escopo global pode ser acessada por qualquer função

function falaNome(){
    // const nome = 'algo'; //variavel declarada dentro da função tem "prioridade"
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'algo'; //variavel não é usada na função logo falaNome busca variavel no escopo global
    falaNome();
}

usaFalaNome();