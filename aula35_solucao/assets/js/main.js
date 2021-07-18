const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    console.log(elementos[i]);
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag); //cria o elemento html
    // tagCriada.innerHTML = texto;
    // tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto); //cria area de texto no elemento html

    tagCriada.appendChild(textoCriado); //adiciona o texto no elemento html
    div.appendChild(tagCriada);
}

container.appendChild(div);