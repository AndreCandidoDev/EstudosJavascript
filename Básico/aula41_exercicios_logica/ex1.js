// Escreva uma função que receba 2 numeros e retorne o maior deles

function maiorNumero(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

console.log(maiorNumero(10,8));
console.log(maiorNumero(10,80));

// ######################################################################
// function max(x,y){
//     if(x > y) return x;
//     return y;
// }


function max(x, y){
    return x > y ? x : y;
}

// const max2 = (x, y) => {
//     return x > y ? x : y;
// }

const max2 = (x, y) => x > y ? x : y;

console.log(max(10, 20));
console.log(max2(20, 89));