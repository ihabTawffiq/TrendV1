var email;
var resturantName // 'poula`s';


firebase.auth().onAuthStateChanged(
    function (user) {
        if (user != null) {
            email = user.email;
            var emailsubstr = email.split('.');
            if (emailsubstr[1] == 'editor@trend') {
                resturantName = emailsubstr[0];
                sessionStorage.resturantName = resturantName
                console.log(sessionStorage.resturantName)
            } else {
                alert('Please Login Correctly');
                window.location.href = '/login.html';
            }
        }
    });


