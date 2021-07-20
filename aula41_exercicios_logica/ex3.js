//Escreva uma função que recebe um numero e retorne o seguinte:
//Numero é divisivel por 3 = Fizz
//Numero é divisivel por 5 = Buzz
//Numero é divisivel por 3 e 5 = FizzBuzz
//Numero não é divisivel nem por 3 nem por 5 = retorna o proprio numero
//Checar se o numero é realmente um numero = retorna o próprio numero
//Use a função com numeros de 0 a 100

function verifica(num) {
    if (typeof (num) === 'number') {
        if (num >= 0 && num <= 100) {
            if (num % 3 === 0 && num % 5 == 0) {
                return 'FizzBuzz';
            } else if (num % 5 === 0) {
                return 'Buzz';
            } else if (num % 3 == 0) {
                return 'Fizz';
            } else {
                return num;
            }

        } else {
            return 'Number out of range';
        }
    } else {
        return num;
    }

}

console.log(verifica(30));
console.log(verifica(27));
console.log(verifica(20));
console.log(verifica(7));
console.log(verifica(200));
console.log(verifica('afs'));

// ############################################################################

function FizzBuzz(numero){
    if(typeof numero !== 'number') return numero;
    if (numero % 3 === 0 &&numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for(let i=0; i<=100; i++){
    console.log(i, FizzBuzz(i));
}