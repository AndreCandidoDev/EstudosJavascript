document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

// fetch api
// usando a forma de promises then/catch
// function carregaPagina(el){
//     const href = el.getAttribute('href');

//     fetch(href) //busca o href da pagina
//     .then(response => {
//         if(response.status !== 200) throw new Error('Erro 404');
//         return response.text()
//     }) //pega o raw text da pagina buscada 
//     .then(html => carregaResultado(html)) //passa para o carregaResultado o raw text
//     .catch(e => console.error(e));
// };


// usando async/await
async function carregaPagina(el){
    const href = el.getAttribute('href');

    try{
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('Erro 404');
        
        const html = await response.text();
        carregaResultado(html);
    } catch(e){
        console.log(e);
    }
}


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};



//nao manda os dados 'prontos' necessitando conversão
// fetch('pagina1.html') //ao carregar a requisição ira exebir o raw text da pagina1 no console
// .then(resposta => {
//     if(resposta.status !== 200) throw new Error('Erro 404');
//     return resposta.text(); //retorna outra promise
// })
// .then(html => console.log(html))
// .catch(e => console.error(e));