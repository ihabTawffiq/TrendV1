var user = firebase.auth().currentUser;
var name, email, phone, uid;
var namein = document.getElementById('name'),
    emailin = document.getElementById('email')
    ;


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (user.displayName == "null") {
            console.log("555555555555555555")
            name = "provide name";
        } else {
            name = user.displayName
        }
        email = user.email;
        phone = user.phone;

        namein.setAttribute('placeholder', name)
        emailin.setAttribute('placeholder', email)
        namein.innerText = name;
        emailin.innerText = email;
        namein.setAttribute('value', name)
        emailin.setAttribute('value', email)

    } else {
        console.log("on auth user faild")
    }
});

document.getElementById('update').addEventListener('click', update);
function update() {
    name = document.getElementById('name').value
    email = document.getElementById('email').value
    var user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    }).then(function () {
        user.updateEmail(email).then(function () {
            window.location.href ='/profile.html'
        }).catch(function (error) {
            alert(error.message)
        });
    }).catch(function (error) {
        alert('Faild updating Name, Please enter a vaild Name');
    });
    
}