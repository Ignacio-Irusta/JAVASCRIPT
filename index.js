let arrays = [];
let contred = 0;
let contcall = 0;
let contcsgo = 0;
let contrust = 0;
let contforest = 0;
let contday = 0;
let contfifa = 0;
let contnba = 0;
let conthorizon = 0;
let totalC = 0;
let totalJ = 0;
let cof;
let usuarioGlobal = "Nacho";
let passGlobal = 123;

class videojuego{

    constructor(precio){

    this.precio = precio;

    }

    preciofinal(){

        let iva = this.precio * 0.21;
        return this.precio + iva;

    }
}

function validar(){
    let usuario = document.getElementById("nombreUsuario");
    let pass = document.getElementById("passUsuario");
    let mensaje = document.getElementById("mensaje");

    let input = document.getElementById("nombreUsuario");
    let input2 = document.getElementById("passUsuario");

    if( usuario.value == "Nacho" && pass.value == "123" ){

            console.log("Bienvenido/a a mi sistema");
            let parrafo = document.createElement("p");
            parrafo.innerHTML = "Bienvenido a GameARG Nacho";
            parrafo.style.color = "green";
            parrafo.style.fontSize = "40px";
        
            mensaje.appendChild(parrafo);



    }
    else{
        input.style.border = "1px solid #ff0000";
        input2.style.border = "1px solid #ff0000";
        console.log("Usuario incorrecto");

    }
    
    
    console.log( usuario.value);
    console.log(pass.value);


}

let boton = document.getElementsByClassName("btn");
for (botones of boton){
        botones.addEventListener("click" , function(){
});
}

//Tengo que hacer una seccion de imagenes y ponerle un boton para agregar a la lista de compras.
  console.log("Tenemos 3 generos de juegos: Shooter, Survival y Deportivo.");
  let catalogo = prompt(
      "Ingrese el genero para ver el catalogo o ESC para salir: "
  );

  segunda();

  function segunda() {
    while (catalogo != "ESC") {
      if (catalogo == "Shooter") {
        console.log("En la categoria de Shooter tenemos: ");
        console.log("Red Dead Redemption: ARS$ 2,499");
        console.log("Call of Duty: Black Ops 3: ARS$ 999");
        console.log("CS:GO: ARS$ 759");
        let eleccion = prompt(
          "Elija un juego para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero."
        );

        while (eleccion != "ESC") {
          if (eleccion == "Red Dead Redemption") {
            contred = contred + 1;
            array2 = "Red Dead Redemption";
            arrays.push(array2);
            totalC = totalC + 2499;
          } else if (eleccion == "Call of Duty: Black Ops 3") {
            contcall = contcall + 1;
            array2 = "Call of Duty: Black Ops 3";
            arrays.push(array2);
            totalC = totalC + 999;
          } else if (eleccion == "CS:GO") {
            contcsgo = contcsgo + 1;
            array2 = "CS:GO";
            arrays.push(array2);
            totalC = totalC + 759;
          } else {
            alert(
              "Ingrese el nombre del juego correctamente. (Importante, respete mayusculas)"
            );
          }
          eleccion = prompt(
            "Elija un juego para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero."
          );
        }
      } else if (catalogo == "Survival") {
        console.log("En la categoria de Survival tenemos: ");
        console.log("Rust: ARS$ 2,440");
        console.log("The Forest: ARS$ 224");
        console.log("Day Z: ARS$ 1,999");
        let eleccion2 = prompt(
          "Elija uno para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero."
        );

        while (eleccion2 != "ESC") {
          if (eleccion2 == "Rust") {
            contrust = contrust + 1;
            array2 = "Rust";
            arrays.push(array2);
            totalC = totalC + 2440;
          } else if (eleccion2 == "The Forest") {
            contforest = contforest + 1;
            array2 = "The Forest";
            arrays.push(array2);
            totalC = totalC + 224;
          } else if (eleccion2 == "Day Z") {
            contday = contday + 1;
            array2 = "Day Z";
            arrays.push(array2);
            totalC = totalC + 1999;
          } else {
            alert(
              "Ingrese el nombre del juego correctamente. (Importante, respete mayusculas)"
            );
          }
          eleccion2 = prompt(
            "Elija un juego para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero."
          );
        }
      } else if (catalogo == "Deportivo") {
        console.log("En la categoria de deportes tenemos: ");
        console.log("Fifa 2022: ARS$ 5,499");
        console.log("NBA2K 2022: ARS$ 4,019");
        console.log("Forza Horizon 5: ARS$ 3,599");
        let eleccion3 = prompt(
          "Elija uno para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero."
        );

        while (eleccion3 != "ESC") {
          if (eleccion3 == "Fifa 2022") {
            contfifa = contfifa + 1;
            array2 = "Fifa 2022";
            arrays.push(array2);
            totalC = totalC + 5499;
          } else if (eleccion3 == "NBA2k 2022") {
            contnba = contnba + 1;
            array2 = "NBA2k 2022";
            arrays.push(array2);
            totalC = totalC + 4019;
          } else if (eleccion3 == "Forza Horizon 5") {
            conthorizon = conthorizon + 1;
            array2 = "Forza Horizon 5";
            arrays.push(array2);
            totalC = totalC + 3599;
          } else {
            alert(
              "Ingrese el nombre del juego correctamente. (Importante, respete mayusculas)"
            );
          }
          eleccion3 = prompt(
            "Elija un juego para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero."
          );
        }
      } else {
        alert("Ingreso mal la catergoria");
      }
      catalogo = prompt(
        "Ingrese el genero para ver el catalogo o ESC para salir: "
      );
    }
  }

let importeiva = new videojuego(totalC);


//tengo que usar document para que me muestre los resultados entre otras cosas.

let botonesCompra = document.querySelectorAll(".botonCompra");
let carrito = [];



for( let boton of botonesCompra){

    boton.addEventListener("click" , agregarCarrito);

}


console.log(botonesCompra);



function agregarCarrito(e){

    console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let titulo = padre.querySelector("h5").textContent;
    let parrafo = padre.querySelector("p").textContent;
    let imagen = padre.querySelector("img").src;


    let producto = {
        nombre: titulo,
        desc:parrafo,
        img: imagen
    };


    carrito.push(producto)
    console.log(padre);
    console.log(titulo);

}

tercera();

function tercera() {
  totalJ =
    contcall +
    contcsgo +
    contday +
    contfifa +
    contforest +
    conthorizon +
    contnba +
    contred +
    contrust;
  console.log("Le informamos que la cantidad de juegos en su carrito es " + totalJ);
  console.log("Los juegos en su carritos son los siguientes: " + arrays.sort());
  console.log("El importe a pagar mas el IVA(21%) es: " + importeiva.preciofinal());
  console.log("Gracias por su compra.");
}
