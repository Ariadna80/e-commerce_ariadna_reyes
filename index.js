const h1 = document.querySelector("h1")
h1.innerText = "Productos"

let cardsArray = [];
function cardsProductos(){
    for (let card = 1; card <= 9; card++){
        const cards = `<div class="card" style="width: 18rem;">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${card}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title ${card}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="./producto.html" class="btn btn-primary">Ver más</a>
        </div>
        </div>`

        cardsArray.push(cards)
    }
}
cardsProductos()    
document.querySelector("section").innerHTML = cardsArray.join().replaceAll(",", "");
