document.getElementById('editTables-removeTable').addEventListener('click', removeTable);
function removeTable() {
    if (zone.length != 0) {
        var tableName = document.getElementById('editTable-removeTable-tableName').value;
        var removeTableRef = firebase.database().ref('zones/' + zone + '/' + resturantName + '/tables/' + tableName)
        removeTableRef.remove();
    }else{
        alert('Please Enter Zone')
    }
}