class Producto {
    constructor(titulo,detalle,precio,stock,imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}
const producto1 = new Producto("Corona Gold","Corona navideña en tono dorado con diámetro de 50cm", 90000, 8,"./img/CoronaGold.jpeg")

const htmlProducto = `
  <div class="producto">
    <h1>${producto1.titulo}</h1>
    <img src="${producto1.imagen}" alt="${producto1.titulo}">
    <p>${producto1.detalle}</p>
    <p>Precio: $${producto1.precio}</p>
    <p>Stock disponible: ${producto1.stock}</p>
  </div>
`;

const main = document.querySelector("main")
main.innerHTML = htmlProducto
