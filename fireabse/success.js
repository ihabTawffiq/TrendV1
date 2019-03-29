var user = firebase.auth().currentUser;


//document.getElementById("delete").addEventListener("click", deleteacc);
function deleteacc() {
    user.delete().then(function () {
        Console.log(" User deleted.")

    }).catch(function (error) {
        console.log("An error happened Deleting")
    });
}


var name, email, photoUrl, uid, emailVerified;


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if(user.displayName == "null"){console.log("555555555555555555")}
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
        console.log("user: " + name, email, uid)
        document.getElementById("userInfo").innerHTML ="user Name: " + name+" ,E-mail: "+ email+" ,UserID: "+ uid
    } else {
        console.log("on auth user faild")
    }
});

//document.getElementById("logout").addEventListener("click", logoutt);
function logoutt() {
    firebase.auth().signOut().then(function () {
        console.log('Signed Out');
        window.location.href = "https://trend-lab02.firebaseapp.com/index.html"
    }, function (error) {
        console.error('Sign Out Error', error);
    });
}