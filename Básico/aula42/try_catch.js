// try{
//     console.log(naoExite);
// }catch(err){
//     console.log('naoExiste nao foi declarada');
//     console.log(err);
// }


function soma(x, y){
    if(typeof x !=='number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser numeros.');
    }
    return x+y;
}

try{
    console.log(soma(1,1));
    console.log(soma('a'+1));
}catch(error){
    // console.log(error);
    console.log('Error')
}