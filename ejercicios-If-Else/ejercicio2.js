const num = prompt("Digita un número para saber si es divisible entre 2.");
let residuo;

if(!isNaN(num) && num != null && num != ""){
    residuo = num % 2;
    if(residuo == 0){
        alert(`${num} Si es divisible entre 2`);
    }else{
        alert(`${num} No es divisible entre 2`);
    }
}else{
    alert('Para esta operación sólo puedes ingresar números');
}