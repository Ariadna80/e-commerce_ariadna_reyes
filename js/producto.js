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
          <p class="card-text">${prodSelect.precio}</p>
          <p><small class="text-body-secondary">Stock: ${prodSelect.stock}</small></p>
          ${localStorage.getItem("email") ? `<div class="input-group mb-3">
          <button class="btn" type="button">-</button>
          <input type="text" class="form-control" value="1">
          <button class="btn" type="button">+</button></div>

          <div class="d-grid gap-2"><button class="btn" type="button">Comprar</button></div>`
          : `<a href="login.html"><button class="btn" type="button">Iniciar sesión para comprar</button></a>`}
        </div>
      </div>
    </div>
  </div>`;

const main = document.querySelector("main")
main.innerHTML = htmlProducto