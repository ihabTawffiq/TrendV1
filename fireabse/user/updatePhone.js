var user = firebase.auth().currentUser;
var phone;
var phonein = document.getElementById('phone')
    ;


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        
        phone = user.phoneNumber;

        phonein.setAttribute('placeholder', phone)
       
        phonein.setAttribute('value', phone)

    } else {
        console.log("on auth user faild")
    }
});


var appVer = new firebase.auth.RecaptchaVerifier('recaptcha-container');
document.getElementById('updatePhone').addEventListener('click', linkWithPhone)

function linkWithPhone() {
    console.log("inside the function")
    var phone = document.getElementById("phone").value;
    console.log(phone)
    firebase.auth().currentUser.linkWithPhoneNumber("+20" + phone, appVer)
        .then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;

        }).catch(function (error) {
            alert(error.message)
            console.log(error.message);
        });
}

document.getElementById("submit-code").addEventListener("click", submitCode);

function submitCode() {
    window.confirmationResult.confirm(document.getElementById("verificationcode").value)
        .then(function (result) {

            setTimeout(function () { window.location.href = '/profile.html'; }, 3000);
        }, function (error) {
            alert(error.message);

        });
};
