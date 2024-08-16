let Name = document.getElementById('Name_input');
let Email = document.getElementById('Email_input');
let Password = document.getElementById('password_input');

function SignUp(e){
    // e.preventDefault();
    localStorage.clear();
    if(Name.value == "" || Email.value == "" || Password.value == ""){
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
    alert("Registration Successful!");
    localStorage.setItem("Name", Name.value)
    localStorage.setItem("Email", Email.value)
    localStorage.setItem("Password", Password.value)
    setTimeout(function () {
        window.location.href = "/login.html";
    }, 1000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return re.test(password);
}
