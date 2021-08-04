// fetch('pessoas.json') //busca os dados do arquivo json
// .then(resposta => resposta.json())
// .then(json => carregaElementosNapagina(json))
// .catch(e => console.log(e));

// biblioteca axios
axios('pessoas.json')
.then(resposta => carregaElementosNapagina(resposta.data))
.catch(e => console.log(e));

function carregaElementosNapagina(json){
    const table = document.createElement('table');
    for(let pessoa of json){
        const tr = document.createElement('tr');
        
        let td = document.createElement('td');
        td.innerHTML += pessoa.nome;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML += pessoa.idade;
        tr.appendChild(td);

        // td = document.createElement('td');
        // td.innerHTML += pessoa.salario;
        // tr.appendChild(td);
        // console.log(pessoa.nome);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}