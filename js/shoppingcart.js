itemID = []
itemAddition=[];
itemOption=[];
itemPrice = []
itemName = []
itemSize = []
delivaryOrder = []
delivaryOrderObj = []
var delivaryOrderRef = firebase.database().ref().child('delivaryOreders/')
function additem(id) {
  //var x = id[0]
  //console.log(id)

  itemPrice.push(parseFloat(document.getElementById(id).getAttribute('price')));
  itemName.push(document.getElementById(id).getAttribute('name'))
  itemSize.push(document.getElementById(id).getAttribute('size'))

  //console.log(document.getElementById('price').getAttribute('price'))
  displayCard();
}
function displayCard() {
  cardData = '<table><tr><th>Name</th><th>Price</th></tr>';
  total = 0;
  for (i = 0; i < itemPrice.length; i++) {
    total += itemPrice[i];
    itemID[i] = itemName[i] + '-' + itemSize[i];
    delivaryOrder[i] =itemID[i]+'/'+ itemPrice[i];
    
    cardData += "<td>" + itemName[i] + '-' + itemSize[i] + "<td>" + itemPrice[i] + "</td><td><button id =" + itemID[itemID[i]] + " onclick='delItem(" + i + ")'>Delete</button></td></tr>"
    //console.log(itemPrice[i], itemName[i], itemSize[i]);
    //console.log(delivaryOrder)
  }
  cardData += '<tr><td></td><td></td><td></td><td> Total : ' + total + '</td></tr></table>';
  
  document.getElementById('cart').innerHTML = cardData;

}

function delItem(a) {
  console.log(a)
  itemPrice.splice(a, 1);
  delete delivaryOrder[a];
  //console.log(delivaryOrder)

displayCard()
}


