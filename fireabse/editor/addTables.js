document.getElementById('editTables-addTable').addEventListener('click', addTable);
function addTable() {
    if (zone.length != 0) {
        var tableName = document.getElementById('editTable-addTable-tableName').value;

        var addTableRef = firebase.database().ref('zones/' + zone + '/' + resturantName + '/tables/' + tableName + '/')
        var obj = { Stat: 'Available' }
        addTableRef.update(obj);
    } else {
        alert('Please Enter Zone')
    }

}