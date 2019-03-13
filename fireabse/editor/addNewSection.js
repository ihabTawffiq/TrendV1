
document.getElementById('addNewSection').addEventListener('click', addNewSection)



function addNewSection() {

    console.log('in')
    //var resturantName ='poula`s' //document.getElementById('restaurantName').value;
    var initialValue = 'initialValue'
    var sectionName = document.getElementById('newSectionName').value;
    //var objectName = 'red rize'//document.getElementById('objectName').value;
    //var objectDescription = 'bloody'//document.getElementById('objectDescription').value;

    var objectDescriptionRef = firebase.database().ref('resturants/' + resturantName + '/menu/' + sectionName)
    //var oneSizaRef = firebase.database().ref('resturants/'+resturantName+'/'+sectionName+'/'+objectName+'/size/')
    //var multiSizeRef = firebase.database().ref('resturants/'+resturantName+'/'+sectionName+'/'+objectName+'/size/')
    //var sizeRef = firebase.database().ref('resturants/' + resturantName + '/' + sectionName + '/' + objectName + '/size/')
    //var optionRef = firebase.database().ref('resturants/' + resturantName + '/' + sectionName + '/' + objectName + '/option/')
    //var sectionRef = firebase.database().ref('resturants/' + resturantName + '/' + sectionName)

    var sectionobj = { initialValue }
    objectDescriptionRef.set(sectionobj)
        .catch(error => {
            console.log(('error' + error.message))
        });
}