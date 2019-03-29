const areaRef = firebase.database().ref().child('zones/');
var res;
const resturantOptionList = document.getElementById('choose-resturant');

const areaOptionList = document.getElementById('choose-area');
var options = areaOptionList.querySelectorAll("option");
areaRef.on('value', snap => {

    var key = Object.keys(snap.val());

    for (var i = 0; i < key.length; i++) {
        const li = document.createElement('option')
        li.innerText = Object.keys(snap.val())[i];
        console.log(Object.keys(snap.val())[i], snap.val())
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
            console.log(Object.keys(snap.val())[i], snap.val())
            li.id = Object.keys(snap.val())[i];
            resturantOptionList.add(li);
        }
    })



}

document.getElementById('confirmResturant').addEventListener('click', fillService);

function fillService() {
    const serviceOptionList = document.getElementById('serviceType');
    console.log(serviceOptionList.value)

    if (serviceOptionList.value == 'delevary') {
        console.log(serviceOptionList.value)

        //window.location.href = '/menu-cart.html';
    }
    var z = areaOptionList.value;
    res = resturantOptionList.value;

   console.log(z,res)
    var div = document.createElement('div');
    div.setAttribute('area',z);
    div.setAttribute('resturant',res)
    document.body.appendChild(div);
    
    



}
