/////////////////////////////////////

let urlclima = "http://api.openweathermap.org/data/2.5/weather?q=Cordoba&appid=bbf8893c6e8030e157bb633d11a66e17"


$('#bottonajax').click(function(){
  $.get( urlclima , function(respuesta){

    console.log(respuesta);
    
    let contenido  = `
          <div>
          <h2>${respuesta.name}</h2>
          <p>Clima: ${respuesta.weather[0].description}</p>
          <p>Temp max: ${respuesta.main.temp_max}</p>
          <p>Temp min: ${respuesta.main.temp_min}</p>
          </div>
          `
          
        $('#mensaje').append(contenido);
  });
});


//LOGIN

function validar(){
    let usuario = document.getElementById("nombreUsuario");
    let pass = document.getElementById("passUsuario");
    let mensaje = document.getElementById("mensaje");
    
    localStorage.setItem("UsuarioLocal" , usuario);
    localStorage.setItem("passLocal" , pass );


    let input = document.getElementById("nombreUsuario");
    let input2 = document.getElementById("passUsuario");

    if( usuario.value == "nacho" && pass.value == "123" ){
            let parrafo = document.createElement("p");
            parrafo.innerHTML = "Bienvenido a GameARG Nacho";
            parrafo.style.color = "green";
            parrafo.style.fontSize = "40px";
        
            mensaje.appendChild(parrafo);



    }
    else{
        input.style.border = "1px solid #ff0000";
        input2.style.border = "1px solid #ff0000";
        alert("Usuario incorrecto");

    }

}

let botons = document.getElementsByClassName("btn");
for (botones of botons){
        botones.addEventListener("click" , function(){
});
}

// CARITO de COMPRAS

let botonesCompra = document.querySelectorAll(".botonCompra");
//let carrito = [];


for( let boton of botonesCompra){
    boton.addEventListener("click" , agregarCarrito);
}

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClick);

const carritoCartCONTAINER = document.querySelector('.shoppingCartItemsContainer');

function agregarCarrito(e){

    const button = e.target;
    const card = button.closest('.card');
    
    const cardTitulo = card.querySelector('.card-title').textContent;
    const cardPrecio = card.querySelector('.card-text').textContent;
    const cardIMG = card.querySelector('.card-img-top').src;

    addCardCarritoCompra(cardTitulo, cardPrecio, cardIMG);
}

//Funcion del carrito

function addCardCarritoCompra(cardTitulo, cardPrecio, cardIMG){

  const elementsTitulo = carritoCartCONTAINER.getElementsByClassName('.shoppingCartItemTitle');

  // ACA tendria que hacer que en el carrito solo se vea uno cuando repito producto, pero sigue mostrandome mas de uno
  for(let i = 0; i < elementsTitulo.length; i++){
    if(elementsTitulo[i].innetText === cardTitulo){

      let element = elementsTitulo[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');

      element.value++;
      actualizarTotal();
      return;
    }
  }
  //--

  const carritoCartROW = document.createElement('div');
  const carritoCartcontent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${cardIMG} width="60" height="80" class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${cardTitulo}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${cardPrecio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    carritoCartROW.innerHTML = carritoCartcontent;
    carritoCartCONTAINER.append(carritoCartROW);

    carritoCartROW.querySelector('.buttonDelete').addEventListener('click', removecarrito);

    carritoCartROW.querySelector('.shoppingCartItemQuantity').addEventListener('change',Quantitycambio);

    actualizarTotal();
}
//--

//Funcion para sumar los precios del carrito
function actualizarTotal(){
  let total = 0;
  const CarritoTotal = document.querySelector('.shoppingCartTotal');
  const carritoCartItems = document.querySelectorAll('.shoppingCartItem');

  carritoCartItems.forEach(shoppingCartItem =>{

    const shoppingCartItemPriceElemento = shoppingCartItem.querySelector('.shoppingCartItemPrice');
    const shoppingCartItemPrecio = Number(shoppingCartItemPriceElemento.textContent.replace('$', ''));

    const carritoCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
    const carritoCartItemQuantity = Number(carritoCartItemQuantityElement.value);

    total = total + shoppingCartItemPrecio * carritoCartItemQuantity;

  });
  CarritoTotal.innerHTML = `${total}$`
}
//--

//Funcion para remover productos del carrito
function removecarrito(e){
  const buttonclick = e.target;
  buttonclick.closest('.shoppingCartItem').remove();
  actualizarTotal();
}
//--

//Funcion para aumentar la cantidad de productos
function Quantitycambio(e){
  const cam = e.target;
  if(cam.value <= 0){
    cam.value = 1;
  }
  actualizarTotal();
}
//--

//Funcion de compra en el carrito
function comprarButtonClick() {
  carritoCartCONTAINER.innerHTML = '';
  actualizarTotal();
}

/*
Aplicando JQUERY al proyecto.
Funcion que esconde el carrito, lo muestra cuando se compra.
*/
$(document).ready(function(){

    $(".Jqry").fadeOut(2000);

  $(".espa2").click(function(){

    $(".Jqry").fadeIn(2000);

  });
});



/*$(function(){

  $(".Jqry").hide();

  $(".espa2").click(function(){


    $(".Jqry").show();

  })

});*/

//--