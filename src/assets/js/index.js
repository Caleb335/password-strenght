let userPassword = document.getElementById('password'); 

let pwdStrenghtMsg = document.getElementById('strenghtMsg');

userPassword.addEventListener('keydown', pwdStrenght);

const pwdStrenght = () => {
    if (userPassword.value.length < 5) {
        pwdStrenghtMsg.innerText = "Too short!";
        pwdStrenghtMsg.style.color = "#ccc";
    } else if (userPassword.value.length < 8) {
        pwdStrenghtMsg.innerText = "Easily cracked";
        pwdStrenghtMsg.style.color = "red";
    } else if (userPassword.value.length < 12) {
        pwdStrenghtMsg.innerText = "Good";
        pwdStrenghtMsg.style.color = "orange";
    } else if (userPassword.value.length < 15) {
        pwdStrenghtMsg.innerText = "Okay!";
        pwdStrenghtMsg.style.color = "#0b9779";
    } else if (userPassword.value.length < 18 || userPassword.value.length > 20) {
        pwdStrenghtMsg.innerText = "Strong Password!";
        pwdStrenghtMsg.style.color = "#0b9779";
    }

    if (userPassword.value.length == 0) {
        pwdStrenghtMsg.innerText = "";
    }
}