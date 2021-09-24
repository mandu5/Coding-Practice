const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img"); //HTML in JS

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(); //js to HTML body


