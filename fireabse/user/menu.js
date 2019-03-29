const resturantName = res;
const resturantZone = area;
const sectionsRef = firebase.database().ref().child('resturants/'+resturantName+'/menu/');
document.getElementById('resturantName').innerText = resturantName;
document.getElementById('resturantData').innerText = resturantZone;
var cont = document.getElementById('limiter')

sectionsRef.on('value', snap => {

    var sectionNameArr = Object.keys(snap.val());
    for (var i = 0; i < sectionNameArr.length; i++) {
        var ul = document.createElement('ul');
        var p = document.createElement('p');

        ul.setAttribute('id', sectionNameArr[i]);
        ul.setAttribute('class','list-unstyled')
        p.setAttribute('class' ,'card-header')

        p.innerText = sectionNameArr[i];
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



                        foodName.setAttribute('class', "media-body");
                        price.setAttribute('id', 'class')
                        description.setAttribute('class', "media-body");
                        li.setAttribute('id', foodNameArr[j]);
                        li.setAttribute('size', sizesArr[k]);
                        goBtn.setAttribute('class', 'btn btn-primary');
                        goBtn.innerText = 'GO';

                        priceRef.on('value', snap4 => {
                            li.setAttribute('price', snap4.val());
                            price.innerText = 'price : ' + snap4.val();
                        })
                        size.innerText = 'size : ' + sizesArr[k];
                        console.log(sizesArr[k])

                        foodName.innerText = 'food Name : ' + foodNameArr[j];

                        DescriptionRef.on('value', snap => {
                            description.innerText = 'Description : ' + snap.val();
                        });

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
