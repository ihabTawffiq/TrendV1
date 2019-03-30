 var list = document.getElementById('list');

 var ref = firebase.database().ref().child('students/id/');

 ref.on('value',snap =>{

 })