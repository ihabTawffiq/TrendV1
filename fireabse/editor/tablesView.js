var viewDiv = document.getElementById('tableView');
var menuRef = firebase.database().ref('zones/' + zone +'/'+ resturantName + '/tables/')
menuRef.on('value', snap => {
    viewDiv.innerText = JSON.stringify(snap.val(), null, 3);
    console.log(JSON.stringify(snap.val(), null, 3))
});
firebase.database().ref('zones/' + zone +'/'+ resturantName + '/tables/').on('value',function(snapshot){
    
})