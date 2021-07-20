const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){ //verifica se a tecla enter foi pressionada
        // console.log('ENTER pressisonado');
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus(); //foca o cursor de texto no input
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    // console.log(liTarefas);
    const listaDeTarefas = [];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim(); //.trim() -- remove espaço em branco apos replace
        // console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    } 
    const tarefasJSON = JSON.stringify(listaDeTarefas); //converte array para string JSON
    // console.log(listaDeTarefas);
    // console.log(tarefasJSON);
    localStorage.setItem('tarefas', tarefasJSON); //so pode armazenar strings JSON
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    // console.log(tarefas);
    const listaDeTarefas = JSON.parse(tarefas); //converte JSON para array
    // console.log(listaDeTarefas);
    for(let tarefa of  listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
