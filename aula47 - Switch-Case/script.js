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

const date = new Date();
let today = date.getDay();
const dayWeekString = getDayString(today)

console.log(dayWeekString)