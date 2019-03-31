itemID = []
itemPrice = []
itemName = []
itemSize = []
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
    cardData += "<td>" + itemName[i] + '-' + itemSize[i] + "<td>" + itemPrice[i] + "</td><td><button onclick='delItem(" + i + ")'>Delete</button></td></tr>"
    //console.log(itemPrice[i], itemName[i], itemSize[i]);
  }
  cardData += '<tr><td></td><td></td><td></td><td> Total : ' + total + '</td></tr></table>';

  document.getElementById('cart').innerHTML = cardData;
}

function delItem(a) {
  itemPrice.splice(a, 1);
  displayCard()
}

