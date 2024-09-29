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