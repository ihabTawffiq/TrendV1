var userId = '3a2s1d4f5g6h9j8k7';
var resturantName;
var tableName;
var requestskeys = [];
var requestskeysRefs = [];
var requestRef;
var reqOBJ = [];
document.getElementById('user-newOrder-tableRequest').addEventListener('click', sendRequest);
function sendRequest() {
    var zone = 'cairo';// document.getElementById('user-newOrder-tableRequest-zone').value
    tableName = '5'// document.getElementById('user-newOrder-tableRequest-tableName').value
    resturantName = 'poula`s'// document.getElementById('user-newOrder-tableRequest-resturantName').value
    requestRef = firebase.database().ref().child('requests');
    var obj = { UID: userId, [zone]: resturantName, [tableName]: 'pinding' }
    requestRef.push(obj);

    //var viewDiv = document.getElementById('sheet5');
    requestRef.on('value', snap => {
        //  viewDiv.innerText = JSON.stringify(snap.val(), null, 3);
        console.log(JSON.stringify(snap.val(), null, 3))
        for (i = 0; i < snap.numChildren(); i++) {
            requestskeys.push(Object.keys(snap.val())[i]);
            requestskeysRefs.push('requests/' + requestskeys[i] + '/');
        }

        //console.log(requestskeys);
        //console.log(requestskeysRefs)
        //console.log(requestskeysRefs[0], requestskeys.length)
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
                console.log(Object.keys(snap2.val())[2])
            });
        }
        console.log(reqOBJ)
        reff = reqOBJ;
    });
}



