function noAutenticado(){
    if(localStorage.getItem("email")){
        location.href = "./cart.html"
    }else{
        location.href = "./index.html"
    }
}
noAutenticado()