
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
    sessionStorage.sectionName = sectionName
    sessionStorage.objectName = objectName
    var objectSizesRef = firebase.database().ref('resturants/' + sessionStorage.resturantName + '/menu/' + sectionName + '/' + objectName + "/Sizes/")
    price = document.getElementById('oneSizeObjectPrice').value
    size = 'One Size'
    var sizeObj = { [size]: price }
    objectSizesRef.set(sizeObj)
        .catch(error => {
            console.log(('error' + error.message))
        });

    var storageRef = firebase.storage().ref().child(sessionStorage.resturantName + '/' + sessionStorage.sectionName + '/' + sessionStorage.objectName + '.PNG');
    var x = document.getElementById("myFile");
    console.log('555555')
    if ('files' in x) {

        for (var i = 0; i < x.files.length; i++) {
            var file = new Blob([JSON.stringify(x.files[i])]);
            file = x.files[i]
            console.log(file.size)

            storageRef.put(file).then(function (snapshot) {
                console.log('Uploaded a blob or file!');


            });

        }
    }

}
document.getElementById('newMultiSize').addEventListener('click', addMultiPrice)
function addMultiPrice() {
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

    var storageRef = firebase.storage().ref().child(sessionStorage.resturantName + '/' + sessionStorage.sectionName + '/' + sessionStorage.objectName + '.PNG');
    var x = document.getElementById("myFile");
    if ('files' in x) {

        for (var i = 0; i < x.files.length; i++) {
            var file = new Blob([JSON.stringify(x.files[i])]);
            file = x.files[i]
            console.log(file.size)

            storageRef.put(file).then(function (snapshot) {
                console.log('Uploaded a blob or file!');


            });

        }
    }
}
document.getElementById('addAddition').addEventListener('click', addAddition)
function addAddition() {
    var sectionName = document.getElementById('sectionName').value;
    var objectName = document.getElementById('newObjectName').value;
    var objectSizesRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/Additions/")
    var addition = document.getElementById('addAdditionName').value;
    var Aprice = document.getElementById('additionPrice').value;
    var sizeObj = { [addition]: Aprice }
    objectSizesRef.update(sizeObj).then(function(){
        location.reload();
        console.log('dddddddddddddddddd')
    })
        .catch(error => {
            console.log(('error' + error.message))
        });
        location.reload();

}



