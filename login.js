const btnLogin = document.getElementById('btnLogin');
const username = document.getElementById('username');
const password = document.getElementById('password');

btnLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    if (username.value === "bading" && password.value === "bading"){
        alert('Login Successfull!');
        window.location.href="/main page/index.html";
    }else{
        alert('mali password mo tanga');
    }
});