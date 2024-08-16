// email and password
let Email = document.getElementById('Email_input');
let Password = document.getElementById('password_input');
// email and password on local storage
let getEmail  = localStorage.getItem("Email");
let getPassword  = localStorage.getItem("Password");

function logIn(){
    if(Email.value == "" || Password.value == ""){
        alert("All fields must be filled out");
        return false;
    }
    if(!validateEmail(Email.value)){
        alert("Invalid email format");
        return false;
    }
    if(!validatePassword(Password.value)){
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        return false;
    }
    if(Email.value == getEmail.trim() && Password.value == getPassword.trim()){
        alert("Login Successful!");
        setTimeout(function () {
            window.location.href = "/index.html";
        }, 1500);
    }else{
        alert("Invalid email or password");
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return re.test(password);
}
