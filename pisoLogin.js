function login(password) {
    password = document.getElementById(password).value;
    if (password == "durara") {
        //alert('Success');
        window.location.href = "pisoHome.html"
    } else {
        alert('Password is incorrect');
    }
}