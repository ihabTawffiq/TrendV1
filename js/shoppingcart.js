itemID    =[]
itemPrice =[]
itemName  =[]
function additem()
{
  itemPrice.push(document.getElementById('price').value);
  displayCard();
}
function displayCard()
{
  cardData='<table><tr><th>Name</th><th>Price</th><th>Total</th></tr>';
  total =  0;
  for (i=0 ; i<itemPrice.length ; i++)
  {
    total+=itemPrice[i];
    cardData+="<td><tr>"+itemPrice[i]+"</td><td>"+total+"</td><td><button onclick='delItem("+ i +")'>Delete</button></td></tr>"
  }
  cardData+='<tr><td></td><td></td><td></td><td>' +total + '</td></tr></table>';

  document.getElementById('cart').innerHTML =cardData;
}

function delItem(a)
{
  itemPrice.splice(a , 1);
  displayCard()
}

