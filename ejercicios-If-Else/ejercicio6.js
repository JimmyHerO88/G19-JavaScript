let num1 = prompt('Digita el primer número');
let num2 = prompt('Digita el segundo número');
let num3 = prompt('Digita el tercer número');

if(!isNaN(num1) && num1 != null && num1 !='' && !isNaN(num2) && num2 != null && num2 !='' && !isNaN(num3) && num3 != null && num3 !=''){
    
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    document.write(`<p><strong>El Primer número que ingresaste fue: ${num1}<br>
                    El Segundo número que ingresaste fue: ${num2}<br>
                    El Tercer número que ingresaste fue: ${num3}</strong></p>`);

    if(num1 == num2 && num1 == num3 ){
        document.write(`<h2>Todos los números son iguales</h2>`);
    }

    if(num1 > num2 && num1 > num3){
        document.write(`<h2>${num1} es el número mayor</h2>`);
    }else if(num2 > num1 && num2 > num3){
        document.write(`<h2>${num2} es el número mayor</h2>`);
    }else if(num3 > num1 && num3 > num2){
        document.write(`<h2>${num3} es el número mayor</h2>`);
    }

    if(num1 == num2){
        document.write(`<h3>${num1} es igual que ${num2}</h3>`);
    }else if(num1 == num3){
        document.write(`<h3>${num1} es igual que ${num3}</h3>`);
    }else if(num2 == num3){
        document.write(`<h3>${num2} es igual que ${num3}</h3>`);
    }

}else{
    alert('Solo puedes ingresar número');
}