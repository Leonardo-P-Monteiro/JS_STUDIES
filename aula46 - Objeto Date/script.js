// const data = new Date(2025, 10, 27);
const data = new Date()


console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Os meses são trazidos na ordem de 0 à 11.
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());
console.log('Dia da Semana', data.getDay());


console.log('=======================================')

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`;
};

function formatDate (date) {
    let day = zeroLeft(date.getDate());
    let month = zeroLeft(date.getMonth() + 1);
    let year = date.getFullYear();
    let hour = zeroLeft(date.getHours());
    let minutes = zeroLeft(date.getMinutes());
    let seconds = zeroLeft(date.getSeconds());
    let miliseconds = zeroLeft(date.getMilliseconds())

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}:${miliseconds}`
};


dateNow = new Date();
dateBrasil = formatDate(dateNow);

console.log(dateBrasil);