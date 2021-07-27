const numeros = [5, 1, 2, 32, 69, 87, 45, 6, 0, 3, 4, 7, 80, 74];

// for(let i of numeros){
//     console.log(i);
// }


// numeros.forEach((valor, indice, array) => {
//     console.log(valor, indice, array);
//     console.log(array[indice]);
// })

//forEach faz a iteração sobre array apenas substituindo laços for

let total = 0
numeros.forEach(valor => total += valor);
console.log(total);