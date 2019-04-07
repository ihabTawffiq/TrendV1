var tableOrderRef = firebase.database().ref().child('zones/' + sessionStorage.area + '/' + sessionStorage.resturan + '/tableOrders/' + sessionStorage.UID);
console.log(sessionStorage.area, sessionStorage.resturan, sessionStorage.UID)
var oreders = []
var total;
var sheet = []
var totalforall = 0;
var sheetDiv = document.getElementById('currentMenu');
var containerDiv = document.getElementById('container')
sheetDiv.setAttribute('class', 'container')
//sheetDiv.setAttribute('id', 'container')
//var ordersRef = firebase.database().ref().child('tableOrders/'+key[i]);
tableOrderRef.on('value', snap => {

    var ordersKey = Object.keys(snap.val());
    console.log('sessionStorage.area : ' + sessionStorage.area)
    console.log('sessionStorage.UID : ' + sessionStorage.UID)
    console.log('sessionStorage.resturan : ' + sessionStorage.resturan)
    console.log('snap.val()', snap.val())

    for (i = 0; i < ordersKey.length; i++) {
        if (snap.val()[ordersKey[i]] != 'accepted') {
            oreders.push(firebase.database().ref().child('zones/' + sessionStorage.area + '/' + sessionStorage.resturan + '/tableOrders/' + sessionStorage.UID + '/' + ordersKey[i]));
            console.log(snap.val()[oreders[i]])
        }
    }
    for (i = 0; i < oreders.length; i++) {
        oreders[i].on('value', snap2 => {
            var sheetkey = Object.keys(snap2.val());
            console.log(snap2.val())
            for (j = 0; j < sheetkey.length; j++) {
                if (sheetkey[j] != 'status' && sheetkey[j] != 'total' && sheetkey[j] != sessionStorage.tabname && sheetkey[j] != sessionStorage.area && snap2.val()[sheetkey[j]] != 'accepted') {

                    console.log(sheetkey, sheetkey[j])
                    var dd = document.createElement('div');
                    var foodName = document.createElement('div');
                    var foodPrice = document.createElement('div');
                    foodName.setAttribute("class", 'foodname')
                    foodName.setAttribute("id", foodName[j])
                    foodName.innerText = sheetkey[j];

                    foodPrice.setAttribute("class", 'foodprice')
                    foodPrice.setAttribute("id", snap2.val()[sheetkey[j]])
                    foodPrice.innerText = snap2.val()[sheetkey[j]]


                    dd.appendChild(foodName)
                    dd.appendChild(foodPrice)
                    sheetDiv.appendChild(dd)


                    //cnt++
                    //console.log(cnt, SpareX.length - 2)
                    // sheet.push(firebase.database().ref().child('zones/' + sessionStorage.area + '/' + sessionStorage.resturan + '/tableOrders/' + sessionStorage.UID + '/' + ordersKey[i] + '/' + SpareX[j]));

                }
            }
            total = document.createElement('p');
            total.setAttribute("class", 'total')
            totalforall = totalforall + parseInt(snap2.val()['total'])

        })
    }
    

    total.innerText =' Total : '+((totalforall))
    sheetDiv.appendChild(total)

    finishButt = document.createElement('button');
    addButton = document.createElement('button');
    finishButt.setAttribute('id', "finishRequest");
    finishButt.innerText = 'I`m Done'
    addButton.setAttribute('id', "addSomething");
    addButton.setAttribute('onclick', "addfood()");

    addButton.innerText = 'Add Something'

    containerDiv.appendChild(sheetDiv)
    containerDiv.appendChild(finishButt)
    containerDiv.appendChild(addButton)

    document.body.appendChild(containerDiv);

})
function addfood() {
    window.location.href = '/menu-cart-table.html'
}


