//recorrer el array y transformarlo 
var tecnologiasWeb = [
    'html',
    'css',
    'javascript',
    'react',
    'nodejs',
    'angular',
    'vue',
  ];

  var  MERN = ['mongodb', 'express', 'react', 'nodejs'];

  //Recorrer el array y transformarlo
  //1- para convertirlo a mayusculas
  //2- para convertirlo a minisculas
  //3- para cortar la primera letra
  //4-para hacer la primera letra mayuscula

for(let i = 0; i < tecnologiasWeb.length; i++){
    console.log(tecnologiasWeb[i].toUpperCase());
}

for(let i = 0; i < tecnologiasWeb.length; i++){
    console.log(tecnologiasWeb[i].toLowerCase());
}

for(let i = 0; i < tecnologiasWeb.length; i++){
    console.log(tecnologiasWeb[i].charAt(0));
}

for(let i = 0; i < tecnologiasWeb.length; i++){
    var string = tecnologiasWeb[i];
    var primeraLetra = string.charAt(0).toUpperCase();
    var restoString = string.slice(1);
    console.log(primeraLetra + restoString);
}
  
  //Extra validar si el stack mern esta dentro de nuestro array (includes)