let program1 = 'COURSE';
let precioProgram1 = 4999;
let duracion1 = 2;
let program2 = 'CARRERA';
let precioProgram2 = 3999;
let duracion2 = 6;
let program3 = 'MASTER';
let precioProgram3 = 2999;
let duracion3 = 12;
let tipoBeca;

let programaSeleccionado = prompt(`¡Bienvenido a DEV.F! Ingresa el programa de tu interés: ${program1}, ${program2}, ${program3}`);
programaSeleccionado = programaSeleccionado.toUpperCase();

if(programaSeleccionado != program1 && programaSeleccionado != program2 && programaSeleccionado != program3){
    alert('El programa que elegiste no está disponible o no existe');
}else if(programaSeleccionado == program1){ //**************************************************************Validación del Programa 1
    let beca = prompt('¿Cuentas con alguna beca? SI/NO');
    beca = beca.toUpperCase();

    if(beca == 'SI'){//************************************************************************************Validación de beca
        let tipoBeca = prompt('Ingresa la Beca que tiene Facebook, Google, Jesua');
        tipoBeca =  tipoBeca.toUpperCase();

        if(tipoBeca != 'FACEBOOK' && tipoBeca != 'GOOGLE' && tipoBeca != 'JESUA'){//***********************validación tipo de beca
            alert('El tipo de beca que ingresaste no es válido o la promoción ha terminado.');
        }else{
            switch(tipoBeca){
                case 'FACEBOOK':
                        precioProgram1 = Number(precioProgram1) - Number(precioProgram1 * 0.2);
                        precioProgram1 = Number(precioProgram1) * Number(duracion1);
    
                        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion1} meses.<br>  
                                        El total a pagar es de $ ${precioProgram1}.</p>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 20px;">Aplicando el descuento de tu beca de ${tipoBeca}.</p>`);
    
                break;
                case 'GOOGLE':
                        precioProgram1 = Number(precioProgram1) - Number(precioProgram1 * 0.15);
                        precioProgram1 = Number(precioProgram1) * Number(duracion1);
    
                        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion1} meses.<br>  
                                        El total a pagar es de $ ${precioProgram1}.</p>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 20px;">Aplicando el descuento de tu beca de ${tipoBeca}.</p>`);
    
                break;
                case 'JESUA':
                        precioProgram1 = Number(precioProgram1) - Number(precioProgram1 * 0.5);
                        precioProgram1 = Number(precioProgram1) * Number(duracion1);
    
                        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion1} meses.<br>  
                                        El total a pagar es de $ ${precioProgram1}.</p>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 20px;">Aplicando el descuento de tu beca de ${tipoBeca}.</p>`);
    
                break;
    
                default:  precioProgram1 = Number(precioProgram1) * Number(duracion1);
                          document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion1} meses.<br>  
                                        El total a pagar es de $ ${precioProgram1}.</p>`);
    
            }
        }  
        
    }else{
        precioProgram1 = Number(precioProgram1) * Number(duracion1);
        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion1} meses.<br>  
                        El total a pagar es de $ ${precioProgram1}.</p>`);
    }
}else if(programaSeleccionado == program2){ //**************************************************************Validación del Programa 2
    let beca = prompt('¿Cuentas con alguna beca? SI/NO');
    beca = beca.toUpperCase();
    if(beca == 'SI'){//************************************************************************************Validación de beca
        let tipoBeca = prompt('Ingresa la Beca que tiene Facebook, Google, Jesua');
        tipoBeca =  tipoBeca.toUpperCase();

        if(tipoBeca != 'FACEBOOK' && tipoBeca != 'GOOGLE' && tipoBeca != 'JESUA'){//***********************validación tipo de beca
            alert('El tipo de beca que inf¿gresaste no es válido o la promoción ha terminado.');
        }else{
            switch(tipoBeca){
                case 'FACEBOOK':
                        precioProgram2 = Number(precioProgram2) - Number(precioProgram2 * 0.2);
                        precioProgram2 = Number(precioProgram2) * Number(duracion2);
    
                        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion2} meses.<br>  
                                        El total a pagar es de $ ${precioProgram2}.</p>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 20px;">Aplicando el descuento de tu beca de ${tipoBeca}.</p>`);
    
                break;
                case 'GOOGLE':
                        precioProgram2 = Number(precioProgram2) - Number(precioProgram2 * 0.15);
                        precioProgram2 = Number(precioProgram2) * Number(duracion2);
    
                        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion2} meses.<br>  
                                        El total a pagar es de $ ${precioProgram2}.</p>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 20px;">Aplicando el descuento de tu beca de ${tipoBeca}.</p>`);
    
                break;
                case 'JESUA':
                        precioProgram2 = Number(precioProgram2) - Number(precioProgram2 * 0.5);
                        precioProgram2 = Number(precioProgram2) * Number(duracion2);
    
                        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion2} meses.<br>  
                                        El total a pagar es de $ ${precioProgram2}.</p>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 20px;">Aplicando el descuento de tu beca de ${tipoBeca}.</p>`);
    
                break;
    
                default:  precioProgram2 = Number(precioProgram2) * Number(duracion2);
                          document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion2} meses.<br>  
                                        El total a pagar es de $ ${precioProgram2}.</p>`);
    
            }
        }  
        
    }else{
        precioProgram2 = Number(precioProgram2) * Number(duracion2);
        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion2} meses.<br>  
                        El total a pagar es de $ ${precioProgram2}.</p>`);
    }
}else if(programaSeleccionado == program3){ //**************************************************************Validación del Programa 3
    let beca = prompt('¿Cuentas con alguna beca? SI/NO');
    beca = beca.toUpperCase();
    if(beca == 'SI'){//************************************************************************************Validación de beca
        let tipoBeca = prompt('Ingresa la Beca que tiene Facebook, Google, Jesua');
        tipoBeca =  tipoBeca.toUpperCase();

        if(tipoBeca != 'FACEBOOK' && tipoBeca != 'GOOGLE' && tipoBeca != 'JESUA'){//***********************validación tipo de beca
            alert('El tipo de beca que inf¿gresaste no es válido o la promoción ha terminado.');
        }else{
            switch(tipoBeca){
                case 'FACEBOOK':
                        precioProgram3 = Number(precioProgram3) - Number(precioProgram3 * 0.2);
                        precioProgram3 = Number(precioProgram3) * Number(duracion3);
    
                        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion3} meses.<br>  
                                        El total a pagar es de $ ${precioProgram3}.</p>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 20px;">Aplicando el descuento de tu beca de ${tipoBeca}.</p>`);
    
                break;
                case 'GOOGLE':
                        precioProgram3 = Number(precioProgram3) - Number(precioProgram3 * 0.15);
                        precioProgram3 = Number(precioProgram3) * Number(duracion3);
    
                        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion3} meses.<br>  
                                        El total a pagar es de $ ${precioProgram3}.</p>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 20px;">Aplicando el descuento de tu beca de ${tipoBeca}.</p>`);
    
                break;
                case 'JESUA':
                        precioProgram3 = Number(precioProgram3) - Number(precioProgram3 * 0.5);
                        precioProgram3 = Number(precioProgram3) * Number(duracion3);
    
                        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion3} meses.<br>  
                                        El total a pagar es de $ ${precioProgram3}.</p>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 20px;">Aplicando el descuento de tu beca de ${tipoBeca}.</p>`);
    
                break;
    
                default:  precioProgram3 = precioProgram3 * duracion3;
                          document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion3} meses.<br>  
                                        El total a pagar es de $ ${precioProgram3}.</p>`);
    
            }
        }  
        
    }else{
        precioProgram3 = precioProgram3 * duracion3;
        document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Bienvenido a DEV.F<h1>
                        <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Elegiste el programa ${programaSeleccionado}</h2>
                        <p style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 30px;">Este curso tiene una duración de: ${duracion3} meses.<br>  
                        El total a pagar es de $ ${precioProgram3}.</p>`);
    }
}

