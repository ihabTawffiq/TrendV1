var tableOrderRef = firebase.database().ref().child('tableOreders/');
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
    //console.log('t' + sessionStorage.area)
    for (i = 0; i < ordersKey.length; i++) {

        oreders.push(firebase.database().ref().child('tableOreders/' + ordersKey[i]));

        oreders[i].on('value', snap2 => {
            var sheetkey = Object.keys(snap2.val());
            for (j = 0; j < sheetkey.length; j++) {
                if (sheetkey[j] != 'status' && sheetkey[j] != 'total' && sheetkey[j] != sessionStorage.tabname && sheetkey[j] != sessionStorage.area) {

                    sheet.push(firebase.database().ref().child('tableOreders/' + ordersKey[i] + '/' + sheetkey[j]));

                }
            }

            var cnt = 0;
            for (i = 0; i < sheet.length; i++) {
                sheet[i].on('value', snap3 => {
                    var foodnames = Object.keys(snap3.val());
                    //console.log(snap3.val(),foodnames)

                    for (k = 0; k < foodnames.length; k++) {

                        //console.log(k)
                        if (foodnames[k] != 'status' && foodnames[k] != 'total') {
                            //console.log(k)
                            var dd = document.createElement('div');
                            var foodName = document.createElement('div');
                            var foodPrice = document.createElement('div');
                            foodName.setAttribute("class", 'foodname')
                            foodName.setAttribute("id", foodName[k])
                            foodName.innerText = foodnames[k];

                            foodPrice.setAttribute("class", 'foodprice')
                            foodPrice.setAttribute("id", snap3.val()[foodnames[k]])
                            foodPrice.innerText = snap3.val()[foodnames[k]]


                            dd.appendChild(foodName)
                            dd.appendChild(foodPrice)
                            sheetDiv.appendChild(dd)

                        }
                        //cnt++
                        //console.log(cnt, sheetkey.length - 2)

                    }
                    total = document.createElement('p');
                    total.setAttribute("class", 'total')
                    totalforall = totalforall + parseInt(snap3.val()['total'])
                    console.log(totalforall)

                })

            }
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


