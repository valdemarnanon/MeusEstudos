// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60* 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // (0) 01/01/1970 Timestamp unix ou época unix'
// const data = new Date(2019, 20); // a, m, d, h, M, s, ms;
// const data = new Date(1717535488159);
// console.log('Dia', data.getDate())
// console.log('Mes', data.getMonth() + 1) // Mes começa do zero
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Min', data.getMinutes())
// console.log('Seg', data.getSeconds())
// console.log('Ms', data.getMilliseconds())
// console.log('Dia semana', data.getDay()) // 0 - domingo, 6 - sabado
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);