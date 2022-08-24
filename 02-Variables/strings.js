//06. Utiliza un nuevo metodo de string e imprimelo en consola
var str = 'Apple, Banana, Kiwi';
var str2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
console.log(str.slice(7, 13));
console.log(str.replace('Apple','Cherry'));
console.log(str2.split('.'));
console.log(str2.split('/'));
console.log(str2.split(''));

//07. concatenar 2 strings, ``, .concat(), + 
var nombre = 'Jame';
var apellidoPaterno = 'Hernandez';
var apellidoMaterno = 'Ortiz';

console.log(nombre.concat(' ',apellidoPaterno,' ',apellidoMaterno));
console.log(`Hola estoy concatenando mi nombre: ${nombre} ${apellidoPaterno} ${apellidoMaterno}`);

var lorem = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'

var resultadoDelIndexOf = lorem.indexOf('Extremes');

console.log(lorem.charAt(resultadoDelIndexOf));
console.log(lorem.substr(resultadoDelIndexOf, 7));

var resultadoDelSlice = lorem.slice(0,lorem.indexOf('Extremes'));
console.log(resultadoDelSlice);