let vehiculo1 = 'COCHE';
let precioKilo1 = 0.2;
let vehiculo2 = 'MOTO';
let precioKilo2 = 0.1;
let vehiculo3 = 'AUTOBUS';
let precioKilo3 = 0.5;
let totalAPagar;

let vehiculoSeleccionado = prompt(`Ingres el tipo de Vehículo: ${vehiculo1}, ${vehiculo2}, ${vehiculo3}`);
vehiculoSeleccionado = vehiculoSeleccionado.toUpperCase();

if(vehiculoSeleccionado != vehiculo1 && vehiculoSeleccionado != vehiculo2 && vehiculoSeleccionado != vehiculo3){

    alert('El tipo de vehículo que ingresaste no está en nuestra base de datos, intenta nuevamente.');

}else if(vehiculoSeleccionado == vehiculo1){

    let kilometrosRecorridos = prompt('Ingresa los kilómetros recorridos');
    
    if(!isNaN(kilometrosRecorridos) && kilometrosRecorridos != null && kilometrosRecorridos != ''){

        let litrosConsumidos = prompt('Ingresa los litros consumidos');

        if(!isNaN(litrosConsumidos) && litrosConsumidos != null && litrosConsumidos != ''){

            if(litrosConsumidos >=0 && litrosConsumidos <= 100){

                totalAPagar = Number(precioKilo1) * Number(kilometrosRecorridos) + 5;

            }else if(litrosConsumidos > 100){

                totalAPagar = Number(precioKilo1) * Number(kilometrosRecorridos) + 10;

            }

            document.write(`<h1>Total a pagar: $ ${totalAPagar}. </h1>
                            <img src="img/coche.jpg">`);           

        }else{
        
            document.write(`Valor no válido, intentalo nuevamente.`);
        }

    }else{

        document.write(`Valor no válido, intentalo nuevamente.`);
    }
}else if(vehiculoSeleccionado == vehiculo2){

    let kilometrosRecorridos = prompt('Ingresa los kilómetros recorridos');
    
    if(!isNaN(kilometrosRecorridos) && kilometrosRecorridos != null && kilometrosRecorridos != ''){

        let litrosConsumidos = prompt('Ingresa los litros consumidos');

        if(!isNaN(litrosConsumidos) && litrosConsumidos != null && litrosConsumidos != ''){

            if(litrosConsumidos >=0 && litrosConsumidos <= 100){

                totalAPagar = Number(precioKilo2) * Number(kilometrosRecorridos) + 5;

            }else if(litrosConsumidos > 100){

                totalAPagar = Number(precioKilo2) * Number(kilometrosRecorridos) + 10;

            }

            document.write(`<h1>Total a pagar: $ ${totalAPagar}. </h1>
                            <img src="img/moto.jpg">`);           

        }else{
        
            document.write(`Valor no válido, intentalo nuevamente.`);
        }

    }else{

        document.write(`Valor no válido, intentalo nuevamente.`);
    }
}else if(vehiculoSeleccionado == vehiculo3){

    let kilometrosRecorridos = prompt('Ingresa los kilómetros recorridos');
    
    if(!isNaN(kilometrosRecorridos) && kilometrosRecorridos != null && kilometrosRecorridos != ''){

        let litrosConsumidos = prompt('Ingresa los litros consumidos');

        if(!isNaN(litrosConsumidos) && litrosConsumidos != null && litrosConsumidos != ''){

            if(litrosConsumidos >=0 && litrosConsumidos <= 100){

                totalAPagar = Number(precioKilo3) * Number(kilometrosRecorridos) + 5;

            }else if(litrosConsumidos > 100){

                totalAPagar = Number(precioKilo3) * Number(kilometrosRecorridos) + 10;

            }

            document.write(`<h1>Total a pagar: $ ${totalAPagar}. </h1>
                            <img src="img/autobus.jpg">`);           

        }else{
        
            document.write(`Valor no válido, intentalo nuevamente.`);
        }

    }else{

        document.write(`Valor no válido, intentalo nuevamente.`);
    }
}