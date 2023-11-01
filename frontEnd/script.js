//import * as tf from '@tensorflow/tfjs';

//const model = await tf.loadLayersModel('my_model2.keras');

var video = document.querySelector("#camera");

if (navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices.getUserMedia({ video: true })
		.then(function (stream) {
			video.srcObject = stream;
			// const example = tf.fromPixels(video);  
			// const prediction = model.predict(example);

			// span = document.getElementById("returnval");
			// txt = document.createTextNode(prediction);
			// span.appendChild(txt);
		})
		.catch(function (err0r) {
			console.log("Something went wrong!");
		});
}

