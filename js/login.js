const UserLogin = {email:"kyra@gmail.com", password:"1284"};

const form = document.querySelector("form");
const message = document.querySelector("#formMessage");

function clearMessage (){
    message.innerText = "";
}
form.elements.email.addEventListener("input",clearMessage);
form.elements.password.addEventListener("input",clearMessage);

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(UserLogin.email === form.elements.email.value && UserLogin.password === form.elements.password.value ){
        localStorage.setItem("email", form.elements.email.value)
        localStorage.setItem("cart", JSON.stringify([]))
        localStorage.setItem("quantity", "0")
        window.location.href = "./index.html";
    }else{
        message.innerText = "Credenciales inválidas";
        form.elements.email.value = "";
        form.elements.password.value = "";
    }
})