
var resturantName = 'poula`s';//given from enail
zone = 'cairo'//given from email
var tableName;
var requestskeys = [];
var requestskeysRefs = [];
var reqOBJ = [];
var viewDiv;
var area = 'cairo'
var tableNameArr = []

var numRef = firebase.database().ref().child('zones/' + area + '/' + resturantName + '/tables/');
numRef.on('value', snap => {
    var key = Object.keys(snap.val());
    //console.log(snap.val()[0])
    for (i = 0; i < key.length; i++) {

        var arrayDiv = new Array();
        var arrayButt = new Array();
        var arrayBut = new Array();
        var arraypre = new Array();

        arrayDiv[i] = document.createElement('div');
        arrayButt[i] = document.createElement('button');
        arrayBut[i] = document.createElement('button');
        arraypre[i] = document.createElement('pre');

        arrayDiv[i].style.backgroundColor = "lightblue";
        arrayDiv[i].style.height = 'auto';
        arrayDiv[i].style.width = 'auto';
        arrayDiv[i].style.margin = '20px';
        arrayDiv[i].style.float = 'left';
        arrayDiv[i].style.padding = '20px';
        arrayDiv[i].style.borderRadius = "25px";
        arrayDiv[i].className = 'block';
        arrayDiv[i].textContent = key[i];
        arrayDiv[i].id = 'block' + i;

        arrayButt[i].style.width = '60px';
        arrayButt[i].style.position = 'absolute';
        arrayButt[i].className = 'but';
        arrayButt[i].textContent = 'Accept';
        arrayButt[i].id = 'accept-' + key[i];
        arrayButt[i].style.float = 'right';


        arrayBut[i].style.width = 'auto';
        arrayButt[i].style.position = 'absolute';
        arrayBut[i].className = 'butt' + i;
        arrayBut[i].textContent = 'Confirm';
        arrayBut[i].id = 'confirm-' + key[i];
        arrayBut[i].setAttribute('onclick', 'confirmOreder(id)');




        arraypre[i].style.backgroundColor = 'black';
        arraypre[i].style.color = 'white';
        arraypre[i].style.width = 'auto';
        arraypre[i].style.height = 'auto';

        arraypre[i].style.float = 'top';
        arraypre[i].className = 'pre' + i;
        arraypre[i].id = 'sheet' + key[i]
        arraypre[i].textContent = 'INSIDE PRE';



        document.body.appendChild(arrayDiv[i]).appendChild(arrayButt[i]);
        document.body.appendChild(arrayDiv[i]).appendChild(arraypre[i]);
        document.body.appendChild(arrayDiv[i]).appendChild(arrayBut[i]);

    }

})

var requestRef = firebase.database().ref().child('tableOreders/');
requestRef.on('value', snap => {

    console.log('dd', JSON.stringify(snap.val(), null, 3))
    for (i = 0; i < snap.numChildren(); i++) {
        requestskeys.push(Object.keys(snap.val())[i]);
        requestskeysRefs.push('tableOreders/' + requestskeys[i] + '/');
    }

    console.log('a', requestskeys);
    console.log('b', requestskeysRefs)
    console.log('c', requestskeysRefs[0], requestskeys.length)
    for (i = 0; i < requestskeys.length; i++) {
        firebase.database().ref(requestskeysRefs[i]).on('value', snap2 => {
            var id;
            var status;
            firebase.database().ref(requestskeysRefs[i] + '/UID').on('value', uid => {
                id = (uid.val())
            })
            firebase.database().ref(requestskeysRefs[i] + '/' + Object.keys(snap2.val())[0]).on('value', stat => {
                status = (stat.val())
            })
            var obk = {
                'tableName': Object.keys(snap2.val())[0],
                'zone': Object.keys(snap2.val())[2],
                'UID': id,
                'tableStat': status
            }
            reqOBJ.push(obk);
            //console.log(Object.keys(snap2.val())[2])

        });


        viewDiv = document.getElementById('sheet' + reqOBJ[i].tableName);
        viewDiv.innerHTML = ('User ID : ' + reqOBJ[i].UID + '\n' + 'Table : ' + reqOBJ[i].tableName + '\n')
    }


});


function confirmOreder(id) {
    var tabname = id.split('-')[1]
    console.log(tabname)
    var statRef = firebase.database().ref().child('zones/' + area + '/' + resturantName + '/tables/');
    statRef.update({ [tabname]: 'busy' })


    var reff = [];
    for (i = 0; i < requestskeys.length; i++) {
        //requestskeys.push(Object.keys(snap.val())[i]);
        console.log(requestskeys)
        reff.push(firebase.database().ref().child('tableOreders/' + requestskeys[i] + '/'));
        console.log(reff)
        reff[i].update({ [tabname]: 'accepted' })
    }


    location.reload();


}
/*
statRef.on('child_changed',snap=>{
console.log('55555555555555555555555555555555555')
})
//}

*/

/*var requestskeys = [];
var requestskeysRefs = [];
var viewDiv = document.getElementById('sheet');
var request = firebase.database().ref().child('requests');
request.on('value', snap => {
    viewDiv.innerText = JSON.stringify(snap.val(), null, 3);
    console.log(JSON.stringify(snap.val(), null, 3))
    for (i = 0; i < snap.numChildren(); i++) {
        requestskeys.push(Object.keys(snap.val())[i]);
        requestskeysRefs.push('requests/' + requestskeys[i] + '/');
    }

    console.log(requestskeys);
    console.log(requestskeysRefs)
});
*/