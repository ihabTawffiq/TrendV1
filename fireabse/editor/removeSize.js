
document.getElementById('editSize-removeSize').addEventListener('click', removeSize);
function removeSize() {
    size= document.getElementById('editRemoveSizeT').value;
    removeSizeRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/Sizes/" + size )
    removeSizeRef.remove()
        .catch(error => {
            console.log(('error' + error.message))
        });

}