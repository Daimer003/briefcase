const date = new Date();
const month = date.getMonth(); // Obtiene el número del mes actual (0-11)

let daysInMonth;

switch (month) {
    case 0:
        // Enero
        daysInMonth = 31;
        break;
    case 2:
        // Marzo
        daysInMonth = 31;
        break;
    case 4:
        // Mayo
        daysInMonth = 31;
        break;
    case 6:
        // Julio
        daysInMonth = 31;
        break;
    case 8:
        // Septiembre
        daysInMonth = 31;
        break;
    case 10: // Noviembre
        daysInMonth = 31;
        break;
    case 1: // Febrero
        daysInMonth = 29
        break;
    default:
        daysInMonth = 30;
}


export function calendar() {

    for (let i = 0; i < 12; i++) {
        const position = new Array(((daysInMonth: any) => daysInMonth))
        //console.log(position)
    }



}