/*console.log('ccc',sessionStorage.sectionName,sessionStorage.resturantName,sessionStorage.objectName)
console.log(resturantName)
    //var file;
    function myFunction() {
        var x = document.getElementById("myFile");
        if ('files' in x) {

            for (var i = 0; i < x.files.length; i++) {
                var file = new Blob([JSON.stringify(x.files[i])]);
                file = x.files[i]
                console.log(file.size)

                sessionStorage.storageRef.put(file).then(function (snapshot) {
                    console.log('Uploaded a blob or file!');


                });

            }
        }

        //document.getElementById("demo").innerHTML = txt;

    }*/