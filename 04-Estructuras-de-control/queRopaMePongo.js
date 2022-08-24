// Ropas
var ropaHombre1 = 'Playera';
var ropaHombre2 = 'Short';
var ropaHombre3 = 'Tennis';
var ropaHombre4 = 'Gorra';

var ropaMujer1 = 'Blusa';
var ropaMujer2 = 'Falda';
var ropaMujer3 = 'Sandalias';
var ropaMujer4 = 'Bolsa';

//prompt
var valorDeEntrada = prompt('¿De qué te quieres vestir?');
var colorFavorito = prompt('¿Cuál es tu color favorito?');

//Conjunto

if(valorDeEntrada === 'Hombre'){
    if(colorFavorito === 'azul'){
        alert(`${ropaHombre1} azul ${ropaHombre2} azul ${ropaHombre3} ${ropaHombre4}`);
    }else{
        alert(`${ropaHombre1} ${ropaHombre2} ${ropaHombre3} ${ropaHombre4}`);
    }   
}else if(valorDeEntrada === 'Mujer'){
    if(colorFavorito === 'rosa'){
        alert(`${ropaMujer1} rosa ${ropaMujer2} rosa ${ropaMujer3} ${ropaMujer4}`);
    }else{
        alert(`${ropaMujer1} ${ropaMujer2} ${ropaMujer3} ${ropaMujer4}`);
    }
    
}else{
    alert('No es un valor Válido');
}
