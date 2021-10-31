//https://teachablemachine.withgoogle.com/models/fKf01SFZZ/
Webcam.set({
    width:300,
    height:330,
    image_format:"png",
    png_quality:99
});
camera = document.getElementById("camera")
Webcam.attach("#camera")

function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="snap_img" src="'+data_uri+'"/>';
    
    });
}

speech();
console.log("ml5 version is "+ ml5.version)

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fKf01SFZZ/.model.json", modelloaded);
function modelloaded(){
    console.log("model loaded")
}
function speech(){
    spk = window.speechSynthesis;
    speak_data_1 = "the First Prediction is " + prediction_1;
    speak_data_2 = " and the Second Prediction is " + prediction_2;
    utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    spk.speak(utterThis);
}