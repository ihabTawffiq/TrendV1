document.getElementById('addDelivaryFee').addEventListener('click', addFee);
function addFee() {
    var area = document.getElementById('area').value
    var fee = document.getElementById('delivaryFee').value

    var delivaryFeeRef = firebase.database().ref().child('zones/' + area + '/' + sessionStorage.resturantName )
    delivaryFeeRef.update({delivaryFee : fee})
}
