//Alcance global
//var algo = "algo";

//Alcance lobal
    //const foo = 'foo';//no se puede cambiar
    //let bar = 'bar';
/*
    
    {} -> bloque
    function(){} scope/alcance de funcion
*/

//01. declara una variable
var miVariable;

//02. asigna un valor a una variable
var miVariable2 = 0;

//03. declara y asigna una variable por cada tipo de dato
var string = 'Hola Mundo';
var number = 25;
var nulo = null;
var noDefinido = undefined;
var boleano = true;
var symbol = Symbol('gato');
var miArreglo = [/* Aqui adentro van propiedades */];
var miObjeto = {/*Aqui adentro van comentarios*/};

//04. Usa Typeof para 3 de las variable de arriba
console.log(typeof string, typeof number, typeof miArreglo);

//05. Usa cada uno de estos metodos e imprimelo en consolatoLowerCase, toUpperCase, substr (métodos para opersr constring)
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.substring(0,5));

