const numeros = [5, 1, 2, 32, 69, 87, 45, 6, 0, 3, 4, 7, 80, 74];

//Retorne a soma de todos os pares
//-> filtar pares
//-> dobrar valores
//-> reduzir (somar tudo)

const numerosPares = numeros.filter(valor => valor % 2 === 0);
console.log(numerosPares);
const paresDobrados = numerosPares.map(valor => valor * 2);
console.log(paresDobrados);
const soma = paresDobrados.reduce((acumulador, valor) => acumulador += valor, 0)
console.log(soma);

// ###########################################################################################
const numerosPares2 = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador += valor, 0)
console.log(numerosPares2)