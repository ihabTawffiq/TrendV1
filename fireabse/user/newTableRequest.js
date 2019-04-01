var userId = '3a2s1d4f5g6h9555555555555555555555555555555555555555555555j8k7';
var resturantName = sessionStorage.resturan;
var zone = sessionStorage.area;
var tableName;
var requestskeys = [];
var requestskeysRefs = [];
var requestRef = firebase.database().ref().child('tableOreders');
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
    var obj = { UID: userId, [zone]: resturantName, [tableName]: 'pinding' }
    console.log(zone, tableName, resturantName)
    //console.log('cccccccccccccccccccccccccccccccccccccccccccccccccccccc)')
    requestRef.push(obj);


}
var listenerRef ;//= firebase.database().ref().child('tableOreders/');
requestRef.on('value', snap => {
    var key = Object.keys(snap.val());
    console.log(sessionStorage.tabname,'ccc')
    for (i = 0; i < key.length; i++) {
       listenerRef= firebase.database().ref().child('tableOreders/'+key[i]+'/')
    }
    
    listenerRef.on('child_changed',snap=>{
        
        window.location.href='/menu-cart-table.html'
    })
    

})





