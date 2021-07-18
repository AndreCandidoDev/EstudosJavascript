const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container')
console.log(container);
for(let i = 0; i<elementos.length; i++){
    console.log(elementos[i]['tag']);
    console.log(elementos[i]['texto']);
    container.innerHTML += `<${elementos[i]['tag']}>${elementos[i]['texto']}</${elementos[i]['tag']}>`
}