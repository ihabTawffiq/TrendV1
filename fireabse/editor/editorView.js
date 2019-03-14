var viewDiv = document.getElementById('editorView');
var menuRef = firebase.database().ref('resturants/' + resturantName + '/menu/')
menuRef.on('value', snap => {
    viewDiv.innerText = JSON.stringify(snap.val(), null, 3);
    console.log(JSON.stringify(snap.val(), '..', 5))
});