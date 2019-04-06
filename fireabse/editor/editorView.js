var viewDiv = document.getElementById('editorView');
console.log('see',sessionStorage.resturantName)
var menuRef = firebase.database().ref('resturants/' + sessionStorage.resturantName + '/menu/')
menuRef.on('value', snap => {
    viewDiv.innerText = JSON.stringify(snap.val(), null, 3);
    console.log(JSON.stringify(snap.val(), null, 3))
});