var userId = '3a2s1d4f5g6h9555555555555555555555555555555555555555555555j8k7';
var resturantName;
var tableName;
var requestskeys = [];
var requestskeysRefs = [];
var requestRef;
var reqOBJ = [];
document.getElementById('user-newOrder-tableRequest').addEventListener('click', sendRequest);
function sendRequest() {
    var zone = document.getElementById('user-newOrder-tableRequest-zone').value;
    tableName = document.getElementById('user-newOrder-tableRequest-tableName').value;
    resturantName = document.getElementById('user-newOrder-tableRequest-resturantName').value;
    requestRef = firebase.database().ref().child('requests');
    var obj = { UID: userId, [zone]: resturantName, [tableName]: 'pinding' }
    console.log(zone, tableName, resturantName)
    console.log('cccccccccccccccccccccccccccccccccccccccccccccccccccccc)')
    requestRef.push(obj);


}
console.log('cccccccccccccccccccccccccccccccccccccccccccccccccccccc)')




