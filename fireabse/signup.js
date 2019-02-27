
var sign;
var randomID;



var appVer = new firebase.auth.RecaptchaVerifier('recaptcha-container');

document.getElementById("signup").addEventListener("click", signup);

function signup() {

    var email = document.getElementById("signupemail").value;
    var password = document.getElementById("signuppassword").value;
    // var url = "https://translate.google.com/";
     console.log(email + " : " + password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
       
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert(errorCode + " : " + errorMessage);
                sign = true;
            } else if (errorCode == 'auth/email-already-in-use') {
                alert(errorCode + " : " + errorMessage);
                sign = true;
            } else if (errorCode == 'auth/invalid-email') {
                alert(errorCode + " : " + errorMessage);
                sign = true;
            } else if (errorCode == 'auth/operation-not-allowed') {
                alert(errorCode + " : " + errorMessage);
                sign = true;
            }
        });
    //firebase.auth().onAuthStateChanged(function (user) {
      //  randomID = user.uid;
    //});
    setTimeout(function () {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
    
                insertData("signup", sign);
            }
        });
    }, 1000);
}
//randomID = user.uid;
//alert(randomID);




function insertData(type, mark) {
    if (type == "signup" && mark == undefined) {
        console.log("inserting data")
        var fullname = document.getElementById("signupfullName").value;
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
    
                user.displayName = fullname;
            }
        });
        //var phoneNumber = document.getElementById("signupphone").value;
        //var email = document.getElementById("signupemail").value;
        //var password = document.getElementById("signuppassword").value;
        //firebase.database().ref('user/' + randomID + '/personalInfo/').set({
        //    fullName: fullname
        //});

        setTimeout(linkWithPhone, 1000);
    } else if (type == "signup" && mark != undefined) {
        alert("mark!!!!")
        console.log("mark!!!!")
        window.location.href = '/fail.html';
    }
}

function linkWithPhone() {
    console.log("inside the function")
    var phone = document.getElementById("signupphone").value;
    console.log(phone)
    // firebase.auth().currentUser.linkWithPhoneNumber(phoneNumber, appVerifier);
    firebase.auth().currentUser.linkWithPhoneNumber("+20" + phone, appVer)
        .then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;
            console.log(confirmationResult);

        }).catch(function (error) {


            firebase.auth().currentUser.delete().then(function () {
                // User deleted.
            }).catch(function (error) {
                alert(error.message)
            });
            

            alert(error.message);
            console.log(error.message);
            setTimeout(function () { window.location.href = 'https://trend-lab02.firebaseapp.com/fail.html'; }, 3000);

        });
}

document.getElementById("submit-code").addEventListener("click", submitCode);

function submitCode() {
    window.confirmationResult.confirm(document.getElementById("verificationcode").value)
        .then(function (result) {
            //alert('login process successfull!\n redirecting');
            //alert('<a href="javascript:alert(\'hi\');">alert</a>')
            // console.log("congratulations!!...")
            setTimeout(function () { window.location.href = '/success.html'; }, 3000);
        }, function (error) {
            alert(error.message);

            firebase.auth().currentUser.delete().then(function () {
                // User deleted.
                firebase.database().ref('user/' + randomID).remove();
            }).catch(function (error) {
                // An error happened.
            });
            window.location.href = '/fail.html';
        });
};

/*******************GOOGLE PROVIDER************************************* */
  //var provider = new firebase.auth.GoogleAuthProvider();
  
  
  var uiConfig = {
    signInSuccessUrl: '/success.html',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID]};

  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', uiConfig);
  /*******************GOOGLE PROVIDER************************************* */