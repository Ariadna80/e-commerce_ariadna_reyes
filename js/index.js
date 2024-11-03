import {data} from './data.js'

const h1 = document.querySelector("h1");
h1.innerText = "Productos";

function cards (data){
  let cardsArray = data.map(
    (producto) => `<div class="card" style="width: 18rem;">
          <div class="contenedor-imagen">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          </div>
          <div class="card-body">
          <h3 class="card-title d-flex justify-content-center">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">${producto.precio}</p>
          <a href="./producto.html?prod=${producto.id}" class="btn">Ver más</a>
          </div>
          </div>`
  );
  document.querySelector("section").innerHTML = cardsArray.join("");
}
cards(data)


const input = document.querySelector("#inputSearch");
const buttonSearch = document.querySelector("#search");
const buttonReset = document.querySelector("#reset");

const resetInput = () => {
  input.value = ""
  cards(data)
  };

const filter = () =>{
  const filterData = data.filter( (item) => item.nombre.toLowerCase() === input.value.toLowerCase());

  if (filterData.length === 1){
    cards(filterData)
  } else{
    document.querySelector("section").innerText = "No encontrado"
  }

}

buttonSearch.addEventListener("click",filter);
buttonReset.addEventListener("click",resetInput);

function filterCategory(categoría){
  if(categoría === "Todo"){
    cards(data)
  }else if(categoría === "Coronas"){
    const coronas = data.filter(item => item.categoría === "Coronas")
    cards(coronas)
  }else if(categoría === "Decoraciones"){
    const decoraciones = data.filter(item => item.categoría === "Decoraciones")
    cards(decoraciones)
  }else {
    const detalles = data.filter(item => item.categoría === "Detalles")
    cards(detalles)
  }
}
