function* geradora1(){
    //codigo qualquer
    yield 'valor 1';
    //codigo qualquer
    yield 'valor 2';
    //codigo qualquer
    yield 'valor 3';
}

const g1 = geradora1();
console.log(g1);
console.log(g1.next()); //primeira execução: { value: 'valor 1', done: false } -- done indica se o gerador ja acabou
console.log(g1.next().value); //segunda execução: manda o segundo valor
console.log(g1.next());
console.log(g1.next());

const g2 = geradora1();
for(let valor of g2){
    console.log(valor);
}

// ########################################################################
function* geradora2(){
    let i = 0;
    while (true){
        yield i;
        i++;
    }
}

const g3 = geradora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

// ########################################################################

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

// ##############################################################################

function* geradora5(){
    yield function(){
        console.log('y1');
    };
    
    // ...

    return function(){  //para e sai da função geradora
        console.log('return');
    }

    yield function(){
        console.log('y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();