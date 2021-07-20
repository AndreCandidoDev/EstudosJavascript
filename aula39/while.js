// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// i = 0;
// const nome = 'teste';
// while(i<nome.length){
//     console.log(nome[i]);
//     i++;
// }

function random(min, max){
    const r = Math.random()*(max- min) + min;
    return Math.floor(r);
}


const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

console.log('###############');

do{
    rand = random(min, max);
    console.log(rand);
}while(rand!==10);