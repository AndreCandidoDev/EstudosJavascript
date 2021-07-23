//Escreva uma função chamada ePaisagem que recebe dois argumentos de uma imagem 
//altura e largura (number)
//Retorne true se a imagem estiver no modo paisagem

// function ePaisagem(altura, largura){
//     return largura > altura;
// }

const ePaisagem = (altura, largura) => largura>altura ? true : false

const ePaisagem2 = (altura, largura) => largura > altura;

console.log(ePaisagem(10,20));
console.log(ePaisagem(20,10));

console.log(ePaisagem2(10,20))
console.log(ePaisagem2(20,10))