const data = [
  {
    id: 1,
    imagen: "https://i.pinimg.com/564x/d8/93/0f/d8930f31ef8bdd5069e6523503521ee3.jpg",
    nombre: "Corona Gold",
    descripcion: "Tonos dorados y brillantes, ramas, esferas y detalles",
    precio: "$90.000",
    categoría:"Coronas",
  },
  {
    id: 2,
    imagen: "https://i.pinimg.com/564x/42/10/b1/4210b12dfc68d12874ea7877b2a3c064.jpg",
    nombre: "Corona Navilove",
    descripcion: "En tono rojo navidad, esferas, flores y moño",
    precio: "$90.000",
    categoría:"Coronas",
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1585829621888-a299473e3f59?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nombre: "Bolsa de galletas",
    descripcion: "Galletas de mantequilla con relleno de mermelada de fresa",
    precio: "$8.000",
    categoría:"Detalles",
  },
  {
    id: 4,
    imagen: "https://i.pinimg.com/564x/71/24/65/7124652c907080e7484324a9a1946d34.jpg",
    nombre: "Corona Frozen",
    descripcion: "Tonos plateados con detalles únicos",
    precio: "$90.000",
    categoría:"Coronas",
  },
  {
    id: 5,
    imagen: "https://i.pinimg.com/564x/0f/ba/d5/0fbad56d24a1850fdc11b2b95f57b49d.jpg",
    nombre: "Esfera personalizada",
    descripcion: "Personaliza con tu nombre tu propia esfera",
    precio: "$10.000",
    categoría:"Decoraciones",
  },
  {
    id: 6,
    imagen: "https://images.unsplash.com/photo-1635887910118-11c5db92e034?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nombre: "Velas aroma navideño",
    descripcion: "Con una mezcla de aromas de temporada: canela, pino, jengibre",
    precio: "$5.000",
    categoría:"Detalles",
  },
  {
    id: 7,
    imagen: "https://i.pinimg.com/564x/ee/13/c9/ee13c92b45e40cbf3b7e58458e04b62a.jpg",
    nombre: "Centro de mesa",
    descripcion: "Elegante arreglo festivo para dar estilo a tu mesa",
    precio: "$23.000",
    categoría:"Decoraciones",
  },
  {
    id: 8,
    imagen: "https://images.unsplash.com/photo-1606394784750-28e68c1e6c7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nombre: "Taza Noel",
    descripcion: "Ideal para regalar o disfrutar de bebidas calientes",
    precio: "$12.000",
    categoría:"Detalles",
  },
  {
    id: 9,
    imagen: "https://i.pinimg.com/564x/49/ef/a8/49efa82473f3df0ced126aa2580f7a5a.jpg",
    nombre: "Funda para cojines",
    descripcion: "Fundas en tela polar con diseños festivos",
    precio: "$28.000",
    categoría:"Decoraciones",
  },
  {
    id: 10,
    imagen: "https://i.pinimg.com/564x/46/03/ca/4603caf92292bc61bea842eaf63ea907.jpg",
    nombre: "Pulsera Dijes",
    descripcion: "Pulsera con dijes inspirados en la navidad, perfecta para regalar",
    precio: "$32.000",
    categoría:"Detalles",
  },
];

const h1 = document.querySelector("h1");
h1.innerText = "Productos";

function cards (data){
  let cardsArray = data.map(
    (producto) => `<div class="card" style="width: 18rem;">
          <div class="contenedor-imagen">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          </div>
          <div class="card-body">
          <h3 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">${producto.precio}</p>
          <a href="./producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
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
