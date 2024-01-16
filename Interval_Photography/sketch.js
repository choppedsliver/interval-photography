let capture;
let capturedImages = [];
let lastCaptureTime = 0;
let captureInterval = 3 * 1000; // 60 seconds in milliseconds
let opacity = 20; // Adjust this value to set the opacity (0-255)

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(220);

  // Check if it's time to capture a new image
  if (millis() - lastCaptureTime >= captureInterval) {
    let newImage = captureImage();
    capturedImages.push(newImage);
    lastCaptureTime = millis();
  }

  for (let i = 0; i < capturedImages.length; i++) {
    tint(255, opacity); // Set the opacity for the captured images
    image(capturedImages[i], 0, 0, width, height);
    noTint(); // Reset the tint to normal
  }
}

function captureImage() {
  // Capture a frame from the webcam and return it as an image element
  let img = createImage(width, height);
  img.copy(capture, 0, 0, capture.width, capture.height, 0, 0, width, height);
  return img;
}
