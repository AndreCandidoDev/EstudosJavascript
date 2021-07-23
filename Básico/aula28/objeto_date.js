const data = new Date(0); //timestamp = 0 equivale a 01/01/1970 --- marco zero unix 
console.log(data.toString()); //como o fuso horario é GMT -3: exibe 1969 as 21h

const tresHoras = 60*60*3*1000;
const data1 = new Date(tresHoras);
console.log(data1.toString());

const umDia = 60*60*24*1000;
const data2 = new Date(tresHoras+umDia);
console.log(data2.toString());

//ano, mes, dia, hora, minuto, segundo, milisegundo
const data3 = new Date(2021, 0, 20, 15, 30, 15, 999); //pega 20/01/2021 as 15:30:15
console.log(data3.toString());

const data4 = new Date(); //pega a data atual;
console.log(data4.toString());

// const data5 = new Date('2021-02-20T20:30:50.550');
const data5 = new Date('2021-02-20 20:30:50');
console.log(data5.toString());
console.log('Dia: ', data5.getDate());
console.log('Mes: ', data5.getMonth()); //começa do zero
console.log('Ano: ', data5.getFullYear());
console.log('Horas: ', data5.getHours());
console.log('Minutos: ', data5.getMinutes());
console.log('Segundos: ', data5.getSeconds());
console.log('ms: ', data5.getUTCMilliseconds());
console.log('Dia semana: ', data5.getDay()); //exibe o numero equivalente ao dia da semana, 0 - domingo, 6 - sabado

console.log(Date.now()); //exibe o timestamp atual
time_atual = Date.now();
data6 = new Date(time_atual);
console.log(data6.toString());
console.log('Dia: ', data6.getDate());
console.log('Mes: ', data6.getMonth()); 
console.log('Ano: ', data6.getFullYear());
console.log('Horas: ', data6.getHours());
console.log('Minutos: ', data6.getMinutes());
console.log('Segundos: ', data6.getSeconds());
console.log('ms: ', data6.getUTCMilliseconds());
console.log('Dia semana: ', data6.getDay());

function zeroAesquerda(num){
   return num >= 10 ? num : `0${num}`;
}


function formataData(data){
    date = `${zeroAesquerda(data.getDate())}/${zeroAesquerda(data.getMonth()+1)}/${data.getFullYear()}`;
    horario = `${zeroAesquerda(data.getHours())}:${zeroAesquerda(data.getMinutes())}:${zeroAesquerda(data.getSeconds())}`;
    return `${date} ${horario}`;
}

data7 = new Date();
const dataBrasil = formataData(data7);
console.log(dataBrasil);