const autenticar = () => {
    if(localStorage.getItem("email")){
        location.href = "./index.html"
    }
}
autenticar()