var user = firebase.auth().currentUser;

document.getElementById('update').addEventListener('click', updatePass);

function updatePass() {
    var newPassword = document.getElementById('newPassword').value;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            console.log(newPassword)
            user.updatePassword(newPassword)
                .then(() => {
                    window.location.href = '/profile.html'
                })
                .catch(function (error) {
                    alert(error.message)
                });
        } else {
            console.log("on auth user faild")
        }
    });

}


