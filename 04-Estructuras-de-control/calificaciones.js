//90-100 A
//70-89 B
//60-69 C
// 50-59 D
//0-49 F

//Cual es tu score
//Usar una estructura de control condicional para saber que letra corresponde a la calificacion
var score = prompt('Escribe tu score');
var calificacion;

if(score < 50){
    alert('Obtiviste una F');
    calificacion = 'F';
}else if(score >= 50 && score <60){
    alert('Obtiviste una D');
    calificacion = 'D';
}else if(score >= 60 && score <70){
    alert('Obtiviste una C');
    calificacion = 'C';
}else if(score >= 70 && score <90){
    alert('Obtiviste una B');
    calificacion = 'B';
}else if(score >= 90 && score <= 100){
    alert('Obtiviste una A');
    calificacion = 'A';
}else{
    alert('El score que ingresaste no es válido, intenta nuevamente');
}

document.write(`Obtuviste una ${calificacion}`);