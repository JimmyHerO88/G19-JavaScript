let calificacion = prompt('Ingresa tu calificación');

if(calificacion < 0  || calificacion >10){
    alert('La calificación que ingresaste no es válida, sólo se aceptan numeros del 0 al 10, intenta nuevamente');
}else{
    if(calificacion < 6){
        document.write(`<h1>Calificación obtenida</h1>
                        <p style="font-size:100px;"><strong>${calificacion}</strong></p>
                        <h2 style="color:red;">¡Lo sentimos estás REPROBADO!</h2>`);
    }else if(calificacion >= 6 && calificacion < 9){
        document.write(`<h1>Calificación obtenida</h1>
                        <p style="font-size:100px;"><strong>${calificacion}</strong></p>
                        <h2 style="color:black;">¡Tu desempeño fue REGULAR!</h2>`);
    }else if(calificacion == 9){
        document.write(`<h1>Calificación obtenida</h1>
                        <p style="font-size:100px;"><strong>${calificacion}</strong></p>
                        <h2 style="color:blue;">¡Tu desempeño fue muy bueno!</h2>`);
    }else if(calificacion == 10){
        document.write(`<h1>Calificación obtenida</h1>
                        <p style="font-size:100px;"><strong>${calificacion}</strong></p>
                        <h2 style="color:green;">¡Felicidades estuviste EXCELENTE!</h2>`);
    }
}