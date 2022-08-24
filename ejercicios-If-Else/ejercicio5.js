let num1 = prompt('Digita el primer número');
let num2 = prompt('Digita el segundo número');

if(!isNaN(num1) && num1 != null && num1 !='' && !isNaN(num2) && num2 != null && num2 !=''){

    num1 = Number(num1);
    num2 = Number(num2);

    if(num1 > num2){
        document.write(`<h1>${num1} es mayor que ${num2}</h1>`);
    }else{
        document.write(`<h1>${num2} es mayor que ${num1}</h1>`);
    }
    
}else{
    alert('Solo puedes ingresar número');
}