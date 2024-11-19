const cardsCarrito = document.querySelector("#cart #cards") 

function getCards(data){
    const list = data.map(
        card => `<div class="card border shadow-none">
                    <div class="card-body">
                        <div class="d-flex align-items-start border-bottom pb-3">
                            <div class="me-4">
                                <img src="${card.product.imagen}" alt="" class="avatar-lg rounded"/>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <h5 class="text-truncate font-size-18">${card.product.nombre}</h5>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="mt-3">
                                            <p class="text-muted mb-2">Precio</p>
                                            <h5 class="mb-0 mt-2">${card.product.precio.toLocaleString("es-CO")}</h5>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="mt-3">
                                            <p class="text-muted mb-2">Cantidad</p>
                                            <h5 class="mb-0 mt-2">${card.quantity}</h5>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mt-3">
                                            <p class="text-muted mb-2">Total</p>
                                            <h5>${(card.product.precio * card.quantity).toLocaleString("es-CO")}</h5>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="mt-3">
                                            <p class="text-muted mb-2" onclick="eliminarProducto(${card.product.id})">Eliminar</p>
                                        </div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    )

    cardsCarrito.innerHTML = list.join("")
}
getCards(JSON.parse(localStorage.getItem("cart")))


/*Función para calcular el total de la compra*/
function total(data){
    let cartTotal = document.querySelector("#card-total")

    let total = 
        data.length > 0 
        ? data.reduce(
            (acumulado, actual) => acumulado + actual.product.precio * actual.quantity, 0
        )
        : 0
    cartTotal.innerText = "$" + total.toLocaleString("es-CO")
}
total(JSON.parse(localStorage.getItem("cart")))


/*Función para vaciar el carrito de compras*/
function vaciarCarrito(){
    let quantityTag = document.querySelector("#quantity")
    quantityTag.innerText = "0"
    localStorage.setItem("cart", JSON.stringify([]))
    localStorage.setItem("quantity", "0")
    getCards([])
    total([])
    document.querySelector("#btn-vaciar-cart").style.display = "none"
}

/*Función para eliminar producto*/
function eliminarProducto (id){
    const cards = JSON.parse(localStorage.getItem("cart"))
    const newCards = cards.filter(card => card.product.id !== id)
    localStorage.setItem("cart", JSON.stringify(newCards))

    getCards(newCards)
    total(newCards)

    let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
    localStorage.setItem("quantity", quantity)
    let quantityTag = document.querySelector("#quantity")
    quantityTag.innerText = quantity

}