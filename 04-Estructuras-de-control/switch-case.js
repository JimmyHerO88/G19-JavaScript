var colorFavorito = prompt('Elige tu color favortio');

switch(colorFavorito){
    case 'azul':
        //instrucciones
        console.log('Te gustan los pitufos');
        break;

    case 'gris':
        console.log('Te gustan los días nucblados');
        break;

    case 'verde':
        console.log('Te gusta la naturaleza');
        break;
    default:
        console.log('No te gusta ningun color frío');
}