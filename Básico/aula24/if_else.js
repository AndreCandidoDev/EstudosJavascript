//if pode ser usado sozinho
//else deve ter um bloco if antes e deve ser unico na checagem
//o sistema pode ter infinitos else ifs nas checagens

const hora = 18;
if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
}else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
}else if(hora >= 18 && hora <=23){
    console.log('Boa noite');
}else{
    console.log('Ola');
}


const grana = true;
if (grana){
    console.log('Pode sair');
}else{
    console.log('Fique em casa');
}