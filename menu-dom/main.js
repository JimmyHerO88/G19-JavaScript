// function hola(){
//     alert("Hola me has tocado");
// }


/* function saludo(){
    alert("HOLA ME HAS TOCADO");
}


const btn = document.querySelector('#btn');

/* EJECUTAR UNA FUNCION CON PROPIEDAD DE JS*/
//console.log(btn);
//btn.onclick = saludo; 

/*btn.addEventListener('click',function(){
    alert('Hola me has tocado con addEventListener');
}) */

const botones = document.querySelectorAll('.lista-menu button');



//console.log(botones);

function removeClass(){
    for(let i= 0; i<botones.length; i++){
        const botonActual = botones[i];
        botonActual.classList.remove('active');
    }
}

for(let i= 0; i<botones.length; i++){
    const botonActual = botones[i];
    //console.log(botonActual);
    botonActual.addEventListener('click', function(){
        removeClass();
        botonActual.className = 'active';
    })
}

const botonMenu = document.querySelector('#menu');
const menu = document.querySelector('.lista-menu');

botonMenu.addEventListener('click', function(){
    //menu.setAttribute('hidden', 'true');
    if(menu.hasAttribute('hidden')){
        botonMenu.textContent = 'Menu';
        menu.removeAttribute('hidden');
    }else{
        botonMenu.textContent = 'Ver opciones';
        menu.setAttribute('hidden', 'true');

    }
})