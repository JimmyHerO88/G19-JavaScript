var respuesta = prompt("¿Eres bellísimo/a?, responde Si o No");
respuesta = respuesta.toUpperCase();
if(respuesta === 'SI'){
    document.write("<h1>¡Ciertamente!</h1><br><img src='img/bellisimo.jpg' alt='bellisimo'>");
}else if(respuesta === 'NO'){
    document.write("<img src='img/noTeCreo.jpg' alt='noTeCreo'>");
}else{
    alert('¡Respuesta no válida!');
}