var sign;
var email
document.getElementById("login").addEventListener("click", login);
function login() {
    email = document.getElementById("loginemail").value;
    var password = document.getElementById("loginpassword").value;
    // alert(em + " : " + p);
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                alert(errorMessage);
                sign = true;
            } else if (errorCode === 'auth/user-not-found') {
                alert(errorMessage);
                sign = true;
            } else if (errorCode === 'auth/user-disabled') {
                alert(errorMessage);
                sign = true;
            } else if (errorCode === 'auth/invalid-email') {
                alert(errorMessage);
                sign = true;
            } else {
                alert(errorCode + " : " + errorMessage);
            }
        });
    setTimeout(function () {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                successRedirect(sign);
            }
        });
    }, 5000);

}

function successRedirect(mark) {
    var subemail = email.split(".");
    if (mark == undefined) {
        if (subemail[1] == "manager@trend") {
            window.location.href = '/manager.html';
        } else if (subemail[1] == "editor@trend") {
            window.location.href = '/editor.html';
        } else {
            window.location.href = '/chooseResturant.html';
        }
    } else if (mark != undefined) {
        window.location.href = '/login.html';
    }
}
