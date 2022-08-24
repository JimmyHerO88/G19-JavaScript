// si (condicion) {instrucciones}

var num1 = 45;
var num2 = 20;
var num3;

if(num1 < num2){
 console.log("Sí se cumple la condicion")   
}else{
    console.log("No se cumple la condicion");   
}

num3 = 45;

if(num1 < num2){
    console.log("Sí se cumple la primer condicion")   
   }else if(num1 === num3){
       console.log("Sí se cumple la segunda condicion");   
   }else{
        console.log("No se cumple la condicion");   
   }
//Ejemplo1
var mayorDeEsdad = 18;
var edad = 25;

if(edad >= mayorDeEsdad){
    console.log('Pasaste');
}

//Ejercicio1 Validar la suma de 2 numero sea mayor que 100;

var num1 = 50;
var num2 = 100;
var suma = num1+num2;

if(suma > 100){
    console.log("La suma si es mayor a 100");
}else{
    console.log("La suma es menor a 100");
}

//