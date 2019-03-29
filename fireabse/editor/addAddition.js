document.getElementById('editFood-addAddition-addAdditionAction').addEventListener('click', addAddition);
function addAddition() {
    var additionName = document.getElementById('editFood-addAddition-additionName').value;
    var additionPrice = document.getElementById('editFood-addAddition-additionPrice').value;
    var addAdditionRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/Additions/")
    var obj = { [additionName]: additionPrice }
    addAdditionRef.update(obj);
}
