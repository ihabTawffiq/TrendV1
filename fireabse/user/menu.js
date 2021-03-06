const resturantName = sessionStorage.resturan;
var delivaryOrderRef = firebase.database().ref().child('zones/' + sessionStorage.area + '/' + sessionStorage.resturan + '/delivaryOrders/')
console.log(resturantName)
const resturantZone = sessionStorage.area;
const sectionsRef = firebase.database().ref().child('resturants/' + resturantName + '/menu/');
document.getElementById('resturantName').innerText = resturantName;
document.getElementById('resturantData').innerText = resturantZone;
var cont = document.getElementById('limiter')


sectionsRef.on('value', snap => {
    console.log(snap.val())
    var sectionNameArr = Object.keys(snap.val());

    for (var i = 0; i < sectionNameArr.length; i++) {
        var ul = document.createElement('ul');
        var p = document.createElement('p');

        ul.setAttribute('id', sectionNameArr[i]);
        ul.setAttribute('class', 'list-unstyled')
        p.setAttribute('class', 'card-header')
        if(sectionNameArr[i]!='Description'){
        p.innerText = sectionNameArr[i];
        }
        ul.appendChild(p)
        cont.appendChild(ul);

        const objectRef = firebase.database().ref().child('resturants/poula`s/menu/' + sectionNameArr[i]);


        objectRef.on('value', snap => {

            var foodNameArr = Object.keys(snap.val());
            for (var j = 0; j < foodNameArr.length; j++) {
                const DescriptionRef = firebase.database().ref().child('resturants/poula`s/menu/' + sectionNameArr[i] + '/' + foodNameArr[j] + '/Description/');
                const sizesRef = firebase.database().ref().child('/resturants/poula`s/menu/' + sectionNameArr[i] + '/' + foodNameArr[j] + '/Sizes');
                //const sizesRef = firebase.database().ref().child('/resturants/poula`s/menu/Dishes/rise/Sizes');

                sizesRef.on('value', snap3 => {
                    var sizesArr = Object.keys(snap3.val());

                    for (var k = 0; k < sizesArr.length; k++) {
                        var sizesArr = Object.keys(snap3.val());
                        const priceRef = firebase.database().ref()
                            .child('/resturants/poula`s/menu/' + sectionNameArr[i] + '/' + foodNameArr[j] + '/Sizes/' + sizesArr[k]);

                        var li = document.createElement('li');
                        var description = document.createElement('h5');
                        var foodName = document.createElement('h4');
                        var price = document.createElement('h6');
                        var size = document.createElement('h7');
                        var goBtn = document.createElement("BUTTON");
                        var img = document.createElement("img");
                        var storageRef = firebase.storage().ref().child(resturantName + '/' + sectionNameArr[i] + '/' + foodNameArr[j] + '.PNG');
                        console.log('resturantName',resturantName)
                        console.log('sectionNameArr[i]',i,sectionNameArr[i])
                        console.log('foodNameArr[j]',j,foodNameArr[j])
                        

                        storageRef.getDownloadURL().then(url=> {
                            // Insert url into an <img> tag to "download"
                            //var img = document.getElementById('myimg');
                            sessionStorage.url = url;
                            console.log(url)
                            console.log('see')
                            img.setAttribute('src',  sessionStorage.url)
                        }).catch(function (error) {

                            // A full list of error codes is available at
                            // https://firebase.google.com/docs/storage/web/handle-errors
                            switch (error.code) {
                                case 'storage/object-not-found':
                                    // File doesn't exist
                                    break;

                                case 'storage/unauthorized':
                                    // User doesn't have permission to access the object
                                    break;

                                case 'storage/canceled':
                                    // User canceled the upload
                                    break;



                                case 'storage/unknown':
                                    // Unknown error occurred, inspect the server response
                                    break;
                            }
                        });

                        
                        sessionStorage.url = ""
                        img.setAttribute('class', 'mr-3')
                        foodName.setAttribute('class', "media-body");
                        price.setAttribute('id', 'class')
                        description.setAttribute('class', "media-body");
                        li.setAttribute('id', foodNameArr[j] + '-' + sizesArr[k]);
                        li.setAttribute('size', sizesArr[k]);
                        li.setAttribute('name', foodNameArr[j])
                        goBtn.setAttribute('class', 'btn btn-primary');
                        goBtn.setAttribute('onclick', 'additem(id)');
                        goBtn.setAttribute('id', foodNameArr[j] + '-' + sizesArr[k])
                        goBtn.setAttribute('name', foodNameArr[j])
                        goBtn.innerText = '+';

                        priceRef.on('value', snap4 => {
                            goBtn.setAttribute('price', snap4.val())
                            li.setAttribute('price', snap4.val());
                            price.innerText = 'price : ' + snap4.val();
                        })
                        size.innerText = 'size : ' + sizesArr[k];
                        goBtn.setAttribute('size', sizesArr[k])
                        //console.log(sizesArr[k])

                        foodName.innerText = 'food Name : ' + foodNameArr[j];

                        DescriptionRef.on('value', snap => {
                            description.innerText = 'Description : ' + snap.val();
                        });
                        li.appendChild(img)
                        li.appendChild(foodName);
                        li.appendChild(description);
                        li.appendChild(price);
                        li.appendChild(size);
                        li.appendChild(goBtn);

                        ul.appendChild(li);
                    }
                })


            }
        });

    }

})
document.getElementById('purchase').addEventListener('click', addDelivaryOrder)
function addDelivaryOrder() {

    for (i = 0; i < delivaryOrder.length; i++) {
        delivaryOrderObj[(delivaryOrder[i].split('/'))[0]] = (delivaryOrder[i].split('/'))[1];
        console.log((delivaryOrder[i].split('/'))[0], (delivaryOrder[i].split('/'))[1])

    }
    delivaryOrderObj['total'] = total
    delivaryOrderObj['status'] = 'pinding'
    delivaryOrderObj['address'] = "address"
    delivaryOrderObj['phone'] = "phone"
    delivaryOrderObj['name'] = "name"

    delivaryOrderRef.push(delivaryOrderObj)

}
