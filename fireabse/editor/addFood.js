
var size, price;
document.getElementById('onesize').addEventListener('click', oneSizeData)

function oneSizeData() {

    var sectionName = document.getElementById('sectionName').value;
    var objectName = document.getElementById('newObjectName').value;
    var objectDescription = document.getElementById('newObjectDescription').value;

    var objectDescriptionRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/")

    var obj = { Description : objectDescription }
    objectDescriptionRef.set(obj)
        .catch(error => {
            console.log(('error' + error.message))
        });
}
document.getElementById('multisize').addEventListener('click', multiSizeData)
function multiSizeData() {

    
    var sectionName = document.getElementById('sectionName').value;
    var objectName = document.getElementById('newObjectName').value;
    var objectDescription = document.getElementById('newObjectDescription').value;

    var objectDescriptionRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/")

    var obj = { Description : objectDescription }
    objectDescriptionRef.set(obj)
        .catch(error => {
            console.log(('error' + error.message))
        });
}


document.getElementById('addOnePrice').addEventListener('click', addOnePrice)
function addOnePrice(){
    size = 'one size';
    price = document.getElementById('oneSizeObjectPrice').value;
    var oneSizePriceRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/price/")
    var obj = { Size : size,price : price }
    console.log(size,price)
    oneSizePriceRef.set(obj)
        .catch(error => {
            console.log(('error' + error.message))
        });


}