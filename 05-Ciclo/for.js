//for( variable inicializada; condicion de la variable; incrementar o decrementar el contador){}

var numero = -10;

for(let contador = 0; contador >= numero; contador--){
    console.log(contador);
}

////////////////////////////////////
var tecnologiasWeb = [  "html",
                        "CSS",
                        "javascript",
                        "react",
                        "nodeJS",
                        "Angular"];

for(let i = 0; i < tecnologiasWeb.length; i++){
    console.log(i, tecnologiasWeb[i].toUpperCase());
}

////////////////////////////////
//declarar un array llamado transacciones y asignale valores numéricos consecutivos
//recorre el array con un ciclo para sumar todos los valores del array


var transacciones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var suma = 0;

for(let i = 0; i < transacciones.length; i ++){
    //suma = suma + transacciones[i];
    suma += transacciones[i];
} 

console.log(suma);