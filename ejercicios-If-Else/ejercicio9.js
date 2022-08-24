let topping1 = 'OREO';
let precioTop1 = 10;
let topping2 = 'KITKAT';
let precioTop2 = 15;
let topping3 = 'BROWNIE';
let precioTop3 = 20;

let precioHelado = 50;

let toppingSeleccionado = prompt(`¡Bienvenido!  Elige el topping de tu preferencia, puedes elegir entre los siguientes sabores: ${topping1}, ${topping2}, ${topping3}`);
toppingSeleccionado = toppingSeleccionado.toUpperCase();

if(toppingSeleccionado == topping1){
    document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Gracias por tu compra</h1>
                    <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Total a pagar: $ ${Number(precioHelado + precioTop1)}.00 MXN</h2>
                    <img style="width: 500px;" src="img/oreo.png">`);
}
if(toppingSeleccionado == topping2){
    document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Gracias por tu compra</h1>
                    <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Total a pagar: $ ${Number(precioHelado + precioTop2)}.00 MXN</h2>
                    <img style="width: 500px;" src="img/kitkat.png">`);
}
if(toppingSeleccionado == topping3){
    document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Gracias por tu compra</h1>
                    <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Total a pagar: $ ${Number(precioHelado + precioTop3)}.00 MXN</h2>
                    <img style="width: 500px;" src="img/brownie.png">`);
}
if(toppingSeleccionado != topping1 && toppingSeleccionado != topping2 && toppingSeleccionado != topping3){
    alert('No tenemos este topping, lo sentimos');
    document.write(`<h1 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 80px;">Gracias por tu compra</h1>
                    <h2 style="color: #ffff; background-color: rgba(0, 0, 0, 0.507); font-size: 50px;">Total a pagar: $ ${Number(precioHelado)}.00 MXN</h2>
                    <img style="width: 500px;" src="img/helado.png">`);
}