const num = prompt("Digita un número para averiguar si es par.");
let residuo;

if(!isNaN(num) && num != null && num != ""){
    residuo = num % 2;
    if(residuo == 0){
        alert(`${num} Si es un número Par`);
    }else{
        alert(`${num} No es un número Par`);
    }
}else{
    alert('Para esta operación sólo puedes ingresar números');
}