function formataMes(mesAtual) {
    switch (mesAtual) {
        case 0:
            mes = 'janeiro';
            return mes;
        case 1:
            mes = 'fevereiro';
            return mes;
        case 2:
            mes = 'março';
            return mes;
        case 3:
            mes = 'abril';
            return mes;
        case 4:
            mes = 'maio';
            return mes;
        case 5:
            mes = 'junho';
            return mes;
        case 6:
            mes = 'julho';
            return mes;
        case 7:
            mes = 'agosto';
            return mes;
        case 8:
            mes = 'setembro';
            return mes;
        case 9:
            mes = 'outubro';
            return mes;
        case 10:
            mes = 'novembro';
            return mes;
        case 11:
            mes = 'dezembro';
            return mes;
    }
}

function formatDay(diaAtual) {
    switch (diaAtual) {
        case 0:
            dia = 'domingo';
            return dia;
        case 1:
            dia = 'segunda-feira';
            return dia;
        case 2:
            dia = 'terça-feira';
            return dia;
        case 3:
            dia = 'quarta-feira';
            return dia;
        case 4:
            dia = 'quinta-feira';
            return dia;
        case 5:
            dia = 'sexta-feira';
            return dia;
        case 6:
            dia = 'sabado';
            return dia;
    }
}

function getAtualDate() {
    const data = new Date();
    const diaSemana = data.getDay(); //range de 0 a 6
    const dia_da_semana = formatDay(diaSemana);
    console.log(dia_da_semana);
    const diaAtual = data.getDate();
    const mesAtual = data.getMonth(); //range de 0 a 11
    const mes = formataMes(mesAtual);
    console.log(mes);
    const anoAtual = data.getFullYear();
    return {
        dia_da_semana:dia_da_semana,
        diaAtual: diaAtual,
        mesAtual: mes,
        anoAtual: anoAtual
    };
}

function zeroAesquerda(num){
    return num >= 10 ? num : `0${num}`;
 }

function getHoraAtual(){
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    return {
        hora: hora,
        minutos: minutos
    };
}

function formatDataText(){
    const data = getAtualDate();
    const diaSemana = data['dia_da_semana'];
    const diaAtual = data['diaAtual'];
    const mesAtual = data['mesAtual'];
    const anoAtual = data['anoAtual'];
    const text = `${diaSemana}, ${diaAtual} de ${mesAtual} de ${anoAtual}`;
    return text
}

function formatHoraText(){
    const data = getHoraAtual();
    const hora = data['hora'];
    const minutos = data['minutos'];
    const text = `<br><br>${zeroAesquerda(hora)}:${zeroAesquerda(minutos)}`;
    return text;
}

function parseH1(){
    const h1 = document.querySelector('#data')
    h1.innerHTML += formatDataText();
    h1.innerHTML += formatHoraText();
}

parseH1();
