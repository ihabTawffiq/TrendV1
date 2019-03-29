document.getElementById('editFood-removeAddition-removeAdditionAction').addEventListener('click', addAddition);
function addAddition() {
    var additionName = document.getElementById('editFood-removeAddition-additionName').value;
    var addAdditionRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/Additions/" +additionName)
    //var obj = { [additionName]: additionPrice }
    addAdditionRef.remove();
}
console.log(resturantName);
