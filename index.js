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

class videojuego{

    constructor(precio){

    this.precio = precio;

    }

    preciofinal(){

        let iva = this.precio * 0.21;
        return this.precio + iva;

    }
}

primera();

function primera() {
  let usuario = prompt("Ingrese su nombre de usuario");
  let pass = prompt("Ingrese su Contraseña");

  let confirmusuario = usuario;
  let confirmpass = pass;

  for (let i = 0; i <= 2; i++) {
    let usuario2 = prompt("Confirme su Usuario");
    let pass2 = prompt("Confirmar su Contraseña");

    let j = 3;

    if (confirmusuario === usuario2 && confirmpass === pass2) {
      alert("Bienvenido " + usuario2 + " Disfrute sus compras.");
      cof = true;
      break;
    } else {
      alert("Usuario o Contraseña incorrecta, tiene: " + (j - 1) + " intentos");
    }
  }
  return cof;
}

if (cof == true) {
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
        console.log("Forza Horizon 4: ARS$ 3,599");
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
          } else if (eleccion3 == "Forza Horizon 4") {
            conthorizon = conthorizon + 1;
            array2 = "Forza Horizon 4";
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
}

let importeiva = new videojuego(totalC);

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
