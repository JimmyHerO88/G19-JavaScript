const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;

const WIN = 'Ganaste';
const LOSE = 'Perdiste';
const DRAW = 'Empataste';

function iniciarJuego(opcionDelUsuario){
    //promt (opcion del usuario)
    //const opcionDelUsuario = prompt("Elige una opción: 1.-Piedra, 2.-Papel, 3.-Tijeras");
    const mensaje = validarJuego(opcionDelUsuario);
    alert(mensaje);
}

function validarJuego(opcion){
    let resultado;
    let mensajePC;
    let opcioRandom = Math.floor(Math.random() * 3) + 1;
    let div = document.getElementById('opcioRandom');

    if(opcioRandom === PIEDRA){
        mensajePC = 'Piedra';
    }else if(opcioRandom === PAPEL){
        mensajePC = 'Papel';
    }else if(opcioRandom === TIJERA){
        mensajePC = 'Tijera';
    }
    div.innerHTML = mensajePC;

    switch(opcion){
        
        case PIEDRA:
            if(opcioRandom === TIJERA){
                resultado = WIN;
            }else if(opcioRandom === PAPEL){
                resultado = LOSE;
            }else{
                resultado = DRAW;
            }
        break;
        case PAPEL:
            if(opcioRandom === PIEDRA){
                resultado = WIN;
            }else if(opcioRandom === TIJERA){
                resultado = LOSE;
            }else{
                resultado = DRAW;
            }
        break;
        case TIJERA:
            if(opcioRandom === PAPEL){
                resultado = WIN;
            }else if(opcioRandom === PIEDRA){
                resultado = LOSE;
            }else{
                resultado = DRAW;
            }
        break;
        default:
            resultado = LOSE;
        break;
    }

    return resultado;
}