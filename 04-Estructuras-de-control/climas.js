//promt ? Que clima hay 

//switch case + alerts

var clima = prompt('¿Qué clima hay?');

switch (clima){
    case 'soleado':
        alert('Vamo a la playa');
        break;
    case 'frio':
        alert('Ponte sueter no te vayas a resfriar');
        break;
    case 'lluvioso':
        alert('¡Que tristeza!');
        break;
    case 'con viento':
        alert('Es hora de salir a volar cometas');
        break;
    default: alert('Tienes que salir más');
}