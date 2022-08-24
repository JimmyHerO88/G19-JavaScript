var num = prompt('Digita tu número de cliente');

if(!isNaN(num) && num != null && num != ''){
    if(num == 1000){
        document.write("<img src='img/felicidades.webp' alt='noTeCreo' width='800px' height='800px'>");
    }else{
        document.write("<img src='img/loSentimos.jpg' alt='noTeCreo' width='600px' height='600px'>");
    }
}else{
    alert('Sólo puedes ingresar números');
}