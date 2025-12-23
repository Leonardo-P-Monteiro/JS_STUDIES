const h1 = document.querySelector('.container h1');
const date = new Date();

function getDayString (weekDay) {
    let weekDayText

    switch (weekDay) {
        case 0:
            weekDayText = 'Domingo';
            return weekDayText;
        case 1:
            weekDayText = 'Segunda';
            return weekDayText;
        case 2:
            weekDayText = 'Terça';
            return weekDayText;
        case 3:
            weekDayText = 'Quarta';
            return weekDayText;
        case 4:
            weekDayText = 'Quinta';
            return weekDayText;
        case 5:
            weekDayText = 'Sexta';
            return weekDayText;
        case 6:
            weekDayText = 'Sábado';
            return weekDayText;
        default:
            weekDayText = 'Indefinido';
            return weekDayText;
    };

};

function getMonthString (Monthnumb) {
    let MonthText

    switch (Monthnumb) {
        case 0:
            MonthText = 'janeiro';
            return MonthText;
        case 1:
            MonthText = 'fevereiro';
            return MonthText;
        case 2:
            MonthText = 'março';
            return MonthText;
        case 3:
            MonthText = 'abril';
            return MonthText;
        case 4:
            MonthText = 'maio';
            return MonthText;
        case 5:
            MonthText = 'junho';
            return MonthText;
        case 6:
            MonthText = 'julho';
            return MonthText;
        case 7:
            MonthText = 'agosto';
            return MonthText;
        case 8:
            MonthText = 'setembro';
            return MonthText;
        case 9:
            MonthText = 'outubro';
            return MonthText;
        case 10:
            MonthText = 'novembro';
            return MonthText;
        case 11:
            MonthText = 'dezembro';
            return MonthText;
    };

};

function createDate (date) {
    const dayWeek = date.getDay();
    const month = date.getMonth();

    const nameDay = getDayString(dayWeek);
    const nameMonth = getMonthString(month);

    function zeroLeft (num) {
            return num >= 10 ? num : `0${num}`;
        };

    return (`${nameDay}, ${date.getDate()} de ${nameMonth} de ` +
    `${date.getFullYear()} ${date.getHours()}:${zeroLeft(date.getMinutes())}`);
    
};

date.getMinutes()

h1.innerHTML = createDate(date)
