
document.getElementById('editPriceSave').addEventListener('click', editPriceSave);
function editPriceSave() {
    size = document.getElementById('editPriceSize').value;
}
document.getElementById('editPrice').addEventListener('click',editPrice);
function editPrice(){
    price = document.getElementById('editPrice-newPrice').value;
    var editPriceRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName + '/' + objectName + "/Sizes/" )
    var obj = {[size]:price}
    editPriceRef.update(obj);
}