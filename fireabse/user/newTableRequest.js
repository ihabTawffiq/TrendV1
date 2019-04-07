
var resturantName = sessionStorage.resturan;
var zone = sessionStorage.area;
var userId = sessionStorage.UID;
var tableName;
var requestskeys = [];
var requestskeysRefs = [];

var requestRef = firebase.database().ref().child('zones/'+zone+'/'+resturantName+'/tableOrders/'+userId);
var reqOBJ = [];
forListRef = firebase.database().ref().child('zones/'+zone+'/'+resturantName+'/tables');
forListRef.on('value',snap=>{
    var key = Object.keys(snap.val());

    for(i=0;i<key.length;i++){
        console.log(snap.val()[key[i]])
        if(snap.val()[key[i]]!='busy'){
           var opt= document.createElement('option');
           opt.innerText = key[i];
           document.getElementById('user-newOrder-tableRequest-tableName').append(opt)

        }
    }
})
document.getElementById('user-newOrder-tableRequest').addEventListener('click', sendRequest);
function sendRequest() {
    tableName = document.getElementById('user-newOrder-tableRequest-tableName').value;
    sessionStorage.tabname = tableName;
    //var statRef = firebase.database().ref().child('zones/'+zone+'/'+resturantName+'/tables/');

    
    //statRef.update({[tableName]: 'pinding'})
    var obj = {  [zone]: resturantName, [tableName]: 'pinding' }
    //sessionStorage.table =tableName;
    console.log(zone, tableName, resturantName)
    //console.log('cccccccccccccccccccccccccccccccccccccccccccccccccccccc)')
    requestRef.set(obj);


}
var listenerRef ;//= firebase.database().ref().child('tableOreders/');
/*requestRef.on('value', snap => {
    var key = Object.keys(snap.val());
    console.log(sessionStorage.tabname,'ccc')
    for (i = 0; i < key.length; i++) {
        
       
    }*/
    listenerRef= firebase.database().ref().child('zones/'+zone+'/'+resturantName+'/tableOrders/'+userId)
    //console.log('key : '+key[0])
    listenerRef.on('child_changed',snap=>{
        console.log(snap.val())
        window.location.href='/menu-cart-table.html'
    })
    

//})





