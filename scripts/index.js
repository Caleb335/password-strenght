var userPassword = document.getElementById('password');

var strenghtMsg = document.getElementById('pwd-msg');

userPassword.addEventListener('keydown', pwdStrenght);

function pwdStrenght () {
    if (userPassword.value.length < 5) {
        strenghtMsg.innerText = "Too short!";
        strenghtMsg.style.color = "#ccc";
    } else if (userPassword.value.length < 8) {
        strenghtMsg.innerText = "Easily cracked";
        strenghtMsg.style.color = "red";
    } else if (userPassword.value.length < 12) {
        strenghtMsg.innerText = "Good";
        strenghtMsg.style.color = "orange";
    } else if (userPassword.value.length < 15) {
        strenghtMsg.innerText = "Okay!";
        strenghtMsg.style.color = "#0b9779";
    } else if (userPassword.value.length < 18 || userPassword.value.length > 20) {
        strenghtMsg.innerText = "Strong Password!";
        strenghtMsg.style.color = "#0b9779";
    }

    if (userPassword.value.length == 0) {
        strenghtMsg.innerText = "";
    }
}