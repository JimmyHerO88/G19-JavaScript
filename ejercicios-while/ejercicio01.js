var num = Number(prompt('Ingresa un número'));
var contador = 1;
var acumulador;
var multiplos5 = [];

while(contador <= num){
    if(contador % 5 == 0){
       acumulador= acumulador +1;      
        multiplos5.push(num);
    }
    contador = contador + 1;
}
document.write(`Números multiplos de ${multiplos5.join(', ')} son: ${acumulador}`);