//switch case + alerts

var mesActual = prompt('¿Qué mes es?');

switch (mesActual){
    case 'Marzo':
    case 'Abril':
    case 'Mayo':
        alert('Es Primavera');
    break;

    case 'Septiembre':
    case 'Octubre':
    case 'Noviembre':
        alert('Es Otoño');
    break;

    case 'Diciembre':
    case 'Enero':
    case 'Febrero':
        alert('Es Invierno');
    break;

    case 'Junio':
    case 'Julio':
    case 'Agosto':
        alert('Es Verano');
    break;

    default: alert('No sabes ni en que mundo vives');
}