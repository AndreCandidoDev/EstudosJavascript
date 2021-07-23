for (let i = 0; i <= 500; i+=100){
    console.log(`Linha ${i}`);
}
console.log('');
for (let i = 500; i >= 400; i-=10){
    console.log(`Linha ${i}`);
}
console.log('');
for (let i = 0; i <= 10; i++){
    if(i%2 === 0){
        console.log(i);
    }
}
console.log('');
for (let i = 0; i <= 10; i++){
    const par = i%2 === 0;
    console.log(i, par);
}
console.log('');
for (let i = 0; i <= 10; i++){
    const par = i%2 === 0 ? 'par':'impar';
    console.log(i, par);
}
console.log('');
const frutas = ['maça', 'pera', 'uva']
console.log(frutas[0], frutas[1], frutas[2]);
console.log(frutas.length)
for(let i = 0; i < frutas.length; i++){
    // console.log(i); //indice
    console.log(`Indice ${i}`,frutas[i]); //elementos a partir do indice
}