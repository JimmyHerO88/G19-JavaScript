let dia = prompt('Ingresa el día de la semana');

dia = dia.toUpperCase();

/* switch(dia){
    case 'LUNES':
        document.write('<img src="img/lunes.jpg" alt="Lunes" width="50%">');
    break;
    case 'VIERNES':
        document.write('<img src="img/viernes.jpg" alt="Viernes" width="50%">');
    break;
    case 'SABADO':
        document.write('<img src="img/fin.jpg" alt="Sábado" width="50%">');
    break;
    case 'DOMINGO':
        document.write('<img src="img/fin.jpg" alt="Domingo" width="50%">');
    break;

    default: document.write('<img src="img/mitad.png" alt="Ombligo" width="50%">');
} */

if(dia == 'LUNES'){
    document.write('<img src="img/lunes.jpg" alt="Lunes" width="50%">');
}else if(dia == 'VIERNES'){
    document.write('<img src="img/viernes.jpg" alt="Viernes" width="50%">');
}else if(dia == 'SABADO' || dia == 'DOMINGO'){
    document.write('<img src="img/fin.jpg" alt="Sábado" width="50%">');
}else{
    document.write('<img src="img/mitad.png" alt="Ombligo" width="50%">');
}