var user = firebase.auth().currentUser;
var name, email, phone, uid, pass;
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (user.displayName == "null") {
            console.log("555555555555555555")
            name = "provide name";
        } else {
            name = user.displayName
        }
        email = user.email;
        phone = user.phoneNumber;
        //pass = user.password;
        //emailVerified = user.emailVerified;
        //uid = user.uid;
        //console.log("user: " + name, email, uid)
        //document.getElementById("data").innerHTML = pass;
        document.getElementById('name').innerText = "User Name: " + name
        document.getElementById('email').innerText = "E-mail: " + email
        document.getElementById('phone').innerText = "Phone: " + phone


    } else {
        console.log("on auth user faild")
    }
});

document.getElementById("deleteAcc").addEventListener("click", deleteacc);
function deleteacc() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            user.delete().then(function () {
                Console.log(" User deleted.")
                window.location.href = '/index.html'

            }).catch(function (error) {
                alert(error.message)
                window.location.href = '/index.html'
            });
        };
    })
}

document.getElementById('updateInfo').addEventListener('click', goupdate);
function goupdate() {
    window.location.href = '/updateProfile.html'
}
document.getElementById('changePhone').addEventListener('click', goPhoneUpdate);
function goPhoneUpdate() {
    window.location.href = '/updatePhone.html'
}
document.getElementById('changePassword').addEventListener('click', goPasswordUpdate);
function goPasswordUpdate() {
    window.location.href = '/updatePassword.html'
}

//document.getElementById("logout").addEventListener("click", logoutt);
function logoutt() {
    firebase.auth().signOut().then(function () {
        console.log('Signed Out');
        window.location.href = "https://trend-lab02.firebaseapp.com/index.html"
    }, function (error) {
        console.error('Sign Out Error', error);
    });
}