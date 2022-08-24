///while
/* var contador = 1;

while(contador <= 6){
    console.log('#'.repeat(contador));
    contador++;
} */

var numero = prompt('Ingresa un numero');
var contador1 = 1;
if(!isNaN(numero) && numero != null && numero != ''){
    while(contador1 <= numero){
        document.write(`${contador1} + ${contador1} = ${contador1 + contador1} <br>`);
        contador1 ++;
    }
}else{
    alert('solo se permiten números');
}
