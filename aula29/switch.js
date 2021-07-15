const data = new Date();
const diaSemana = data.getDay();
console.log(diaSemana);
let diaSemanaTexto;
if(diaSemana === 0){
    diaSemana = 'Domingo';
}else if(diaSemana === 1){
    diaSemanaTexto = 'Segunda feira';
}else if(diaSemana === 2){
    diaSemanaTexto = 'Terça feira';
}else if(diaSemana === 3){
    diaSemanaTexto = 'Quarta feira';
}else if(diaSemana === 4){
    diaSemanaTexto = 'Quinta feira';
}else if(diaSemana === 5){
    diaSemanaTexto = 'Sexta feira';
}else if(diaSemana === 6){
    diaSemanaTexto = 'Sabado';
}
console.log(diaSemanaTexto);


//faz a mesma coisa dos ifs
switch (diaSemana){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta feira';
        break;  
    case 5:
        diaSemanaTexto = 'Sexta feira';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;
    default:
        diaSemanaTexto = '';                             
}
console.log(diaSemanaTexto);


function getDiaSemanaTexto(diaSemana){
    switch (diaSemana) {
        case 0:
            diaSemana = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            return diaSemanaTexto;
    }
}
console.log(getDiaSemanaTexto(diaSemana));