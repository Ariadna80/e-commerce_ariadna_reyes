import {data} from './data.js'

class Producto {
    constructor(titulo,detalle,precio,stock,imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('prod'));

const prodSelect = data.find(prod => prod.id == id);

const htmlProducto = `
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-6 img-prod">
        <img src="${prodSelect.imagen}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-6">
        <div class="card-body">
          <h5 class="card-title">${prodSelect.nombre}</h5>
          <p class="card-text">${prodSelect.descripcion}</p>
          <p class="card-text">$ ${prodSelect.precio.toLocaleString("es-CO")}</p>
          <p><small class="text-body-secondary">Stock: ${prodSelect.stock}</small></p>

          ${localStorage.getItem("email") ? `<div class="input-group mb-3">
          <button id="incrementar-btn" class="btn" type="button">+</button>
          <input type="text" class="form-control" value="1">
          <button id="disminuir-btn" class="btn" type="button">-</button></div>

          <div id="agregar-btn" class="d-grid gap-2"><button class="btn" type="button">Comprar</button></div>`
          : `<a href="login.html"><button class="btn" type="button">Iniciar sesión para comprar</button></a>`}
        </div>
      </div>
    </div>
  </div>`;
document.querySelector("main").innerHTML = htmlProducto  

const counter = document.querySelector(".input-group input")

document.getElementById("incrementar-btn").addEventListener("click",incrementarItem)
document.getElementById("disminuir-btn").addEventListener("click",disminuirItem)
document.getElementById("agregar-btn").addEventListener("click",agregarItem)

function disminuirItem(){
  if(Number(counter.value) > 1){
    counter.value = Number(counter.value) - 1
  }
}

function incrementarItem(){
  if(Number(prodSelect.stock) > counter.value){
    counter.value = Number(counter.value) + 1
  }
}

function agregarItem(){

  function add(){
  let cart = JSON.parse(localStorage.getItem("cart"))

  const idProduct = Number(window.location.search.split("=")[1]);
  const product = data.find((item) => item.id === idProduct);
  const existeIdEnCard = cart.some((item) => item.product.id === idProduct);

  if (existeIdEnCard) {
    cart = cart.map((item) => {
      if (item.product.id === idProduct) {
        return {...item, quantity: item.quantity + Number(counter.value)};
      } else {
        return item;
      }
    });
  } else {
    cart.push({product: product,quantity: Number(counter.value)});
  }

  localStorage.setItem("cart", JSON.stringify(cart))

  let quantity = cart.reduce((acumulado,actual) => acumulado + actual.quantity, 0)
  localStorage.setItem("quantity", JSON.stringify(quantity))
  const quantityTag = document.querySelector("#quantity")
  quantityTag.innerText = quantity

  counter.value = "1"

  Toastify({
    text: "Añadido al carrito",
    duration: 2200,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: "#e2c15c",
    },
  }).showToast();

  };

  Swal.fire({
    text: "Quieres agregar este producto al carrito?",
    confirmButtonText: "SI",
    cancelButtonText: "NO",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: "#2d572c",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      add();
    }
  });

}