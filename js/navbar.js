let nav = [
    {texto:"Inicio", href:"index.html"},
    {texto:"Productos", href:"producto.html"},
    {texto:"Blog", href:"#"},
    {texto:"Nosotros", href:"#"},
]

let menu = []
for(let item of nav){
    menu.push(`<a class="item-nav" href="${item.href}"> ${item.texto}</a>`);
};

document.querySelector("nav").innerHTML = menu.join("");

document.querySelector(".sesion").innerHTML = `<span>${localStorage.getItem("email")
  ? `<span class="item-sesion">${localStorage.getItem("email")}</span> | <span class="item-sesion" onclick="logout()">Cerrar sesión</span>`
  : `<a class="item-sesion" href="./login.html">Iniciar sesión</a>`
}</span>`

function logout (){
  localStorage.clear()
  location.href = "./index.html"
}