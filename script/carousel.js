// Define an array of image URLs
const images = [
    'images/image1.png',
    'images/image2.png',
    'images/image3.png',
    'images/image4.png',
    'images/image5.png',
    'images/image6.png',
    'images/image7.png',
    'images/image8.png',
    'images/image9.png',
    'images/image20.png',
    'images/image22.png'
];

// Get a reference to the carousel image element
const carouselImage = document.getElementById('carousel-image');

// Set the source of the carousel image element to the first image in the array
carouselImage.src = images[Math.floor(Math.random() * images.length)];

// Set an interval to rotate the images every 3 seconds
setInterval(() => {
    // Get a random image from the array
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Set the source of the carousel image element to the random image
    carouselImage.src = randomImage;
}, 10000);
