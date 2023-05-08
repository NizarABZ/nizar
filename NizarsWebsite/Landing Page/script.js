
// Get all the images on the page
// Select all the images on the page
const images = document.querySelectorAll('.mainimages img');

// Add a mouseover event listener to each image
images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    // Shrink the image by reducing its width and height
    image.style.width = '80%';
    image.style.height = '80%';
  });

  // Add a mouseout event listener to each image to reset its size
  image.addEventListener('mouseout', () => {
    image.style.width = '100%';
    image.style.height = '100%';
  });
});


// Get the nav bar items
var navItems = document.querySelectorAll('.navigation a');

// Add a mouseover event listener to each item
navItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    this.style.color = 'purple'; // Change the color to red when hovering
  });

  // Add a mouseout event listener to each item
  item.addEventListener('mouseout', function() {
    this.style.color = ''; // Reset the color when no longer hovering
  });
});

var footItems = document.querySelectorAll('.footer a');
footItems.forEach(function(items) {
  items.addEventListener('mouseover', function(){
    this.style.color = 'purple';
  });
  items.addEventListener('mouseout', function() {
    this.style.color = '';
  });
});

var names = document.querySelectorAll('.contactme, .nizo, .famo')

names.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    this.style.color = 'purple'; // Change the color to red when hovering
  });

  // Add a mouseout event listener to each item
  item.addEventListener('mouseout', function() {
    this.style.color = ''; // Reset the color when no longer hovering
  });
});

