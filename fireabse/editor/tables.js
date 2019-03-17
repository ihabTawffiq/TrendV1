document.getElementById('editTables-viewTables').addEventListener('click', zoning);
document.getElementById('editTables-removingTables').addEventListener('click', zoning);
document.getElementById('editTables-addingTables').addEventListener('click', zoning);
var zone;
function zoning() {
    zone = document.getElementById('zoneName').value;
    console.log(zone);
    var viewDiv = document.getElementById('tableView');
    if (zone.length != 0){ 
        var menuRef = firebase.database().ref('zones/' + zone + '/' + resturantName + '/tables/')
        menuRef.on('value', snap => {
            viewDiv.innerText = JSON.stringify(snap.val(), null, 3);
            console.log(JSON.stringify(snap.val(), null, 3))
        
        });
    }else{
        alert('Please Enter Zone')
    }

}