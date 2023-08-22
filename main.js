function start() {
   navigator.mediaDevices.getUserMedia({audio : true });
   classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6CkIWyzow/model.json",modelready );
}

function modelready(){
    classifier.classify(gotresult);
}

function gotresult( error , result ) {
    console.log("Got the results");
    if (error) {
        console.log(error);
    } else {
        console.log(result);

        number_r = Math.floor(Math.random()*255)+1 ;
        number_g = Math.floor(Math.random()*255)+1 ;
        number_b = Math.floor(Math.random()*255)+1 ;

        document.getElementById("sound").innerHTML = "I can hear - "+result[0].label ;
        document.getElementById("accuracy").innerHTML = "Accuracy - "+(result[0].confidence*100).toFixed(2)+" % " ;

        document.getElementById("sound").style.color = "rgb("+number_r+" , "+number_g+" , "+number_b+")" ;
        document.getElementById("accuracy").style.color = "rgb("+number_r+" , "+number_g+" , "+number_b+")" ;

        img1 = document.getElementById("alien1") ;
        img2 = document.getElementById("alien2") ;
        img3 = document.getElementById("alien3") ;
        img4 = document.getElementById("alien4") ;

        if (result[0].label == "bell") {
            img1.src = "aliens-01.gif" ;
            img2.src = "aliens-02.png" ;
            img3.src = "aliens-03.png" ;
            img4.src = "aliens-04.png" ;
        }
        else if (result[0].label == "snap") {
            img1.src = "aliens-01.png" ;
            img2.src = "aliens-02.gif" ;
            img3.src = "aliens-03.png" ;
            img4.src = "aliens-04.png" ;
        }
        else if (result[0].label == "clap") {
            img1.src = "aliens-01.png" ;
            img2.src = "aliens-02.png" ;
            img3.src = "aliens-03.gif" ;
            img4.src = "aliens-04.png" ;
        }
        else {
            img1.src = "aliens-01.png" ;
            img2.src = "aliens-02.png" ;
            img3.src = "aliens-03.png" ;
            img4.src = "aliens-04.gif" ;
        }

    }
}