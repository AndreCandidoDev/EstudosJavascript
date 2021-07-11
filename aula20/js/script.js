function meuEscopo(){ //faz o papel de função main não misturando com escopo global com outras bibliotecas
    
    const form = document.querySelector('.form'); //seleciona o form pela classe 
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault(); //impede que no envio do form a pagina seja recarregada

        //as variaveis recebem os inputs do formulario
        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobrenome');
        let altura = form.querySelector('.altura');
        let peso = form.querySelector('.peso');

        pessoas.push({  //essa declaração equivale ao tipo dict do python
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value,
            peso: peso.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();