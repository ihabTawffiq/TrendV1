var userId = '3a2s1d4f5g6h955555j8k7';
sessionStorage.UID = userId;
const areaRef = firebase.database().ref().child('zones/');
const resturantOptionList = document.getElementById('choose-resturant');

const areaOptionList = document.getElementById('choose-area');
var options = areaOptionList.querySelectorAll("option");
//console.log('444444444444' , areaRef.on('value',function(snap) { console.log(snap.val()) }))
areaRef.on('value', snap => {

    var key = Object.keys(snap.val());

    for (var i = 0; i < key.length; i++) {
        const li = document.createElement('option')
        li.innerText = Object.keys(snap.val())[i];
        console.log(Object.keys(snap.val())[i], snap.val())
        console.log('555555555555555')
        li.id = Object.keys(snap.val())[i];
        areaOptionList.add(li);
    }
})

document.getElementById('confirmArea').addEventListener('click', fillResturant);
//var z = areaOptionList.value;

function fillResturant() {
    const resturantRef = firebase.database().ref().child('zones/' + areaOptionList.value);

    resturantRef.on('value', snap => {

        var key = Object.keys(snap.val());

        for (var i = 0; i < key.length; i++) {
            const li = document.createElement('option')
            li.innerText = Object.keys(snap.val())[i];
            //console.log(Object.keys(snap.val())[i], snap.val())
            li.id = Object.keys(snap.val())[i];
            resturantOptionList.add(li);
        }
    })



}

document.getElementById('confirmResturant').addEventListener('click', fillService);

function fillService() {
    const serviceOptionList = document.getElementById('serviceType');
    //console.log(serviceOptionList.value)

    if (serviceOptionList.value == 'delevary') {
        //console.log(serviceOptionList.value)
        if (typeof (Storage) !== "undefined") {
            // Code for sessionStorage/sessionStorage.
            window.location.href = '/menu-cart.html';


            sessionStorage.area = areaOptionList.value;
            sessionStorage.resturan = resturantOptionList.value;
            //console.log(sessionStorage.area, sessionStorage.resturan)
            var div = document.createElement('div');
            div.setAttribute('area', sessionStorage.area);
            div.setAttribute('resturant', sessionStorage.resturan)
            document.body.appendChild(div);
        } else {
            alert("// Sorry! No Web Storage support..")
        }

    } else {
        if (typeof (Storage) !== "undefined") {
            // Code for sessionStorage/sessionStorage.
            window.location.href = '/PindingRequist.html';


            sessionStorage.area = areaOptionList.value;
            sessionStorage.resturan = resturantOptionList.value;
            //console.log(sessionStorage.area, sessionStorage.resturan)
            var div = document.createElement('div');
            div.setAttribute('area', sessionStorage.area);
            div.setAttribute('resturant', sessionStorage.resturan)
            document.body.appendChild(div);
        } else {
            alert("// Sorry! No Web Storage support..")
        }

    }




}
