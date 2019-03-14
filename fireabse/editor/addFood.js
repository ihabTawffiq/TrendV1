
var size, price;

document.getElementById('onesize').addEventListener('click', oneSizeData)
function oneSizeData() {

    var sectionName = document.getElementById('sectionName').value;
    var objectName = document.getElementById('newObjectName').value;
    var objectDescription = document.getElementById('newObjectDescription').value;
    var objectDescriptionRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/")

    var obj = { Description: objectDescription }
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

    var obj = { Description: objectDescription }
    objectDescriptionRef.set(obj)
        .catch(error => {
            console.log(('error' + error.message))
        });
}


document.getElementById('addOnePrice').addEventListener('click', addOnePrice)
function addOnePrice() {
    var sectionName = document.getElementById('sectionName').value;
    var objectName = document.getElementById('newObjectName').value;
    var objectSizesRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/Sizes/")
    price = document.getElementById('oneSizeObjectPrice').value
    size ='One Size'
    var sizeObj = { [size]: price }
    objectSizesRef.set(sizeObj)
    .catch(error => {
        console.log(('error' + error.message))
    });


}
document.getElementById('newMultiSize').addEventListener('click',addMultiPrice)
function addMultiPrice(){
    var sectionName = document.getElementById('sectionName').value;
    var objectName = document.getElementById('newObjectName').value;
    var objectSizesRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/Sizes/")
    price = document.getElementById('newObjectMultiPrice').value;
    size = document.getElementById('newObjectMultiSize').value;
    var sizeObj = { [size]: price }
    objectSizesRef.update(sizeObj)
    .catch(error => {
        console.log(('error' + error.message))
    });
}
document.getElementById('addAddition').addEventListener('click',addAddition)
function addAddition(){
    var sectionName = document.getElementById('sectionName').value;
    var objectName = document.getElementById('newObjectName').value;
    var objectSizesRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/Additions/")
    var addition = document.getElementById('addAdditionName').value;
    var Aprice = document.getElementById('additionPrice').value;
    var sizeObj = { [addition]: Aprice }
    objectSizesRef.update(sizeObj)
    .catch(error => {
        console.log(('error' + error.message))
    });
}