const h1 = document.querySelector('.container h1');
const data = new Date();

// function getDiaSemanaTexto(diaSemana){
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemana = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabado';
//             return diaSemanaTexto;
//         default:
//             return diaSemanaTexto;
//     }
// }

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 
        'sexta-feira', 'sabado'];
    return diaSemanaTexto[diaSemana];    
}

function getNomeMes(numeroMes) {
    let mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
                'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return mes[numeroMes];
}

// function getNomeMes(numeroMes) {
//     let mes;
//     switch (numeroMes) {
//         case 0:
//             mes = 'janeiro';
//             return mes;
//         case 1:
//             mes = 'fevereiro';
//             return mes;
//         case 2:
//             mes = 'março';
//             return mes;
//         case 3:
//             mes = 'abril';
//             return mes;
//         case 4:
//             mes = 'maio';
//             return mes;
//         case 5:
//             mes = 'junho';
//             return mes;
//         case 6:
//             mes = 'julho';
//             return mes;
//         case 7:
//             mes = 'agosto';
//             return mes;
//         case 8:
//             mes = 'setembro';
//             return mes;
//         case 9:
//             mes = 'outubro';
//             return mes;
//         case 10:
//             mes = 'novembro';
//             return mes;
//         case 11:
//             mes = 'dezembro';
//             return mes;
//     }
// }

function zeroAesquerda(num){
    return num >= 10 ? num : `0${num}`;
 }

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}`
    + `<br>${zeroAesquerda(data.getHours())}:${zeroAesquerda(data.getMinutes())}`)
}

h1.innerHTML += criaData(data);


//forma mais simples
// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML += data.toLocaleString('pt-BR', {
//     dateStyle: 'full',
//     timeStyle: 'short'
// });