const productos = [
  { nombre: "Mochila", precio: 5000},
  { nombre: "Bolso", precio: 6000},
  { nombre: "Riñonera", precio: 2000},
  { nombre: "Cartuchera", precio: 1000},
  { nombre: "Cartera", precio: 3500},
  { nombre: "Monedero", precio: 500},
];

let carrito =[]

let seleccion = prompt("Hola, Desea ingresar a nuestra tienda?")

while(seleccion != "si" && seleccion != "no"){
  alert("Ingrese una respuesta 'si' o 'no'")
  seleccion = prompt("Hola desea comprar algo Si o No")
}

if(seleccion == "si"){
  alert("A continuación la lista de nuestros productos:")
  let todoslosproductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosproductos.join(" - "))
}else if (seleccion = "no"){
  alert("Gracias pro Visitarnos")
}

while(seleccion != "no"){
  let producto = prompt("Agregue productos a su carrito")
  let precio = 0

  if(producto == "mochila" || producto == "bolso" || producto == "riñonera" || producto == "cartuchera"
  || producto == "cartera" || producto == "monedero"){
    switch (producto){
      case "mochila":
        precio = 5000;
        break;
      case "bolso":
        precio = 6000;
        break;
      case "riñonera":
        precio = 2000;
        break;
      case "cartuchera":
        precio = 1000;
        break;
      case "cartera":
        precio = 3500;
        break;
      case "monedero":
        precio = 500;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuanto desea comprar"))

    carrito.push({producto , unidades , precio})
    console.log(carrito)
  }else{
    alert("No vendemos dicho producto")
  }

  seleccion = prompt("Desea comprar algo más??")

  while(seleccion === "no"){
    alert("Gracias por su compra!! Hasta la proxima!!")
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
  break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagra por su compra es : ${total}`)



