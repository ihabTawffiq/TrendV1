var size, price, sectionName, objectName, newDescriptionRef, removeSizeRef;


document.getElementById('edit4').addEventListener('click', saveData)
document.getElementById('size4').addEventListener('click', saveData)
document.getElementById('price4').addEventListener('click', saveData)
document.getElementById('add4').addEventListener('click', saveData)
function saveData() {
    sectionName = document.getElementById('editSectionName').value;
    objectName = document.getElementById('editObjectName').value;
    newDescriptionRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/")
}

document.getElementById('editDescription').addEventListener('click', editDescription)
function editDescription() {
    var newDescription = document.getElementById('editedDescription').value;
    var descObj = { Description: newDescription }
    newDescriptionRef.update(descObj)
        .catch(error => {
            console.log(('error' + error.message))
        });
}
document.getElementById('editSize-addNewSize').addEventListener('click', addNewSize);
function addNewSize() {
    var newSize = document.getElementById('editAddNewSize').value;
    var newPrice = document.getElementById('editAddNewPrice').value;
    newSizeRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/Sizes/")
    var newSizeObj = { [newSize]: newPrice }
    newSizeRef.update(newSizeObj)
        .catch(error => {
            console.log(('error' + error.message))
        });

}





