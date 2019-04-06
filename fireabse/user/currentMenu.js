var tableOrderRef = firebase.database().ref().child('zones/' + sessionStorage.area + '/' + sessionStorage.resturan + '/tableOreders/' + sessionStorage.UID);

var oreders = []
var total;
var sheet = []
var totalforall = 0;
var sheetDiv = document.getElementById('currentMenu');
var containerDiv = document.getElementById('container')
sheetDiv.setAttribute('class', 'container')
//sheetDiv.setAttribute('id', 'container')
//var ordersRef = firebase.database().ref().child('tableOreders/'+key[i]);
tableOrderRef.on('value', snap => {
    var ordersKey = Object.keys(snap.val());
    console.log('sessionStorage.area : ' + sessionStorage.area)
    console.log('sessionStorage.UID : ' + sessionStorage.UID)
    console.log('sessionStorage.resturan : ' + sessionStorage.resturan)
    console.log('snap.val()', snap.val())

    for (i = 0; i < ordersKey.length; i++) {

        oreders.push(firebase.database().ref().child('zones/' + sessionStorage.area + '/' + sessionStorage.resturan + '/tableOreders/' + sessionStorage.UID + '/' + ordersKey[i]));

        oreders[i].on('value', snap2 => {
            var SpareX = Object.keys(snap2.val());
            console.log('snap2.val()', snap2.val())
            for (j = 0; j < SpareX.length; j++) {
                if (SpareX[j] != 'status' && SpareX[j] != 'total' && SpareX[j] != sessionStorage.tabname && SpareX[j] != sessionStorage.area) {

                    //console.log(k)
                    var dd = document.createElement('div');
                    var foodName = document.createElement('div');
                    var foodPrice = document.createElement('div');
                    foodName.setAttribute("class", 'foodname')
                    foodName.setAttribute("id", foodName[j])
                    foodName.innerText = SpareX[j];

                    foodPrice.setAttribute("class", 'foodprice')
                    foodPrice.setAttribute("id", snap2.val()[SpareX[j]])
                    foodPrice.innerText = snap2.val()[SpareX[j]]


                    dd.appendChild(foodName)
                    dd.appendChild(foodPrice)
                    sheetDiv.appendChild(dd)


                    //cnt++
                    //console.log(cnt, SpareX.length - 2)
                    // sheet.push(firebase.database().ref().child('zones/' + sessionStorage.area + '/' + sessionStorage.resturan + '/tableOreders/' + sessionStorage.UID + '/' + ordersKey[i] + '/' + SpareX[j]));

                }
            }
            total = document.createElement('p');
            total.setAttribute("class", 'total')
            totalforall = totalforall + parseInt(snap2.val()['total'])
            console.log(totalforall)




        })

       

    }

    total.innerText = 'Toatal : ' + totalforall
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


